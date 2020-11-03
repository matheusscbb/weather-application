# Weather application

A simple page where you can find the first fifteen cities, closer some location, weather maximum and minimus temperature, by clicking on map and the button "search".

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), is the easiest way to create a scalable and good boilerplate for an react application, on these days there is a lot of components build by community that expect this boilerplate.  

![Examples usage](https://media.giphy.com/media/eyWvXC8UNNquGG1tg9/giphy.gif)
  
## Starting an application

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
  
## Atomic Design

Is a good and popular way to structure your components, separating in atoms, molecules and organisms to generate cleans pages and make easier to reuse.  
There is an explanation about all types of components inside your respective folders.

## Google Map React

After tried some google maps components I decide use this component. This npm is updated, easy to use with react hooks, have a good documentation and is popular.

## Fetch instead Axios

For this application I choose to use fetch api, axios is normally the best options, beacuse is a popular and strong library with a lot of benefits. But for this projetct need just one request, so a native resquest fill our necessity.
Every request must be separated by type in files inside service folder.

## Materiul ui component and Styled components

To combinate with google maps I used material design to customize the components. Using a library like Material or Bootstrap you guarantees a visual pattern and a 
ready documentation, making easier to teach news members how to create news components.  
A recommended way to use CSS with Material UI is styled component, besides you earn scoped styles and no-class policy that make easy to not expert CSS members to alter a component without break others, have sass and polished support and possibility to server-side rendering.

## Utils

Files gathering functions and constants that are reusables, separated by context.

## Skeleton loading

While the components are loading it is called the skeleton component, making it more visually pleasing during the loading.
