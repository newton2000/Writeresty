FROM nginx

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY dist /usr/share/nginx/html

EXPOSE 7785

CMD [ "nginx", "-g", "daemon off;" ]