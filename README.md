

React Blog with list filtering, date search, single listings,  using a Fake JSON REST Api. 
** Upgraded to React 16 ** 
   React-Router-Dom ** Redux ** React-Redux ** Async Await API calls ** Redux-Localstorage ** Styled-Components ** Bootstrap 4


## Using the REST API

> Ensure that you've started the API server with `npm start` or `npm run api`.

A REST API is provided with seed data for blog posts and comments.  The REST API returns and accepts JSON.  Changes made to the "database" will persist as long as the API is running on `localhost:9001`.

**Base path:** http://localhost:9001

**GET** `/posts` *List all blog posts*<br>
**GET** `/posts/{id}` *View single blog post*<br>
**GET** `/posts/{id}/comments` *List all comments for single blog post*<br>
**POST** `/posts/{id}/comments` *Add comment to single blog post*<br>
**PUT** `/comments/{id}` *Update single comment*<br>


