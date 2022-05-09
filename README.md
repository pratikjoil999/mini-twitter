# Mini Twitter RESTful API



This API's are designed for the Mini Twitter application. It promotes the best practices that follow the [SOLID principles](https://en.wikipedia.org/wiki/SOLID)
and [clean architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html). 
It encourages writing clean and idiomatic code. 

## The API's provides the following features right out of the box:

* RESTful endpoints in the widely accepted format
* Standard CRUD operations of a database table
* JWT-based authentication
* Environment dependent application configuration management
* Error handling with proper error response generation
* Data validation
* Full test coverage

## Project dependencies
just install `Node.js` in your system

## Installation & Run
```bash
# Download this project
git clone https://github.com/pratikjoil999/mini-twitter.git
```

## After Cloning:

```shell
# Go to mini-twitter directory
cd mini-twitter

# Install npm
npm install

# Run project 
NODE_ENV=PRODUCTION npm start

```


At this time, you have a Mini Twitter RESTful API server running at `http://127.0.0.1:10010` or `http://localhost:10010`. It provides the following endpoints or routes:

* `POST /api/v1/twitter_user/addEmployee`: API service use to register USER
* `POST /api/v1/twitter_user/login`: authenticates a user and generates a JWT
* `GET /twitter_user/getUser/:id`: get user details by id
* `GET /api/v1/twitter_user/searchUser/:username`: search user by name
* `POST /api/v1/twitter_user/follow`: Follow User
* `GET /api/v1/twitter_user/findMultipleUser`: Find multiple user or user we following
* `POST /api/v1/tweets/tweet`: Use to Tweet 
* `POST /api/v1/tweets/tweetFind` : Search Tweet
* `POST /api/v1/tweets/multiTweetFind` Find multiple tweets 
* `POST /api/v1/twitter_user/logout` Logout user and refresh user token

## Project folder structure:

1. `Route` In route directory all routings are specify as per the component. Diffrent Route files are maintain for the diffrent module
2. `Controller` Passes all the params to next directory for perticular operation
3. `Service` use to write business logics. It passes the parameters provided by Controller to Core.
4. `Core` use to perform the CRUD operation or database operation and pass the information to Service


## Deployment

This application is HOST / Deployed on Amazon's EC2 instance. Below are the steps to Host applications.

1. Create AWS account.
2. Launch `EC2` instance. For this project I personally use free tire instance with Amazon linux OS
3. Go to instance shell
4. yum install git
5. yum install curl
6. curl -o -https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh| bash
7. export NVM_DIR="$HOME/.nvm"
8. nvm install node
9. nvm ls 
10. nvm install v10.16.0
11. nvm use v10.16.0
12. nvm uninstall v14.12.0
13. npm install pm2 -git
14. NODE_ENV=PRODUCTION PORT=10010 pm2 start app.js --name RFL-PROD-API
15. ip and port whitelisting (whitelisting your port i.e 10010)


## Author

[Pratik Joil](https://www.linkedin.com/in/pratik-joil/)










