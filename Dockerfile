FROM node
COPY . /src
WORKDIR /src
RUN npm install
EXPOSE 10010
CMD node app.js
