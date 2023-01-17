
# Mern Stack Project for an Online Learning System

Corsatk is an online learning platform designed for students and instructors. It gathers all the educational content and resources one might need in one place. It is also an excellent way for students and teachers to monitor student progress.




## Motivation
Education not only improves an individual's personality, but it also brings changes in the society and helps it become a civilized society. It should be accessed by everyone everywhere at anytime. Time is the most important apect in one's life. Once time is wasted; it can't be retrieved so one should be keen to use it efficiently. Hence, our system was designed to save time and facilitate the flow of information from instructors to students.  
## Build Status
Currently, the system is running smoothly with every bug fixed and every error addressed.
## Code Style
Unfortunately, there is no specific code style followed while implementing this project.
## Screenshots

![Add New Course](https://github.com/seifzeidan/My-frontend/blob/main/WhatsApp%20Image%202023-01-18%20at%2001.00.30%20(1).jpeg)
![Edit Profile](https://github.com/seifzeidan/My-frontend/blob/main/WhatsApp%20Image%202023-01-18%20at%2001.00.30%20(2).jpeg)
![Login/Register](https://github.com/seifzeidan/My-frontend/blob/main/WhatsApp%20Image%202023-01-18%20at%2001.00.30.jpeg)


## Tech Stack

**Client:** ReactJS

**Server:** NodeJS


## Features

- Error Handling with respect to the error message coding conventions
- Special UI/UX design
- Fullscreen mode
- Cross platform


## Usage/Examples

```javascript
import { Landing, Register, Error, ProtectedRoute } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  FindCourses,
  ReportProblem,
  Profile,
  SharedLayout,
  YourCourses,
  AddNewCourse,
  InstructorCourses,
  ViewReported,
  AddNewUser,
} from "./pages/dashboard";
```


## Installation
- Install node js 
- Install IDE that support javascript ( we recommend visual studio)
- Install the nodeman package
- Install the mongoose package
- Install the express package
- Install node package manager

    
## API Reference

#### Post Course

```http
  Post/localhost:3000/addCourse
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Title of course |
| `subject`      | `string` | **Required**. Course subject |
| `subtitles`      | `string` | **Required**. Course subtitle |
| `price`      | `string` | **Required**. Price of course |
| `summary`      | `string` | **Required**. Course summery |
| `youtubeVideoLink`      | `string` | **Required**. Youtube link of the video explaining the course |

#### AddCourse(title, subject, subtitles,price,summary,youtubeVideoLink)

Takes the required fields and add a course.


## Running Tests

To run tests, run the following command

```bash
  cd my-project   # set it to the directory of your project
  npm install 
  npm start
```


## How to Use?
Register by filling out the required fields. If you are already a user, you should sign in. Based on your account type (trainee,admin,instructor,etc.), you will be allowed certain features; for example, an admin can add new users and handle reports, a trainee can search and rate courses and instructors, and an instructor can upload video links and search for the courses given by him/her. If you left any required field unfilled or tried to do an unauthorized action, an error would appear informing you. You can try to log out and register as another user of different type to notice the different features.
## Contributing

Contributions are always welcome!

Visit https://github.com/seifzeidan/My-frontend.git and clone the project to your desktop then start running tests.



## Acknowledgements

 - [ReactJS Tutorials](https://www.geeksforgeeks.org/reactjs-tutorials/)
 - [Traversy Media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA)
 - [The Net Ninja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg  )
 - [Introduction to Node.js](https://www.youtube.com/playlist?list=PLZlA0Gpn_vH_uZs4vJMIhcinABSTUH2bY)
 - [Build A REST API With Node.js, Express, & MongoDB - Quick](https://www.youtube.com/watch?v=fgTGADljAeg)
 - [ES6 Tutorials](https://www.youtube.com/playlist?list=PLZlA0Gpn_vH-0FlQnruw2rd1HuiYJHHkm)
 - [React](https://www.youtube.com/playlist?list=PLZlA0Gpn_vH_NT5zPVp18nGe_W9LqBDQK)
 - [React Hooks](https://www.youtube.com/playlist?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h)
 - [JWT Authentication Tutorial - Node.js](https://www.youtube.com/watch?v=mbsmsi7l3r4)
 - [Node.js Passport Login System Tutorial](https://www.youtube.com/watch?v=-RCnNyD0L-s)
 - [MERN Stack Authentication Tutorial (Part 1 - The Backend)](https://dev.to/salarc123/mern-stack-authentication-tutorial-part-1-the-backend-1c57)
 - [Top 10 Lists](https://www.youtube.com/playlist?list=PLZlA0Gpn_vH_ma_XO-GLSpL9L06ii4mAp)
 - [Testing](https://www.youtube.com/playlist?list=PLZlA0Gpn_vH_63f0HH-dUtkininO7GO6f)


## License

[MIT](https://choosealicense.com/licenses/mit/)

