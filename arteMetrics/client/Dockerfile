FROM node:12.15
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
RUN npm run build
EXPOSE 3000
# CMD npm run dev
CMD node ./sorver/sorver.js

