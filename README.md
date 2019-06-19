1. The tech stack on the front end consist of react and redux.
2. I have used jest and enzyme for unit testing.
3. The tech stack on the backend consists of express and mongodb(mlabs for production environment). I have not used any protection/authentication mechanism to protect the rest services.
4. The frontend code is in the `src` and `public` folder only.
5. `server` folder has all backend related code.
6. `assets` folder has some mocks which are helpfull for writing front end tests.
7. `config` folder has config related information. this provides different information for different environment(dev/prod).
8. Currently I have implemented add, read and delete operation on places. I could not understand how the edit UX would work.
9. I have done a server-less deployment on <a herf="https://zeit.co/now" target="_blank">Zeit now</a>. <a href="https://geocode-react-app-jhlcg06gt.now.sh/" target="_blank">https://geocode-react-app-jhlcg06gt.now.sh/</a>
10. Currently I have set a restriction on the autocomplete to search only for places which are within Germany.

11. Steps to run the unit test. Run the following commands:-
    
    a. **npm i**.
    
    b. **npm run test**

12. Steps to run the frontend application only in development environment.

    a. Since there is not database involved so no marker will be shown on the google map.
    
    b. Install the node dependencies by **npm i**.
    
    c. **npm run start**. this runs the dev server.
    
    d. Open [http://localhost:3000](http://localhost:3000) to view it in the browser..

13. Steps to run the complete react-express application.

    a. Install mongodb.
    
    b. Start the mongodb services by **npm run mongodb-win** for windows platform. for linux run **npm run mongod**.
    
    c. Install the node dependencies by **npm i**. 
    
    d. Then build the frontend by running **npm run build**.
    
    e. Then run **npm run server**.
    
    f. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
    
    

