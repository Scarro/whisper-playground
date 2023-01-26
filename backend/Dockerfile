FROM python:3.8

WORKDIR /python-docker

COPY . .
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git
RUN apt-get install -y ffmpeg
RUN /usr/local/bin/python -m pip install --upgrade pip
RUN pip --version
RUN apt-get install libasound-dev libportaudio2 libportaudiocpp0 portaudio19-dev -y
RUN pip install wheel
RUN pip install -r requirements.txt


EXPOSE 8000

# CMD ["flask", "run", "--host=0.0.0.0", "--port=8000"]
CMD ["flask", "run", "--host=0.0.0.0", "--port=8000"]