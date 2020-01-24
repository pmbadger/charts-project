FROM python:3.7-alpine

RUN mkdir -p /srv/app/backend
WORKDIR /srv/app/backend

COPY . /srv/app/backend

RUN sudo pip install -t requirements.txt

ENTRYPOINT ["export", "FLASK_APP=hello.py"]
CMD ["python", "-m", "flask", "run"]
