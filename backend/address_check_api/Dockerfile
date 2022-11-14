FROM node:18-alpine

LABEL version="1.0"
LABEL description="This is the base docker image for the Address Check API."
LABEL maintainer = ["shad3s.of.m3@gmail.com"]

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Set a non-root user
USER 10014

CMD [  "node", "dist/app.js" ]