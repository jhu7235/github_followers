import React from 'react';

/**
 * COMPONENT
 */
export default function FollowerExtraData(props) {
  return (
    <div className="follower-extra-data">
      {props.follower.name && <li>{props.follower.name}</li>}
      {props.follower.bio && <li>{props.follower.bio}</li>}
    </div>
    )}

/*
"https://avatars0.githubusercontent.com/u/2313?v=4"
bio
:
"Maintain cordova-android, work on other code.  I put the things that I work on here."
blog
:
"http://infil00p.org"
company
:
"Adobe Systems Inc"
created_at
:
"2008-03-05T18:57:18Z"
email
:
null
events_url
:
"https://api.github.com/users/infil00p/events{/privacy}"
followers
:
112
followers_url
:
"https://api.github.com/users/infil00p/followers"
following
:
19
following_url
:
"https://api.github.com/users/infil00p/following{/other_user}"
gists_url
:
"https://api.github.com/users/infil00p/gists{/gist_id}"
gravatar_id
:
""
hireable
:
true
html_url
:
"https://github.com/infil00p"
id
:
2313
location
:
"Vancouver, BC Canada"
login
:
"infil00p"
name
:
"Joe Bowser"
organizations_url
:
"https://api.github.com/users/infil00p/orgs"
public_gists
:
7
public_repos
:
109
received_events_url
:
"https://api.github.com/users/infil00p/received_events"
repos_url
:
"https://api.github.com/users/infil00p/repos"
site_admin
:
false
starred_url
:
"https://api.github.com/users/infil00p/starred{/owner}{/repo}"
subscriptions_url
:
"https://api.github.com/users/infil00p/subscriptions"
type
:
"User"
updated_at
:
"2017-09-13T21:22:51Z"
url
:
"https://api.github.com/users/infil00p"*/