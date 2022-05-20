# Psh Dev Challenge

## EXERCISE

### REQUIREMENTS

The challenge should be uploaded to GitHub.
Although we don’t require specific frameworks, your interviewer will suggest the most appropriate stack according to your position.
This challenge is iterative - your interviewer will tell you exactly which points you are expected to do. The rest will be optional.

### CONTEXT

Who hasn’t attended a hackathon in the past? Those are great opportunities to learn, challenge ourselves and meet new people. 
Each hackathon has developers and 3 winners (ranking 1st to 3rd). We will build a system that looks for the best developers around the world by saving from each hackathon the best 10 developments.




#### A. BACKEND

1) Build an API to retrieve both hackathons with their developers, and the best developers. At this point, you can use mocked data inside the DB.

2) Build a cron that runs every 5 minutes and inserts a new hackathon including the best 10 developments. For the users generation, you can use the following API: https://randomuser.me/api




#### B. FRONTEND
1) Build a list of hackathons with their name, place and date. Once you access each hackathon you should see the best 10 developments from it. 


2) Build a menu to be able to select between hackathons and top developers. Then, build the top developers table.

3) Retrieve the data from the API built on Point A.



#### C. BONUS
1) Build the implementation to require the user to login first

2) Block any other page if the user is not logged in.


3) Add any authorization method you know to prevent external users from calling our services.

4) Make the application responsive


#### TAREAS

Se dividio el ejercicio en dos, planteandolo como frontend y backend.

Backend:
- Base de datos local (data.json) realizada con mockaroo
- Api creada para obtener la data requerida
- Cron que inserte un nuevo hackaton y sus mejores desarrollos: en proceso
- Dudas sobre si la api para la generacion de usuarios es para el login
- Login necesario para ingresar
- añadir metodo de autorizacion para conseguir la data

Frontend:
- Pagina principal como lista con todos los hackathons y su informacion correspondiente
- Tabla con los mejores desarrolladores
- Hamburguer menu: en proceso
- tabla developers capaz de mostrar el que gano mas veces: en proceso
