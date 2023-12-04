# FROM node:latest AS build-stage
# WORKDIR /usr/src/app
# # COPY --chown=node:node --from=build /usr/src/app/node_modules /usr/src/app/node_modules
# COPY --chown=node:node . .
# ENV NODE_ENV production
# RUN npm ci --only=production


# FROM node:16.17.0-bullseye-slim
# ENV DEBUG=todo-backend:*
# WORKDIR /usr/src/app
# COPY --from=build-stage /usr/src/app .
# USER node
# CMD ["npm", "start"]


FROM node:16

WORKDIR /usr/src/app


COPY --chown=node:node . .
RUN npm ci --only=production

# ENV DEBUG=todo-backend:*


USER node
CMD npm start