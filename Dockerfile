# Dockerfile
FROM node:18-alpine

WORKDIR /usr/src/app

# Copy package.json & package-lock.json (nếu có)
COPY package*.json ./

RUN npm install

# Copy toàn bộ source code vào container
COPY . .

EXPOSE 5555

CMD ["npm", "start"]
