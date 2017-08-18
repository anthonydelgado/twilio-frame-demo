#
# twilio-frame-demo web server
#
FROM node:8.4.0
LABEL vendor="KDDI Web Communications inc." \
    maintainer="yuto.yamada@kddi-web.com"

# set workdir
WORKDIR /www/twilio-frame-demo

# exec after container run
COPY ./docker-entrypoint.sh /usr/local/bin/
RUN chmod 755 /usr/local/bin/docker-entrypoint.sh
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["npm", "start"]
