FROM node:alpine
WORKDIR /usr/src/app
RUN apk add openjdk11
COPY . .
EXPOSE 8081
EXPOSE 9099
RUN npm install -g firebase-tools
ENV FIRESTORE_PROJECT_ID=framesystem-v2
CMD ["firebase", "emulators:start"]