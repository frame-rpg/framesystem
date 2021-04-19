FROM node:14 As development
WORKDIR /usr/src/app
RUN npm i -g npm
ENV PROTOC_ZIP=protoc-3.14.0-linux-x86_64.zip
RUN curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v3.14.0/${PROTOC_ZIP}
RUN unzip -o ${PROTOC_ZIP} -d ./proto 
RUN chmod 755 -R ./proto/bin
# Copy into path
RUN cp ./proto/bin/protoc /usr/bin/
RUN cp -R ./proto/include/* /usr/include/

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM node:14 As production
WORKDIR /usr/src/app
RUN npm i -g npm
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
COPY package*.json ./
RUN npm install
copy . .
copy --from=development /usr/src/app/dist ./dist
EXPOSE 9090
cmd ["node", "dist/main"]