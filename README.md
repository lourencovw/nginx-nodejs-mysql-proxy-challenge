# NGINX Reverse Proxy Challenge
In this challenge, I put into practice what I've learned about using NGINX as a reverse proxy. The main idea is that when a user accesses NGINX, it will make a call to Node.js application. This application will then add a record to our MySQL database, registering a name in the 'people' table.

The response from the Node.js application to NGINX should be
```
<h1>Full Cycle Rocks!</h1>
<li>{firstName} {lastName}</li>
...
```