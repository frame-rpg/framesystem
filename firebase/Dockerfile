FROM node:alpine
WORKDIR /usr/src/app
RUN apk add openjdk11
COPY . .
RUN npm install -g firebase-tools
CMD ["firebase", "emulators:start"]