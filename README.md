# CAR RENTALS APP

In this project, I developed a frontend web application, Car Rentals using [Car Rentals API](https://car-rental-rails.herokuapp.com/) - [Repo](https://github.com/tGodson/car-rental-rails) I also develop, a requirement for my final capstone project to consume the data using React Application.

The application features includes:
- A proper Authentication for Sign in and Sign up
- A secure page that requires authentication using JWT 
- Listing of Cars for Hire
- User can add car to favourites
- User can access list of cars added as favourites

![screenshot](app_screenshot.png)

## Live Demo
[Live Demo]()


## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Make sure Node.js is running on your local machine

### Setup

~~~bash
$ git clone https://github.com/saikatgpae/GTG-cab.git
$ cd rcar-rental-react
~~~

Install modules:

```
yarn add
npm install
```

### Usage

Start server with:

```
    yarn start or npm start
```
### Running Test
Jest is used to run all the tests found in this application
In order to run the test you can simply type `yarn test` or `npm run test`

Either ways, if you encounter any error while running either command, its likely you do not have `jest` installed globally, so please run `npm install -g jest-cli` then try again. That should do it.

### Deployment instructions

```
    git add .
    git commit -m "ready for first push to heroku"  
    heroku create $APP-NAME --buildpack mars/create-react-app
    git push heroku $BRANCH_NAME:master
```

Fire up your app by running `heroku open` Yay!!! your app has been deployed successfully.

# Author

👤 **Tendongze Godson**

- Email: [Email](saikatgpae@gmail.com)
- Github: [saikat](https://github.com/saikatgpae)
- Linkedin: [saikat](https://www.linkedin.com/in/saikatgpae/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page]().

## Show your support

Give a ⭐️ if you like this project!



