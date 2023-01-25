FROM python:3.8

WORKDIR /python-docker

COPY requirements.txt requirements.txt
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git
RUN /usr/local/bin/python -m pip install --upgrade pip
RUN pip --version
RUN apt-get install libasound-dev libportaudio2 libportaudiocpp0 portaudio19-dev -y
# # RUN pip install pyaudio
RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["flask", "run", "--port", "8000"]