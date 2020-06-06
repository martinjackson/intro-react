[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/martinjackson/intro-react)

# Intro React
Example of an initial project

-----------------------

## Project Tree

- client (the frontend: ReactJS, etc)
    - Single Page App
    - build process:  webpack(babel(React+JSX)) => bundle.js
- server (the NodeJS backend: web services, etc.)
    - NodeJS serves up initial index.html + bundle.js
    - NodeJS provides the web API needed by frontend

-----------------------------

## Initial creation of the client directory
```
npx create-react-app client
cd client
npm start
```
