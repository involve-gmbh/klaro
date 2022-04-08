FROM node:17-alpine

RUN apk fix
RUN apk --update add git git-lfs less openssh && \
    git lfs install && \
    rm -rf /var/lib/apt/lists/* && \
    rm /var/cache/apk/*

RUN mkdir /app
VOLUME /app
WORKDIR /app
ENTRYPOINT [ "npx" ]
