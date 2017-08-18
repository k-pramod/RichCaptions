# Builds Docker image for rich-captions web API server
FROM python:3.6.2

MAINTAINER Pramod Kotipalli "pramod.kotipalli@gmail.com"

# Copy code into image
WORKDIR /app/rich-captions
COPY . .

# Install requirements
RUN pip install -r requirements.txt

EXPOSE 8080
