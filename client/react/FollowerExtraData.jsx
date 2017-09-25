import React from 'react';

/**
 * COMPONENT
 */
export default function FollowerExtraData(props) {
  return (
    <div className="follower-extra-data">
      {props.follower.name && <li>Name: {props.follower.name}</li>}
      {props.follower.bio && <li>Bio: {props.follower.bio}</li>}
      {props.follower.blog && <li>Blog: {props.follower.blog}</li>}
      {props.follower.company && <li>Company: {props.follower.company}</li>}
      {props.follower.email && <li>Email: {props.follower.email}</li>}
      {props.follower.following && <li>Following: {props.follower.following}</li>}
      {props.follower.followers && <li>Followers: {props.follower.followers}</li>}
      {props.follower.hireable && <li>Hireable: {props.follower.hireable}</li>}
      {props.follower.location && <li>Location: {props.follower.location}</li>}
      {props.follower.public_gists && <li>Public gists: {props.follower.public_gists}</li>}
      {props.follower.public_repos && <li>Public repos: {props.follower.public_repos}</li>}
      {props.follower.site_admin && <li>Site admin: {props.follower.site_admin}</li>}
      {props.follower.url && <li>URL: {props.follower.url}</li>}
    </div>
    )}