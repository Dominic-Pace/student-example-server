# Student Example Server

###Setup instructions
1. Clone this repo.
2. Run `yarn` command to install dependencies.
3. Create a new `.env` file with data that you can get from Dominic.
4. Run `yarn dev` to start the server in development mode.
5. The server should be running on `localhost:3005` so you should be able to call the endpoints in Postman or from the web.

###Endpoints
    Get All Students
    GET /students


    Get Student By ID
    GET /students/:id
    

    Update Student
    PUT /students/:id
    Sample Body:
    
    {
        "dateOfBirth": "1986-08-29T05:00:00.000Z",
        "firstName": "Rufe",
        "lastName": "Wahlberg",
        "gender": "Male"
    }
    
     None of the above are required to update. You can send 1 or all 4.
