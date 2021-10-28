# System Design

**Task manager's architecture**

## Single repo or a bunch of micro services

Single repo is good for making MVP, but a bunch of 
micro services may be more effective

## What should do backend

Backend have to connect and use database, 
make connection with telegram by webhooks and also must
connect with github. 
Backend have to use websockets to change info on site.

## About databases

There are user's, telegram's, github's, tasks', projects's and etc.
databases

## Only web panel user need?

User needs only web panel to change and make tasks.
But user may see tasks and projects on phone by connection with telegram.
In this case, mobile app is optional, like a desktop app, especially
some features