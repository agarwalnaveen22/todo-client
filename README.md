# Todo

This is fornt end of todo assignment app, this project uses docker hence we need to install docker, installing steps is already mentioned in https://github.com/agarwalnaveen22/todo-server

# Clone repository

git clone https://github.com/agarwalnaveen22/todo-client.git

# Add api host address

Add host ip/domain address in src/environments/environment.local.ts

# Create docker image

go to project root folder and run following command:-

docker build -t todo-client:latest .

# Run docker container

docker run -d -p 4200:80 todo-client

# Check app

go to any browser and enter following url:-

http://localhost:4200

Now create a new user using swagger and login into the app