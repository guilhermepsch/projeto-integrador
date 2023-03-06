FROM ubuntu:jammy

# Create app directory
WORKDIR /usr/src/app

# Install nodejs

RUN apt-get update && apt-get install -y curl

RUN curl -fsSL https://deb.nodesource.com/setup_lts.x

RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y nodejs \
    npm   

# Install app dependencies

COPY package*.json ./

RUN npm install

# Bundle app source

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]

# Path: .dockerignore
