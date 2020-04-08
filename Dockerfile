FROM node:11.13.0-alpine

# create destination directory
RUN mkdir -p /usr/src/poc-intake
WORKDIR /usr/src/poc-intake

# update and install dependency
RUN apk update && apk upgrade

COPY . /usr/src/poc-intake/
RUN npm install

#Builds SERVER and CLIENT!
RUN npm run build

# expose 5000 on container
EXPOSE 5000

# set app serving to permissive / assigned - should be configured on the azure side
ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=5000

# start the app
CMD [ "npm", "start" ]
