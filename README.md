# Codial
This is a prototype of a social media application developed using React.js for learning purpose
A singlepage social media webpage built in React. Data is fetched form the API https://codeial.com:8000/api/v2 using Routing. Store is used for providing props to all React Components. 

## Demo
Checkout the application [here](https://shivani-jadon.github.io/Codial/) at https://shivani-jadon.github.io/Codial/

## Features
- Displays posts and friendlist
- Navbar common to all Components
- Routing for better user experience
- Authenticate the user (login/signup) feature
- Add and remove friend
- API calling for fetching and editing data

Credit to flat-icons and https://codeial.com:8000/api/v

## How To Install.

0. Run this app by directly opening the above link or follow steps below to set up on local directory.
1. Clone this project
2. Start by installing npm if you don't have it already.
3. Navigate to Project Directory by :
```
cd codial
```
4. run following commands :
```
npm install 
npm start or react-scripts start
```
## Directory Structure

`/src` - all code files <br>
`/src/components` - all react components <br>
`/src/store` - single store for states for entire app <br>
`/src/actions` - action functions <br>
`/src/reducer` - all action reducers <br>
`/src/helpers` - for utility fucntions and urls <br>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

