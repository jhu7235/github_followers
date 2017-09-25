import React, {Component} from 'react';
import FollowerExtraData from './FollowerExtraData.jsx';
// import SwitchButton from 'react-switch-button';

/**
 * COMPONENT
 */
export default class FollowerCard extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.toggleMoreData = this.toggleMoreData.bind(this);
  }

  toggleMoreData() {
    console.log('TOGGLE MORE DATA');
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div className="follower-card">
        <div className="follower-portrait">
          <img src={this.props.follower.avatar_url} />
        </div>
        <div className="follower-data">
          <ul>
            <h2>{this.props.follower.login}</h2>
            <h5>ID: {this.props.follower.id}</h5>
          </ul>
        </div>
        <div className="button">
          <button type="button" className="more-data-button" onClick={this.toggleMoreData}>More</button>
        </div>
        {this.state.open
          ? <FollowerExtraData follower={this.props.follower} />
          : <div></div>
        }
      </div>
      );
  }
}
