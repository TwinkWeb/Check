# stage as builder
FROM node:10-alpine as builder

WORKDIR /vue-ui

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the files
COPY . .

# Build the project
RUN npm run build

FROM nginx:alpine as production-build
# Copy from the stage
COPY --from=builder /vue-ui/dist /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.template
RUN apk add ruby
EXPOSE 8080
COPY entrypoint.sh /
ENTRYPOINT ["sh", "/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]