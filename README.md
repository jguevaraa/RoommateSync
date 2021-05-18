# Roomate SYNC

<br>

## Description

This is a page where you can search for roommates filtered by place, age and budget

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start playing into competition
-  **Login:** As a user I can login to the platform so that I can play competitions
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Add a request for roomate** As a user I can add
-  **Edit a request for roomate** As a user I can edit
-  **Contact with others usets** As a user I can send message to others users
-  **Delete the messages** As a user I can delete my messages
-  **Search roommates by location** As a user or not, I can see all the roomates request.
-  **Load a profile photo** As a user I can upload an image for the profile



## Backlog

- Add a map widget and geolocation
- Add a "Rent room" section onlly for users
- Add an API (AirBNB..)


<br>


# Client / Frontend

## React Router Routes (React App)
| Path                      | Component            | Permissions                 | Behavior                                                     |
| ------------------------- | -------------------- | --------------------------- | ------------------------------------------------------------ |
| `/`                       | SplashPage           | public `<Route>`            | Home page                                                    |
| `/signup`                 | SignupPage           | anon only  `<AnonRoute>`    | Signup form, link to login, navigate to homepage after signup |
| `/login`                  | LoginPage            | anon only `<AnonRoute>`     | Login form, link to signup, navigate to homepage after login |
| `/search`            | ResultPage   | anon only `<AnonRoute>`    | Shows all the contacts by city                             |
| `/search/:id`        | ResultPage/ID | user only `<PrivateRoute>`  | Details of the contact's search                             |
| `/profile/`         | Profilepage                  | user only `<PrivateRoute>`  | Profile data page                                    |
| `/profile/message/`     | Message      | user only  `<PrivateRoute>` | inbox for message's page                              |
| `/search/gender` | -      | anon only `<AnonRoute>`    | show the results by gender                               |
| `/search/age` | -    | anon only `<AnonRoute>`    | show the results by age                               |



## Components

- index
- contactCard
- profile
- routes
- message

- Navbar


  

 

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous

  
- Player Service 

  - player.detail(id)
  - player.add(id)
  - player.delete(id)





<br>


# Server / Backend


## Models

User model

```javascript
{
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  name: {type: String, required: true},
  img: {type: String},
  age: {type: String},
  city: {type: String},
  ocupation: {type: String},
  rentPrice: {type: number},
  about: {type: String},
  messageSend: [{type: schema.Types.ObjetcId, ref: "message"}],
  messageRecive: [{type: schema.Types.ObjetcId, ref: "message"}],
  
}
```



message model

```javascript
{
  to: {type: schema.Types.ObjetcId, ref: "User"},
  from: {type: schema.Types.ObjetcId, ref: "User"},
  message: {type: String},

}
```



<br>


## Node packages for Frontend:
- dotenv
- google-map-react
- react
- react-bootstrap
- react-router-dom
## Node packages for Backend:
- bcrypt
- dotenv
- http-errors
- mongoose




## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/profile    `           | Saved session                | 200            | 404          | Check if user is logged in and return profile page           |
| POST         | `/auth/profile    `           | Saved session                | 200            | 404          | Edit profile           |
| POST        | `/auth/signup`                | {name, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                 | {username, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout`                | (empty)                      | 204            | 400          | Logs out the user                                            |
| GET         | `/roomates`                |                              |                | 400          | Show all roomates                                         |
| GET         | `/roomates/:id`            | {id}                         |                |              | Show specific roomate                                     |
  |
  
  | POST         | `/message/`            | {id}                         |                |              |                                      |
  |
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

              







<br>


## Links

### Trello

[Link to your trello board](https://trello.com/b/rvfx4dTv/project-3) 
or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link]()

[Server repository Link]()

[Deployed App Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](https://wireframepro.mockflow.com/editor.jsp?editor=off&publicid=M9d4b1ecae6ef9844225f0e56313ae9fd1620824375719&projectid=M1cab911c35eae64544090e526de8a7711620815063247&perm=Owner#/page/dd2e2d697f3d42cc80168dfe2fcbc905)
