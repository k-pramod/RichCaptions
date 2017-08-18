# Builds Docker image for rich-captions web API server
FROM python:3.6.2

MAINTAINER Pramod Kotipalli "pramod.kotipalli@gmail.com"

WORKDIR /richcaptions/api/

# Install requirements
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy all the application code into the image
COPY . .

EXPOSE 80
