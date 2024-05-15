# NGINX Reverse Proxy Challenge
In this challenge, I put into practice what I've learned about using NGINX as a reverse proxy. The main idea is that when a user accesses NGINX, it will make a call to Node.js application. This application will then add a record to our MySQL database, registering a name in the 'people' table.

The response from the Node.js application to NGINX should be
```
<h1>Full Cycle Rocks!</h1>
<li>{firstName} {lastName}</li>
...
```
## Usage
To use this repository, follow these steps:

1. Clone the repository to your local machine:
  ```
  git clone https://github.com/lourencovw/nginx-nodejs-mysql-proxy-challenge.git
  
  ```
2. Navigate to the cloned directory:
  ```
  cd nginx-nodejs-mysql-proxy-challenge
  
  ```
3. Run Docker Compose to build and start the services:
  ```
  docker-compose up -d --build
  
  ```
4. Access the application at http://localhost:8080/.
