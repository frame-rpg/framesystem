FROM node:alpine
WORKDIR /usr/src/app
COPY . .
RUN apk add openjdk11
RUN npm install -g firebase-tools
CMD ["firebase", "--project=framesystem-d7981", "emulators:start"]