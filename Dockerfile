FROM node:lts-alpine

# Install server
RUN npm install -g http-server

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source & build
COPY . .
RUN npm run build

# Run
EXPOSE 8080
CMD [ "http-server", "dist" ]
