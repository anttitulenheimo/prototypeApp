# Build stage
FROM node:18-alpine AS build
WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Build production version
RUN npm run build

# Production (Nginx) stage
FROM nginx:alpine

# Copy custom nginx config
COPY default.conf /etc/nginx/conf.d/default.conf

# Copy built app from previous stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
