# RichCaptions

Symbolic math/science captions for educational videos

Live project: http://apps.pramodk.net:8001/

## Problem identified:

- Online education is rapidly gaining momentum
- Video captioning systems are limited to displaying simple plain-text
- Math/science students learn better by reading semantically-useful symbols

## Solution created:

- Create web application where content creators can easily caption their videos in LaTeX, the most popular tool for typesetting math and science textbooks and academic papers
- Allow anyone on the internet to watch these captioned videos without cost
- Sample: Below, you can compare the status-quo (plain-text) captions to the richer ones provided by this service:

![RichCaptions sample](./img/sample.png)

## Design paradigms:

- REST API design and documentation
- Material Design

## Technologies used:

- AngularJS + Javascript/jQuery
- Django + REST framework
- YouTube API
- LaTeX, KaTeX
