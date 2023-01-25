FROM node:16-alpine as build-step
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json yarn.lock ./
COPY ./src ./src
COPY ./public ./public
RUN yarn cache clean
RUN yarn install --frozen-lockfile
RUN yarn build

FROM nginx:stable-alpine
COPY --from=build-step /app/build /usr/share/nginx/html
COPY nginx.default.conf /etc/nginx/conf.d/default.conf