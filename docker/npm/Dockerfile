FROM node:15-alpine

RUN mkdir /app
VOLUME /app
WORKDIR /app
ENTRYPOINT [ "npm" ]

ENV PYTHONUNBUFFERED=1
RUN apk add --no-cache make gcc g++ python2 && \
 python -m ensurepip && \
 rm -r /usr/lib/python*/ensurepip && \
 pip install --upgrade pip setuptools && \
rm -r /root/.cache