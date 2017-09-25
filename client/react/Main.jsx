import React, { Component } from 'react';
import axios from 'axios';
import Promise from 'bluebird';
import FollowerCard from './FollowerCard.jsx';

const API_PREFIX = 'https://api.github.com/';

/**
 * COMPONENT
 */
export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      followers: [],
      error: null,
      selectedFollower: '',
      userName: null,
    };

    this.searchFollowers = this.searchFollowers.bind(this);
    this.getUser = this.getUser.bind(this);
    this.updateSelectedFollower = this.updateSelectedFollower.bind(this);
  }

  searchFollowers(follower) {
    console.log(follower);
    if (this.selectedFollower === '') return true;
    // userName match
    if (this.matchCredentials(follower.login)) return true;
    // name match
    if(follower.name) {
      let firstName = follower.name.split(' ')[0];
      let lastName = follower.name.split(' ')[1];
      console.log('firstName', firstName && this.matchCredentials(firstName.toLowerCase()));
      if (firstName && this.matchCredentials(firstName.toLowerCase())) return true;
      if (lastName && this.matchCredentials(lastName.toLowerCase())) return true;
    }
    // name id
    if (follower.id && this.matchCredentials(follower.id.toString())) return true;
    return false;
  }

  matchCredentials (followerData) {
    console.log(followerData);
    for (let ind = 0; ind < this.state.selectedFollower.length; ind++) {
      if (this.state.selectedFollower[ind] === followerData[ind]);
      else return false;
    }
    return true;
  }

  getUser(event) {
    let userName = event.target.value;
    return axios.get(`${API_PREFIX}users/${userName}/followers`)
      .then(res => {
        this.setState({
          error: null,
          followers: res.data,
          userName,
        });
        return res.data;
      })
      .then(followers =>
        Promise.map(followers, follower =>
          axios.get(`${API_PREFIX}users/${follower.login}`)
            .then(res => res.data)
            .catch(() => {
              this.setState({
                error: 'cannnot find follower data'
              });
            })
        )
      )
      .then(followers => this.setState({followers}))
      .catch((err) => {
        this.setState({
          error: 'invalid user',
          followers: [],
        });
        console.log(err);
      });
  }

  updateSelectedFollower(event) {
    console.log('lajsdfal', event.target);
    this.setState({selectedFollower: event.target.value});
  }

  render() {
    return (
      <div id="main" className="container">
        <div id="follower-finder">
          <div className="userName">
            <input
              placeholder="search user"
              name="userName"
              type="userName"
              className="form-control"
              onBlur={this.getUser}
              required
              autoFocus
            />
          </div>

          <div className="follower">
            <input
              placeholder="filter followers (name, username, id)"
              name="follower"
              type="follower"
              className="form-control"
              onChange={this.updateSelectedFollower}
              required
            />
          </div>

          <br />
          {this.state.error
            ? <div className="errorMessage"> {this.state.error} </div>
            : <div></div>
          }
        </div>
        {this.state.followers.length
          ? this.state.selectedFollower.length
            ? this.state.followers.filter(this.searchFollowers).map((follower) => <FollowerCard key={follower.id} follower={follower} />)
            : this.state.followers.map((follower) => <FollowerCard key={follower.id} follower={follower} />)
          : <div>no followers</div>
        }
      </div>
    );
  }
}
