FROM cypress/base:10
ADD ./ /web
WORKDIR /web
RUN mkdir -p ~/cypress
COPY cypress ./cypress
COPY package.json .
COPY cypress.json .
RUN npm install cypress cypress-axe axe-core
RUN npx cypress verify
ENV CI=1
CMD ["npm", "run", "cypress"]
