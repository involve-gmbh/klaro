FROM node:15-alpine

RUN mkdir /app
VOLUME /app
WORKDIR /app

# Python3
ENV PYTHONUNBUFFERED=1
RUN apk add --no-cache python3 && \
    python3 -m ensurepip && \
    pip3 install --no-cache --upgrade pip setuptools

# Python3 modules
RUN pip3 install --no-cache --upgrade \
    pyyaml

# Python2
RUN apk add --no-cache python2 && \
 python2 -m ensurepip && \
 pip3 install --upgrade pip setuptools

# Git
RUN apk add --no-cache git && \
    git config --global user.email "noreply@example.com" && \
    git config --global user.name "Make Container"

RUN apk add --no-cache make gcc g++

ENTRYPOINT ["make"]
CMD ["--version"]
