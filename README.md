# Lab4 node-vue

This is the setup reference for lab 5 in the IntNet course.
The setup focuses on showing all the basic features of Nodejs and Vue.js while keeping it quite small and easy to understand. While not everything is perfect in terms of how to structure Nodejs/Vue it is a very good basic structure to build smaller applications without having to do a major refactoring.

For those who wants to do the project in Node/Vue we heavily recommend that you do this lab properly since you will most likely be able to use this lab as a base for the project.

## Setup

To run this you need to:

1. git clone this project
2. install node, latest version should work (tested with 10.13.0)
3. run `npm install`
4. run `npm start`

## Structure

The code is split into 2 very distinct part: server (app) and front end (public).
Both parts are written in javascript, however as you will soon discover, they use it in very different ways.

### Server

_Lives in the `app` folder_

The server is a Nodejs application and is build upon the `express` webserver framework.

**index.js:** This is the entry file and is both the most and least important one. You probably won't need to touch it very much to complete the lab, but it is the core to understanding how everything works.

**boilerplate/setup.js:** This file is called from the index file and contains most of the boilerplate code you usually have to write in order to get a server such as this one up and running. You dont have to change anything in this file what so ever if you dont want to, but it is recommended to at least look at it.

**model.js:** This is where the data-structures are defined and how the data is related.

**models/*.js:** This folder contains all of the models used in `model.js`.

**controllers/rest.controller.js:** defines what is supposed to happen for all api requests that are sent through http. Most are simply for fetching data.

**controllers/socket.controller.js:** Defines what is supposed to happen for all "interactive" events where the client wants to reach other clients or when the server wants to contact a/all clients.

### Client

_Lives in the `public` folder_

The client is a so called SPA, or Single Page Application, and is written using a framework called `Vue.js`.

**index.html:** This is similarly to the index.js in the back end the most important file, and also the one you will probably change the least. The important thing to notice here is that it contains the navbar (since it should always be there) and a `router-view` tag. The `router-view` tag serves as a placeholder for where the rest of the app should be dynamically loaded.

**app.js:** Defines how the modules are interconnected and currently also defines routing and what code to associate to what sub-page.

**controllers.js:** This is the meat of the logic for the client. Here all the functions, events, ajax-calls and what not are defined for the entire application. This should obviously be split up for a larger app, but is more than good enough for the lab.

**style.css:** This file contains some CSS styles. Unfortunately this file looks like crap and we are going to pretend that this is for educational purposes. Good luck.

**views/*.js:** These are the "views" of the client and contains information about what data should be mapped where, how to display it and how to react to user interactions. You can think of each view as a tiny app in and of it self.

# Docs & Resources

Frontend:

* Interactive Vue 101 __(recommended)__:  https://scrimba.com/p/pXKqta/cQ3QVcr
* Vue docs: https://vuejs.org/v2/guide/
* Vue router docs: https://router.vuejs.org/
* Socket io (client): https://socket.io/docs/client-api/
* Add template literal syntax highlight for html _(It makes the templates a lot easier to read)_:
    *  For vscode: https://marketplace.visualstudio.com/items?itemName=faisalhakim47.vue-inline-template
    *  For other editors see [awesome-vue](https://github.com/vuejs/awesome-vue#source-code-editing)

Backend:

* Download nodejs __(required)__: https://nodejs.org/en/
* Nodejs docs: https://nodejs.org/dist/latest-v10.x/docs/api/
* Express docs: https://expressjs.com/en/4x/api.html
* Socket io (server): https://socket.io/docs/server-api/
* Using socket io with express _(This has already been solved for you)_: https://socket.io/docs/#Using-with-Express

These links are just recommendations, you might not need all of them, or you might need to find your own sources. <br>
Good luck!
