---
slug: reading-database-design-for-mere-mortals
title: Reading "Database Design for Mere Mortals" – Chapter 4 Notes
date: 2025-07-18
metadesc: Reflections on Chapter 4 of "Database Design for Mere Mortals" by Michael J. Hernandez. Covers mission statements, table relationships, and applying the design process to a blog API project.
published: false
---
# Reading "Database Design for Mere Mortals" by **Michael J. Hernandez**

I picked this book up by recommendation from Laracasts database series and I had it on the shelf for a few months already. I decided to do this 90day challange to learn more about SQL as it is one of the dark spots of my self taught developer journey. I have some other resources that fit the topic but this will be the main driver for the next weeks. I read the first three chapters a while ago and won't mention them in detail here but I want to reflect chapter 4 a conceptional overview about the design process.

## Chapter 4 - Conceptional Overview

Right at the start the author underlines the importance of the design process and mentions concepts like mission statements and objectives.

## Mission statement and Objectives
**Mission statement** - its the first phase of designing a database. It establishes the purpose of the database and provides the focus for the design work.

e.g. it's the main datastore for my blog and enables me setting up relationships between posts and create series of posts.

**Objectives** - are statements that define general tasks users can perform against the data in the database. They support the mission statement and help determine various aspects of the structure.

It is talked about two groups that are needed to define the mission statement and the objectives.

- **Mission statement group**: dev, database owner and the responsible management person
- **Objectives group**: dev, management, person who is responsible for database

In my learning projects all the persons are covered by me but I try my bests to see the aspects of each persona.

## Analysing the database
The second step would be analysing the current database, as I start from a blank state this is not applicable for me at the moment.


## Defining Datastructures
So I follow up with creating the datastructures. I remember my former coworker Engelbert how mentioned this as most important for him. He told me that when he got the datastructures right, designing and developing an app around it gets much easier.
I'll also try to figure out the bare minimun structure needed for starting the project. I made the mistake in the past that I created fields in the database that I thought we would eventually need going forward but ended up useless and empty in production. I think we can always alter tables to contain additional fields when needed.

## Establishing Table Relationships
Nextup is defining relationships between tables. Very interesting to me and for the first project my blog api it will be the relationship between posts and tags and posts and post_series. At that point I'm not quite sure how this ends up as I still have to start the task.

## Defining Business Rules
An interesting area for me. Here I will try to find possibilties I get moving the blog posts to a database from markdown and evtl. limitation I will face. From that information I try to create validation rules that are enforced by the database. I hope this helps making the application logic simpler.

## Defining Views
In this step you check how you want to use the database and which level of detail is needed for certain views. I interpret this section as e.g. for the post overview I don't need the content itself from the database e.g. a list of posts that consist of title, date, and tags and create appropriate view for each section.

## Reviewing data integrety
We review the database structure in the order we designed it. Review the tables and the fields. Check the validity of the relationships and review the business rules we identified.

As I follow up with my blog-api project I'll post also details how I feel about appling what i learned from the book.
