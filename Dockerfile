FROM node:20

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

RUN git config --global --add safe.directory /usr/src/app

CMD ["tail", "-f", "/dev/null"]
