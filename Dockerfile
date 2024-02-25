# Stage 1: Building the app
FROM node:20 AS builder

WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

# prod
# FROM nginx:alpine

# WORKDIR /usr/app

# RUN apk add nodejs-current npm supervisor
# RUN mkdir -p /var/log/supervisor && mkdir -p /etc/supervisor/conf.d

# # Remove any existing config files
# RUN rm /etc/nginx/conf.d/*

# # Copy nginx config files
# # *.conf files in conf.d/ dir get included in main config
# COPY ./.nginx/default.conf /etc/nginx/conf.d/

# COPY package.json next.config.js ./
# COPY --from=builder /usr/app/public ./public
# COPY --from=builder /usr/app/.next ./.next
# COPY --from=builder /usr/app/node_modules ./node_modules

# # supervisor base configuration
# ADD supervisor.conf /etc/supervisor.conf

# # replace $PORT in nginx config (provided by executior) and start supervisord (run nextjs and nginx)
# CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && \
#   supervisord -c /etc/supervisor.conf

# # Stage 2: Running the app with Node.js
FROM node:20-alpine

WORKDIR /usr/app
COPY --from=builder /usr/app/next.config.js ./
COPY --from=builder /usr/app/public ./public
COPY --from=builder /usr/app/.next ./.next
COPY --from=builder /usr/app/node_modules ./node_modules
COPY --from=builder /usr/app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "run", "start", "--", "-H", "0.0.0.0"]