# Simple Conferences API

A simple conferences API with NodeJS using Typescript, Docker, TypeORM and PostgreSQL.

## Prerequisites

- Install [Docker Engine](https://docs.docker.com/engine/install/)
- Install [Docker Compose](https://docs.docker.com/compose/install/)

## How to run API:

- Navigate to project's root directory in terminal
- Make sure Docker is running
- Run `docker-compose up -d`
- Access API through port 3333

## Routes

- **Presentations**
  - **[POST] Create User:** `/presentations`
  - **[POST] Include Attendee:** `/presentations/:presentationId/attendees`

- **Attendees**
  - **[POST] Create Attendee:** `/attendees`