# Weather application

A simple page where you can find the first fifteen cities, closer some location, weather maximum and minimus temperature, by clicking on map and the button "search". You can see more details by clicking and one listed city.

The focus of this project is to keep popular concepts and components to make friendly for new developers, without loss efficiency and best practices.

This project was builded with [Create React App](https://github.com/facebook/create-react-app), is the easiest way to create a scalable and good boilerplate for a react application, on these days there is a lot of components build by community that expect this boilerplate.  

## Usage example
### Desktop
![Desktop usage example](https://media.giphy.com/media/JBMVLHiLMjyAuTaKQe/giphy.gif)

### Mobile
![Mobile usage example](https://media.giphy.com/media/Fv55AeapPFWdHTiC8E/giphy.gif)
  
## Starting an application

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
  
# Structure and Components Explanations

## React hooks

Hooks are the new best option for organizing reusable components in a simpler way.  
They was embraced by community and is becoming the most popular way to use.  
Others benefits is useEffect and useState, that made easy to control states and circle of life of a component

## Atomic Design

Is a good and popular way to structure your components, separating in atoms, molecules and organisms to generate cleans pages and make easier to reuse. It's included in this structure templates.  
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
Materiaul UI can be Themify in future if need some default css differents.  x
You can learn more in [Material UI DOC](https://material-ui.com/).

## Utils

Files gathering functions and constants that are reusables, separated by context.

## Skeleton loading

While the components are loading it is called the skeleton component, making it more visually pleasing during the loading.

## React router dom

The most popular, updated and complete, they are working into a new hook-based API, that will be 100% backward compatible, offering an incremental migration.  


# Disclaimer and Observations

* I don't have a google maps license, so please don't mind with warning pop up.
* I chose to create a scalable and more complex project than necessary, aiming to show more about my react knowledge and how to structure it.  
* DetailsPage isn't constructed with the best pratice for atomic desing, but this way I can show how I work, first of all is created a page or bigger component, after that all de small components are natural noticed and isolated. That way I prevent to create some unecessary or not useful components.  
* I don't put `<Typography/>` material component in all text of custom components, but putting is the right use.
* To keep a component with a minimum documentation is add a READ.ME for everyone, but this normally isn't accept by the time wasted caring about this files, so another way is commenting all props inside a component. The next step for this project is take one of this option for rule.  
* A good improvement for this application is take more care about HTML semanctic and changing the base for Next.js, to get a server side rendering so having better SEO.
* Lastly I added `<MapsContainer/>` inside another page, showing the easy way to reuse and adapt.

# LICENSE

[MIT](https://github.com/matheusscbb/weather-application/blob/master/LICENSE)


# Keywords
None