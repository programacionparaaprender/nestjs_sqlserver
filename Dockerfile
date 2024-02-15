FROM node:14.2.0 as build

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:14.2.0
WORKDIR /app
COPY package.json .
RUN npm run --only=production
COPY --from=build /app/dist ./dist
CMD npm run start:prod