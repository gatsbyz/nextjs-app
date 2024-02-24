# Stage 1: Building the app
FROM node:20 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

# Stage 2: Running the app with Node.js
FROM node:20-alpine

WORKDIR /app
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "run", "start", "--", "-H", "0.0.0.0"]