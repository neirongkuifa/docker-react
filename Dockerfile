# Build Phase
FROM node:alpine AS builder

WORKDIR /home/app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# Run Phase
FROM nginx
EXPOSE 80

COPY --from=builder /home/app/build /usr/share/nginx/html

