import express from 'express';
import 'dotenv/config';

const app = express();
const port = 4000;

const ghData = {
    "login": "hellosamyak",
    "id": 153379105,
    "node_id": "U_kgDOCSRhIQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/153379105?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/hellosamyak",
    "html_url": "https://github.com/hellosamyak",
    "followers_url": "https://api.github.com/users/hellosamyak/followers",
    "following_url": "https://api.github.com/users/hellosamyak/following{/other_user}",
    "gists_url": "https://api.github.com/users/hellosamyak/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/hellosamyak/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/hellosamyak/subscriptions",
    "organizations_url": "https://api.github.com/users/hellosamyak/orgs",
    "repos_url": "https://api.github.com/users/hellosamyak/repos",
    "events_url": "https://api.github.com/users/hellosamyak/events{/privacy}",
    "received_events_url": "https://api.github.com/users/hellosamyak/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Samyak Jain",
    "company": null,
    "blog": "https://medium.com/@jainsamyak0805",
    "location": "Jabalpur",
    "email": null,
    "hireable": true,
    "bio": "Hey there! I'm Samyak Jain --- a techie, cricket nerd, and CSE undergrad exploring Web Development. I love building scalable, productive stuff.",
    "twitter_username": "hellosamyak",
    "public_repos": 49,
    "public_gists": 0,
    "followers": 4,
    "following": 7,
    "created_at": "2023-12-09T15:42:22Z",
    "updated_at": "2026-06-15T19:05:10Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/samyak', (req, res) => {
    res.send('hellosamyak')
})

app.get('/gh', (req, res) => {
    res.json(ghData)
})

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening on port ${process.env.PORT || port}`);
});