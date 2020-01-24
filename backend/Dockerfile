FROM python:3.7-alpine

RUN mkdir -p /srv/app/backend
WORKDIR /srv/app/backend

COPY . /srv/app/backend

RUN pip install -r requirements.txt
