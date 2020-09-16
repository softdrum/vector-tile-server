# using buster for raspberry pi 3b compatibility
FROM node:12.18.3

# creating app directory
WORKDIR /usr/src/app

# symbol ("*") is used to copy package.json and package-lock.json
COPY package*.json ./

# installing dependencies
# If you are building your code for production
# RUN npm ci --only=production
RUN npm install

# Bundle app source
COPY . .

EXPOSE 80

CMD [ "node", "index.js" ]
