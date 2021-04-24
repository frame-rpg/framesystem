FROM node:14-alpine
RUN npm install -g npm
RUN npm install -g @angular/cli
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY . .
EXPOSE 4200
CMD ["ng", "serve", "--configuration", "dev", "--host", "0.0.0.0"]
