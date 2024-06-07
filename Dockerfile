FROM ubuntu:latest
LABEL authors="natys"

ENTRYPOINT ["top", "-b"]