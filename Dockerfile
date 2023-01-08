FROM node:19.4

WORKDIR /usr/src/app

COPY ./ /usr/src/app

ENV NODE_ENV production
ENV PORT 80

RUN npm install
# RUN npm update -g
RUN npm install vite -g 

EXPOSE 80
CMD [ "npm", "start" ]