# SEI Project 3: Museum Mapper

## Contents
* [Deployed Project Link](https://github.com/sapphire-p/SEI-Project-4#deployed-project-link)
* [The Brief](https://github.com/sapphire-p/SEI-Project-4#the-brief)
* [Overview and Concept](https://github.com/sapphire-p/SEI-Project-4#overview-and-concept)
* [Code Installation](https://github.com/sapphire-p/SEI-Project-4#code-installation)
* [Technologies Used](https://github.com/sapphire-p/SEI-Project-4#technologies-used)
* [Planning](https://github.com/sapphire-p/SEI-Project-4#planning)
* [Development Process](https://github.com/sapphire-p/SEI-Project-4#tdevelopment-process)
* [Challenges](https://github.com/sapphire-p/SEI-Project-4#challenges)
* [Wins](https://github.com/sapphire-p/SEI-Project-4#wins)
* [Future Improvements](https://github.com/sapphire-p/SEI-Project-4#future-improvements)
* [Key Learnings](https://github.com/sapphire-p/SEI-Project-4#key-learnings)

## Deployed Project Link

Museum Mapper is a full-stack application built using MongoDB, Mongoose, Express, React and Node.js enabling users to discover natural history museums across England.

I worked on this project as part of a team of four developers, with [Isaac Franks](https://github.com/iglfranks), [Kumar Mehta](https://github.com/Kumarmehta019) and [Oliver Skjevesland](https://github.com/Olys6), over a period of 9 days.

**This project has been deployed online and can be viewed [HERE](https://museummapper.herokuapp.com/).**

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

<img width="1000" alt="Map-view" src="https://user-images.githubusercontent.com/84339614/148815586-0da3447e-102f-45d9-86ee-60505456b89b.png">

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








