FROM node:20-alpine3.16

EXPOSE 8080
ENV PORT=8080
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
