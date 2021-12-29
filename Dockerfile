ARG NODE_VERSION=12.16.2-alpine
ARG NGINX_VERSION=1.17.10-alpine
FROM node:${NODE_VERSION} as builder

ARG ENV_NAME=local
ENV ENV_NAME ${ENV_NAME}

WORKDIR /build
COPY package.json yarn.lock /build/
RUN npm
COPY . /build/
RUN npm build:${ENV_NAME}

FROM nginxinc/nginx-unprivileged:${NGINX_VERSION}
COPY --from=builder /build/dist /usr/share/nginx/html/

USER root

RUN mkdir -p /var/cache/nginx
RUN chown -R nginx:nginx /var/cache/nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY config/nginx/nginx.conf /etc/nginx/
COPY config/nginx/example.com.conf /etc/nginx/conf.d/
RUN mkdir -p /etc/nginx/headers.d
COPY config/nginx/headers.conf /etc/nginx/headers.d/

USER nginx

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
