# Potential matches for db users based on their hobbies


In this server, there are two API's implemented 

1) The basic get route for the normal server testing purpose, returns the JSON users contained in the separate db folder.

2) The main API for the potential matches

- route for this API is `/match/{userId}` when the server gets started based on the `userId` parameter and returns the potential matches and sorted on the count of user hobbies.

## Implementation of overall `potential matches API` 

- Initially retrieve the id from the path parameter.

- Converted into integer type to find the user.

- Then find the user by using the `find` method. 

- If the user exists then it will iterate over all users in the db and filter based on the matching of their hobbies.

- Then finally sorted based on the count of hobbies and sent responses of the users in JSON format. 

## I am grateful for the chance to submit my assignment and look forward to hearing from you soon.
