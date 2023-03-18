# Responsive Dynamic Web Page

This project is developed in response to the placement assignment given by NPAV, Pune.


## Demo

https://npav-asses.vercel.app/


## Tech-Stack Implemented
- [ReactJs]
- [Css] 
## Features
When user click on the Radio buttons i.e., "Test Data" and "Server Data", it changes the mode of fetchAPI. when user click on the Test Data it fetched data locally created and displayes to the user on screen. if the user selects "Server Data" it fetched the fetched the data from the API (https: assessments. reliscare.cam/api,'cric-scores) and displayes to the web page.
The data fetched will calculate the average of the all data(i.e., score of the team) and calculates its average and then the calculated average is diplayed in terms of a horizontal progress bar.


Caution !!! If certain countary data is not available it will show "Null" and the progress bar will set to 0.


## Explaination
- function CricScore() {
  const [checkStatus, setCheckStatus] = useState("test");
  const [country1, setCountry1] = useState("India");
  const [country2, setCountry2] = useState("Pakistan");

This is a piece of code written in JavaScript language. It defines a function called CricScore that has a few variables and logic inside it.

The function uses a state management tool called useState to store and update the values of variables called checkStatus, country1, and country2.

There is also a variable called data that stores an array of cricket scores. This data is used to display scores for India and Pakistan in this code.

The function also has a useEffect hook that runs when the checkStatus variable changes. If the checkStatus is "server", it will fetch data from an API and update the data variable with the new values.

- function calculateAverage(country) {
    const matches = data.filter((match) => match[0] === country);
    const scores = matches.map((match) => match[1]);
    const averageScore =
      scores.reduce((total, score) => total + score, 0) / scores.length;
    return averageScore;
  }

This is a function called calculateAverage that takes in a parameter called country.

The function uses the data variable defined earlier, which stores an array of cricket scores, to filter out only the matches played by the input country. It does this using the filter() method, which returns a new array of elements that satisfy a certain condition. In this case, it returns all the matches where the first element (index 0) of each sub-array matches the input country.

Then, the function uses the map() method to extract only the scores of the matches played by the input country. The map() method creates a new array with the results of calling a provided function on every element in the array.
Next, the function uses the reduce() method to sum up all the scores in the scores array, and then divide it by the number of scores to get the average score. The reduce() method reduces an array to a single value by executing a reducer function on each element of the array.Finally, the function returns the average score. So, when this function is called with an input country, it calculates and returns the average score for that country from the data array.

- useEffect(() => {
    if (checkStatus === "server") {
      async function fetchData() {
        try {
          const response = await fetch(
            "https://assessments.reliscore.com/api/cric-scores/"
          );
          const jsonData = await response.json();
          setData(jsonData);
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      }

useEffect hook to fetch data from a remote server when the checkStatus variable is set to "server". The useEffect hook is a function that is called automatically by React every time the component is rendered or re-rendered. It allows to execute side-effects, such as fetching data from an API, after the component is mounted or updated. The code inside the useEffect hook defines an asynchronous function called fetchData() that makes an HTTP request to an API endpoint using the fetch() method. The fetch() method returns a promise that resolves to the response from the server. Once the response is received, the code uses the response.json() method to extract the data from the response in JSON format. This data is then passed to the setData() function, which updates the data variable with the new values.





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
