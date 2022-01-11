# SEI Project 3: Museum Mapper

## Contents
* [Deployed Project Link](https://github.com/sapphire-p/SEI-Project-3#deployed-project-link)
* [The Brief](https://github.com/sapphire-p/SEI-Project-3#the-brief)
* [Overview and Concept](https://github.com/sapphire-p/SEI-Project-3#overview-and-concept)
* [Code Installation](https://github.com/sapphire-p/SEI-Project-3#code-installation)
* [Technologies Used](https://github.com/sapphire-p/SEI-Project-3#technologies-used)
* [Planning](https://github.com/sapphire-p/SEI-Project-3#planning)
* [Development Process](https://github.com/sapphire-p/SEI-Project-3#tdevelopment-process)
* [Challenges](https://github.com/sapphire-p/SEI-Project-3#challenges)
* [Wins](https://github.com/sapphire-p/SEI-Project-3#wins)
* [Future Improvements](https://github.com/sapphire-p/SEI-Project-3#future-improvements)
* [Key Learnings](https://github.com/sapphire-p/SEI-Project-3#key-learnings)

## Deployed Project Link

Museum Mapper is a full-stack application built using MongoDB, Mongoose, Express, React and Node.js enabling users to discover natural history museums across England.

I worked on this project as part of a team of four developers, with [Isaac Franks](https://github.com/iglfranks), [Kumar Mehta](https://github.com/Kumarmehta019) and [Oliver Skjevesland](https://github.com/Olys6), over a period of 9 days.

**This project has been deployed online and can be viewed [HERE](https://museummapper.herokuapp.com/).**

(Please allow a few seconds for it to load!)

To access all features you can create an account by clicking Register, or feel free to use the test login, which is ‘admin59’ for both username and password.

## The Brief

* **Build a full stack application** complete with your own back end and front end
* **Use an Express API**, to serve your data from a Mongo database
* **Consume your API with a separate front end** built with **React**
* **Ensure it is a complete product** with multiple relationships, models and CRUD functionality
* **Present a visually impressive design**
* **Deploy the project online** so it is accessible to the public
* **Timeframe:** 9 days


## Overview and Concept

Natural history museums sit at the intersection of many of the interests and expertise of our team (including museums, geology and history), so together we created our own noSQL database and RESTful API on this subject, and used React to build an engaging and feature-rich UI for users to interact with.

The result is a MERN stack app for other museum lovers to learn more about natural history collections in England.

<img width="1000" alt="Home-page" src="https://user-images.githubusercontent.com/84339614/148814981-b6ee0b9f-b8b1-4b98-a74d-dfc53800669d.png">

Features include:
* Authentication enabling users to Register and Login
* Interactive map of natural history museums in England
* Directory of museums in England
* Functionality to filter and search museums by region and collection type
* Museum show page with detailed information on each individual museum
* Ability to write reviews of museums and read others’ reviews
* Directory of ‘Standout Exhibits’ to note
* ‘Featured Museum’ feature on Home page, selected at random
* Ability to ‘favourite’ museums and a personalised Profile page to view these

My particular contributions included building registration and login components to enable user authentication, an interactive map using Mapbox API and react-map-gl, and multiple filters and search functionality to improve user experience. I also contributed much error handling and styling using Bulma and CSS.

<p align="center">
<img width="760" alt="Map-view" src="https://user-images.githubusercontent.com/84339614/148815586-0da3447e-102f-45d9-86ee-60505456b89b.png">
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/84339614/148815698-6170c7b1-b185-40d0-9c2d-96a7a1768899.png" height="250" alt="Map Index">
  <img src="https://user-images.githubusercontent.com/84339614/148815718-89be0163-c3e2-4f06-8a0b-602723738d76.png" height="250" alt="Museum Show">
</p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/84339614/148816263-59f8ae4b-edbf-4a06-b8c7-62dff97588c1.png" height="250" alt="Profile page">
  <img src="https://user-images.githubusercontent.com/84339614/148816273-ab2bcdac-0f66-4f80-b997-596e90238412.png" height="250" alt="Standout Exhibits">
</p>

## Code Installation

If you would like to explore the code on your local machine:

* Clone or download this repo
* Ensure MongoDB is installed and running on your local machine. You can use `mongod –dbpath ~/data/db` with the correct path to start MongoDB
* In the root directory of the app, install dependencies for the back end: `yarn`
* Seed data to the database: `yarn seed`
* Start the back end server: `yarn serve`
* Navigate into the front end directory: `cd front-end`
* Install dependencies for the front end: `yarn`
* Start the front end server: `yarn start`
* You should now be able to view the app in your browser at `localhost:3000`

## Technologies Used

**Back end**

* Mongodb
* Mongoose
* Express
* Node.js
* Nodemon
* Bcrypt
* jsonwebtoken

**Front end**

* React.js
* React Router DOM
* JavaScript (ES6)
* HTML5
* Axios
* Bulma
* CSS
* react-map-gl

**Other technologies**

* Mapbox (for map API)
* VS Code
* Yarn
* Insomnia
* Git / GitHub
* Heroku (deployment)


## Planning

As a group, after brainstorming the core features and functions of our app, we planned out our back end RESTful routes and the CRUD functionality we wished to implement, as well as designating which endpoints should be secure routes sitting behind authentication.

We also mapped out our front end, planning the components and the data each would need to access via Axios API requests to our back end, as well as discussing the different kinds of relationships between the museums, users and reviews.

Since our primary subject was museums, we gave some thought to the structure of the museum schema and what data it would be good to include. By specifically exploring natural history museums, honing in on England and agreeing on the regions and collection types we would categorise the museums by, we kept our focus tight and our scope manageable.

![7_Planning-docs_screenshot](https://user-images.githubusercontent.com/84339614/148819955-a797326f-8632-4dac-a9de-00a010b2a0c1.png)

### Wireframes

Once we had discussed our back end and front end plans, we created some wireframes to guide the visual design of the app and agreed to use a mixture of Bulma framework and CSS for front end layout and styling.

<p align="center">
  <img src="https://user-images.githubusercontent.com/84339614/148820537-918eca0b-92e7-4d51-8ac9-1662d2c6f298.png" height="300" alt="Wireframe of home page">
  <img src="https://user-images.githubusercontent.com/84339614/148820545-b9140644-1ec5-4ecc-b9f5-b9b5a934555a.png" height="300" alt="Wireframe of Museum Index">
</p>

### Project Management

To ensure that we kept on track and achieved our objectives within the limited timeframe, we implemented daily morning standups to report on progress made, and to share knowledge and problem solve any issues arising. We also kept in regular contact via Slack and Zoom.

## Development Process

We decided to code the back end together to ensure a solid foundation for our project, and spent the first 2 days focusing on this. We used Mongoose schemas to define the User and Museum models, and built the review schema in the same file as the museum schema to facilitate the embedded relationship between reviews and the museums they refer to.

The key relationships established in this project:
* Users and their favourite museums: a reference relationship via the ‘favourites’ field in the user schema.
* Users and their museum reviews: a reference relationship via the ‘owner’ field in the review schema.
* Museums and reviews about them: an embedded relationship where reviews are embedded via the ‘reviews’ field in the museum schema.

<img width="733" alt="10_userSchema_code" src="https://user-images.githubusercontent.com/84339614/148820870-fd93ac85-3cfe-4b22-a6fd-85b788322f79.png">

<img width="558" alt="11_reviewSchema-and-museumSchema_code" src="https://user-images.githubusercontent.com/84339614/148820892-52ac392e-0b6f-45d6-96de-114df7e37272.png">

Mongoose virtual fields enabled us to determine data that would not persist and be stored to the database (for example the password confirmation users would enter when registering), and to control what data was populated in the response to API requests (used when adding an ‘average rating’ field to the museums data returned in response to GET requests). We all pitched in to collate data to seed to our database so that we had information to display.

Once we had established controllers and routes for our core CRUD operations and tested them using Insomnia, we added a React front end to our back end and diverged at this point to work on different features, whilst maintaining regular communication. This meant that we could each tackle different components and make the most of our project time.

I took ownership of the following features:

* **Register** - enabling new users to create a profile.
* **Login** - to facilitate returning users.
* **Museums Map** - interactive map displaying user location and museum locations.
* **Filter on Home page** - enabling museum discovery by region and collection type.
* **Filtered Museums component** - displaying results of filter on Home page.
* **Filter and search on All Museums** - to control the museums index data displayed.
* **Error handling and loading states** - for the components I built.

I was particularly pleased to successfully implement the interactive map using Mapbox API and react-map-gl, and incorporated the following functionality:
* Markers for user location and the locations of the museums.
* Popups that appear when a user hovers over a museum marker and that when clicked link to the individual museum page.
* Scrollable list of museums to accompany the map (with custom scrollbar to highlight this functionality), with cards that when clicked display the popup of that museum on the map.
* Filter that updates the museums list and markers on the map to show only museums from a specified region.

<p align="center">
<img width="750" alt="Map-view" src="https://user-images.githubusercontent.com/84339614/148821565-306cb0d3-6587-4197-9de8-f22c89411940.png">
</p>

In the code shown below from the Map component, I define a series of pieces of state required for the map using React’s useState hook. Inside the useEffect that is triggered by the first render of the component, I set the value of the userLocation piece of state to the user’s current location, available through the Geolocation API accessed via the browser window if the user gives permission. I also make an Axios GET request to the back end to retrieve all museums data, then sort it alphabetically and store it in the allMuseums and filteredMuseumsArr pieces of state for use later.

![Map_1_code](https://user-images.githubusercontent.com/84339614/148821924-8c7852a2-8a4c-4126-a929-4ee504f5c867.png)

Shown below, the handleDropdownChange function is triggered by the event listener on the dropdown menu above the list of museums that accompanies the map. It sets the selectedRegion piece of state to the region selected. When this piece of state changes, the useEffect shown will set filteredMuseumsArr to the value of allMuseums (if the user selects an ‘All Regions’ option), or to the value of allMuseums filtered by the specific region (if the user selects one).

![Map_2_code](https://user-images.githubusercontent.com/84339614/148822067-e327e882-f147-4848-a162-172e548b21bd.png)

In the code specifying what to render, I use react-map-gl’s Marker component to display both the user’s location and all of the museums stored in the filteredMuseumsArr piece of state on the map. The onMouseOver event listeners handle the popups that appear when the user hovers over the emoji icons rendered on the map.

![Map_3_code](https://user-images.githubusercontent.com/84339614/148822105-34da91ba-7007-4570-a3dd-8c4ff844a05b.png)

By the seventh day, our team had virtually achieved our MVP, so we were able to turn our attention to extra features to take our project up a level. Oliver built out an index page for Standout Exhibits associated with each museum, while Kumar added an image carousel to the individual museum page and Isaac worked on the favourite museums.

Having already built the main filter on the Home page, I was able to add an additional filter to the All Museums index page, this time with a search bar that makes use of a regular expression:

![Museum Index filter](https://user-images.githubusercontent.com/84339614/148822188-d8074be8-81b8-453c-8544-0bab12745a14.png)

The final couple of days were spent testing and bug fixing, refining the styling, and adding error handling and loading states.

## Challenges

* **Figuring out the relationships** - since we were all new to Mongoose and the structure of its schemas, it took us a little time to determine which kinds of relationships were required between the different models. At first, we thought the standout exhibits might need their own model and an embedded relationship to the museums, before realising that it was more efficient to simply add them as a field in the museum schema.
* **Styling as a team** - although we were largely working on different components at any one time, since we were all making additions to the main.css file, we ran into a few instances of conflicting CSS classes. We soon realised that communication was key and were able to move forward smoothly from then onwards.

## Wins

* **Development teamwork** - software engineering is such a collaborative field, and it was a valuable and rewarding experience to improve our teamwork skills through group project management, communication and collaborative problem solving.
* **Map feature** - I was happy to successfully implement the interactive map displaying museums and user location, and will be using Mapbox APIs and react-map-gl in future projects.
* **Filters and search bars** - during this project I enjoyed a few opportunities to build these, and took a great deal of satisfaction in applying JavaScript logic to achieve the functionality required.
* **Responsive web design** across the whole app apart from the individual museum show page.

## Future Improvements

* Responsive design fixes for the individual museum show page.
* Bug fixes for favouriting museums, e.g. to prevent duplicates if a user favourites the same museum multiple times.
* Improved styling e.g. footer does not stay at bottom of viewport during loading states.
* Additional filter and search functionality to accompany the map, beyond region filter.

## Key Learnings

* **MongoDB and noSQL databases** - building this full stack MERN app advanced my knowledge of back end development, non-relational databases and their relative flexibility, and how embedded and reference relationship types work with MongoDB.
* **Team Git and GitHub processes** - this project increased my understanding of the processes involved in working with Git as a group, such as working on different branches, pulling down, merging and pushing code, and resolving merge conflicts.
* **Reading documentation** - through reading the docs for Mongoose, Mapbox and other technologies used in this project, I was exposed to different examples of technical documentation and became more familiar with navigating it.

