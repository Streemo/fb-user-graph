# fb-user-graph

For Meteor. Get FB profile information from one of your users who signed up with FB.

### Install

`meteor add streemo:fb-user-graph`

### Example

```
const graph = new UserGraph(2.7) //version 2.7
const user = Meteor.users.findOne({},{fields:{services:1}})
const info = graph.get(user, ['email','birthday','picture','education','last_name'])
```