FROM node:11.15.0-alpine
WORKDIR /.
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
ENV VUE_APP_CONNECTION_STRING=placeholder
ENV VUE_APP_POC_INTAKE_DB_PASSWORD=placeholder
EXPOSE ${NUXT_PORT}
CMD [ "npm", "start" ]
