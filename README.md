# ManagingMyPlaces

The third exercise in the Internet Technologies course. This project involves html, CSS, JS programming, reading and writing from JSON file, Express, Routing (Restful), Mongoose, MonogoDB, Node js and Cors.
 
 ## Description 
 This project is building a website with the help of an Express server.
 The home page entitled "The most beautiful sites I have visited".
 
 * The home page titled "The Most Beautiful Sites I Have Visited". In this page there is a list of links to other pages. Each link leads to a page that represents a beautiful place in the world and briefly presents an explanation of the place and a picture.
 * On the home page it is possible to add places to the list by clicking on the "Add To List" button. Then you need to enter the name of the place, a description and a link to a suitable image.
 * There is an option to remove the last place in the list by clicking on the "Remove From List" button.
 
 ### About The Code
 * All the places that is in the list is saved to mongoDB.
 * In the code there are different requests for the server (get, post, delete and fetch).
 
 ### The Home Page:
 ![image](https://user-images.githubusercontent.com/74857750/149578699-48510ce4-947a-46df-9115-e552f60a00ea.png)
 
 ### Example For Link From The List -The Place Is Dead Sea In Israel:
 ![image](https://user-images.githubusercontent.com/74857750/149579096-57fd55d6-5b86-42c5-b571-26802ac16dca.png)
 
 ## How To Run
 1. Make sure you have Node.js installed on your computer.
 2. Make sure you have MongoDB software installed on your computer, open it and make a new connection to the following link "mongodb://localhost/sites".
 3. Open the project folder in vs code and create a new terminal. Run the "npm run devStart" command which is run the server.
 4. Right-click the index.html file, and then select the "open with live server" option.
 
