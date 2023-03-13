# imagem base dependencias
FROM ubuntu:jammy as base
RUN apt-get update && apt-get install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y nodejs \
    npm

# imagem de desenvolvimento
FROM base as dev
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install

# imagem de produção
# FROM base as prod
# COPY package*.json .
# RUN npm ci --only=production
# EXPOSE 3000
# CMD [ "npm", "run", "start" ]