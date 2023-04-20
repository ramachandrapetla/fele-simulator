FROM node:latest

# create working directory
WORKDIR /usr/src/app

# Install dependencies
# copy package.json and package-lock.json
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8005

CMD ["node", "./fele-client-service/restful-api/feled"]