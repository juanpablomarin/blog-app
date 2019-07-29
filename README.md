# Blog/Portfolio Application

## Introduction

This project is in the works to be some sort of portfolio/blog site! I started this project to get a better grasp on full-stack web development and implement good coding practices.

Starting from scratch allows for so many learning opportunities, like security issues, infrastructure, git workflow and some other things that'll **definitely** come up as this starts being developed.

There are a few things I want to address though, such as my choices for technologies. Why do I wanna talk about these things? I think its the best way to understand why I'm coding in this specific language and being transparent in my choices.

First thing to mention though, is my code structure. My choice here was Model, View, Controller (MVC). A highly-popular framework, since I've heard it be used **everywhere**, from work to the classroom. It works because its effective, and really allows you to tackle your code with different mindsets, and allows easy separation of responsibility when developing code.

### Front-End Technologies

#### React 

The View, I chose this language/framework because of experience and interest! Came across this framework(?) in a university web-development course and now using it even more in my first internship. Seems like React is becoming more popular as it gains more traction, and honestly, despite this initial learning curve, it's really useful and powerful. Reusable components is a useful practice to learn, since the obvious is that we're re-using code! React really forces you to implement good coding practices because once you don't, your front-end code becomes a mess and hard to follow. Also, it also allows the front-end components of your web-application to be completely agnostic to what your back-end is built on. 

Another point is how powerful it is in maintaining a single-page application (as most web-apps are nowadays) with useful features such as state and prop-types!

Some of the libraries currently in use alongside React are:

- styled-components: Easily implement CSS into react components
- axios: For making API calls
- react-bootstrap: For already available react components

### Back-End Technologies

#### Node.js

This includes, *Express*. Why Node.js? My first reason I can think of is syntax, both the back-end and front-end are now written in Javascript (though there are differences in standards), and also node_modules. The amount of libraries that are available are insane with `npm`. Including those libraries are so easy with `npm install`. Also comfort, despite how much front-end programming I've done with Javascript, why not enforce my practices in the back-end too?

#### MongoDB with Mongoose

A NoSQL database seems to be the typical choice of database when it comes to Node.js related applcations, and so many tutorials/resources always seem to be used with MongoDB. Though, I'm not feeling too strong about continuing with MongoDB, however a SQL-based language does tend to be a pain with queries and data consistency. So it seemed going NoSQL was the lesser of the two evils here, but this may just my own prejudices against SQL.

#### Chai

"Test early, test often". Having a testing framework there, to test API endpoints will definitely help proving that your code is correct. (Goodbye Proofs of Program Correctness). Tests will also help in the discovery of bugs, ensuring your code is good! That's why I chose Chai - honestly it was the first library I saw I could use with node.js so I just hopped on it.

## Branching Strategy

At first I wanted to push everything to master, but there's something really wrong with that. We always want master to be the cleanest branch there is, and that anything that is deployed from master is always the best state of the code, no bugs, no dirty and unorganized code. Currently, master is in a state of disarray, but over the next few commits, I'll be cleaning up master, or doing a large overhaul of master soon. For now, the working branch will be under working-branch, and we'll use git flow to organize branches. feature/* is where most branches should be living off of.


## Prerequisites
I'll be going into more detail into each of the front-end/back-end readme.md for setup/requirements.
