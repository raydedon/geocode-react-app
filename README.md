1. The tech stack on the front end consist of react and redux.
2. I have used jest and enzyme for unit testing.
3. The tech stack on the backend consists of express and mongodb(mlabs for production environment). I have not used any protection/authentication mechanism to protect the rest services.
4. the frontend code is in the 'src' and 'public' folder only.
5. 'server' folder has all backend related code.
6. 'assets' folder has some mocks which are helpfull for writing front end tests.
7. 'config' folder has config related information. this provides different information for different environment(dev/prod).
8. Currently I have implemented add, read and delete opertaion of places. I couln't understand how the edit UX would work.
9. Please make a note of the git repo https://github.com/raydedon/geocode-react-app
10. I have done a serverless deployment on zeit now. https://geocode-react-app-jhlcg06gt.now.sh/
11. Currently i have set a restriction on the autoomplete to search only for places which are within Germany.

12. Steps to run the unit test.
Run the following commands:-
    
    a. npm i.
    
    b. npm run test

2. Steps to run the frontend application only in development environmnet.

    a. Since there is not database involved so no marker will be shown on the google map.
    
    b. Install the node dependencies by "npm i".
    
    c. npm run start. this runs the dev server.
    
    d. you can see the application at http://localhost:3000/

3. Steps to run the complete react-express application.

    a. Install mongodb.
    
    b. Start the mongodb services by "npm run mongodb-win" for windows platform. for lincux run "npm run mongod".
    
    c. Install the node dependencies by "npm i". 
    
    d. Then build the frontend by running "npm run build".
    
    e. Then run "npm run server".
    
    f. you can view the application at http://localhost:3000/
    
    

