# # The first FROM is now a stage called build-stage

# FROM node:latest AS build-stage
# WORKDIR /usr/src/app
# ENV NODE_ENV production
# ENV REACT_APP_BACKEND_URL="http://localhost:3001"
# ENV CI=true
# # USER node

# # COPY --chown=node:node --from=build-stage /usr/src/app/node_modules /usr/src/app/node_/modules
# COPY --chown=node:node . .
# RUN npm ci --only=production
# RUN npm test
# RUN npm run build


# # RUN npm test
# # RUN npm run build

# # This is a new stage, everything before this is gone, except the files we want to COPY

# FROM nginx:1.20-alpine
# # COPY the directory build from build-stage to /usr/share/nginx/html
# # The target location here was found from the Docker hub page

# COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html


# The first FROM is now a stage called build-stage

FROM node:16 AS build-stage
WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV REACT_APP_BACKEND_URL="http://localhost:8080/api"
ENV CI=true
RUN npm test
RUN npm run build

# This is a new stage, everything before this is gone, except the files we want to COPY

FROM nginx:1.20-alpine
# COPY the directory build from build-stage to /usr/share/nginx/html
# The target location here was found from the Docker hub page

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html