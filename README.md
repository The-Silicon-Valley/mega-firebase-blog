
# Firebase-Based-Blogging-Platform
Table of contents
1. Introduction / Purpose
2. Project Details
3. Contribution Guide

# Introduction / Purpose
We are a group of curious developers who would like to learn by making and breaking things. As a result we came up with a single project in which all of us can contribute and have a good learning and team playing experience. 
This is being moderated by [Raunak](https://github.com/raunakhajela) and [Chintan](https://github.com/ChintanPalan) as a part of their open source contributions and team management practice. We are by no means owners of this project and this project is totally open for anyone to join in and contribute. We are taking a role of guides to ensure that this is being maintained correctly with good motivation from all contributors.

# Project Details

So the idea is very simple, A Blogging platform powered by the [Firebase](https://firebase.google.com) Firestore database underneath.
It is a simple JSON Documents based database which is very easy for beginners to get started with. Before beginning to work on this project, you might want to checkout their [official documentation.](https://firebase.google.com/docs/firestore/quickstart) 
## What the stack?
The stack you ask? Well that's the thing, we are just giving you guidelines about the basic data structure to be used in firebase, admin and user side flow. Thats it.
They can be implemented by using any Frontend you want to use. We are thinking of starting off with React, Vue, Angular and Vanilla JS / jQuery.
~~Currently as of start we are only making directories for the React stack anyone working on any other stack, if there does not exist the directory for your stack, just go ahead and create one, and send in a pull request and we will merge it in.~~

Instead of keeping all the stacks in one repository, we thought that it makes much more sense for each stack to have its own repository. So since react is already setup in this repository, we will keep it as it is, but for further stacks, we will create a new repository for each new stack. For example in vue js we will create new repository with name Firebase-Based-Blogging-Platform-Vue.
So for any new stack that we want to work on, you need to get in touch with admin. You can do that by creating new issue in this or any related repository, or even send a message on [Discord](https://discord.gg/mXfydfW). 

This repo will be a react stacked project.

Flow for Admin Dashboard
* Fixed header
	*  Logo
	* Avatar - When clicked it will show dropdown with options like Profile, Settings, Sign Out  
* Dashboard (Contents TBD) - Currently can be kept as a welcome message
* Posts
	* All Posts- You will see all the posts with options like Add, Edit, Delete, Sorting, Searching and Filter
	* Add New Post
		* Title
		* Body (We will use editor.js)
		* Date
		* Author
		* Featured Image
		* SEO Settings
		* Categories
		* Visibility (Draft / Published)
* Comments (Not for now)
* Navigation Settings (Menu Items)
* Profile Page
	* Username
	* Email
	* Password
		* Option to change
	* Logout

## Frontend for Blog
For front end use [this](https://www.taniarascia.com/) reference. A very simple one and easy to implement.

## Admin UI
We are not using any admin template, front end devs will assist in this.
We will keep the overall layout like that of WordPress.
Just plain old Title, Body, Categories and Featured image.
Other fancy things can be added as an when needed.


# Contribution Guide
We are starting this in month of October to support [Hacktoberfest](https://hacktoberfest.digitalocean.com) and encourage new developers to contribute openly. We are totally open to any kind of contribution, even improving this readme file. 
Just try to keep it in a good shape and learn good code

# Get in touch
We are all connected using Discord and you can join it [here](https://discord.gg/mXfydfW)