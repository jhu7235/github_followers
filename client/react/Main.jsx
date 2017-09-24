import React, { Component } from 'react';
import axios from 'axios';

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
    };

    this.searchFollowers = this.searchFollowers.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  searchFollowers(follower) {
    // userName match
    if (this.matchCredentials(follower.login)) return true;
    // name match
    if (follower.name && this.matchCredentials(follower.name.split(' ')[0])) return true;
    if (follower.name && this.matchCredentials(follower.name.split(' ')[1])) return true;
    // name id
    if (this.matchCredentials(follower.id.toString())) return true;
  }

  matchCredentials (followerData) {
    let matchCount = 0;
    for (let ind = 0; ind < this.state.selectedFollower.length; ind++) {
      if (this.state.selectedFollower[ind] === followerData[ind]) matchCount++;
      else return false;
    }
    if (matchCount === this.state.selectedFollower) return true;
  }

  getUser(event) {
    axios.get(`${API_PREFIX}users/${event.target.value}/followers`)
      .then(res => {
        console.log(res.data);
        this.setState({
          error: null,
          followers: res.data,
        });
        return res.data;
      })
      .then(followers =>
        followers.map(follower =>
          axios.get(`${API_PREFIX}users/${follower.login}`)
            .then(res => res.data)
            .catch(() => {
              this.setState({
                error: 'cannnot find follower data'
              });
            })
        )
      )
      .catch((err) => {
        this.setState({
          error: 'invalid user',
          followers: [],
        });
        console.log(err);
      });
  }

  render() {
    return (
      <div id="main">
        <form onSubmit={this.searchFollowers}>
          <div className="userName">
            <label htmlFor="userName"><small>User Name</small></label>
            <input
              name="userName"
              type="userName"
              className="form-control"
              onBlur={this.getUser}
              required
            />
          </div>
          <div className="follower">
            <label htmlFor="follower"><small>Search based on name, username, or id</small></label>
            <input
              name="follower"
              type="follower"
              className="form-control"
              required
            />
          </div>
          <br />
          {this.state.error
            ? <div className="errorMessage"> {this.state.error} </div>
            : <div></div>
          }
{/*          <div>
            <button type="submit" className="btn">Search</button>
          </div>*/}
        </form>
        {this.state.followers.length ?
          this.state.followers.filter(this.searchFollowers).map((follower) => (<h3>{follower.login}</h3>)) :
          <div></div>
        }
      </div>
    );
  }
}
