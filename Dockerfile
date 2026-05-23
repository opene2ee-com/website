FROM node:22-alpine AS base
WORKDIR /app
COPY package.json ./
RUN npm install

COPY . .

# Development
FROM base AS dev
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Production build
FROM base AS build
RUN npm run build

# Production serve
FROM nginx:alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
