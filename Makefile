PROJECT_NAME := txrx-redis

MAKEFLAGS += --always-make

GIT_NAME := $(shell git config --get user.name)
GIT_EMAIL := $(shell git config --get user.email)

export GIT_NAME
export GIT_EMAIL

build: 
	docker compose build

install:
	docker compose up -d

clear: 
	docker compose down --remove-orphans
	docker compose rm -f

clear_all:
	docker compose down --volumes --remove-orphans --rmi local
	docker compose rm -f
	docker system prune --force

logs:
	docker compose logs -f -t

shell:
	docker compose exec -it node bash

test: jest syntax

jest:
	docker compose exec node npm run test

syntax:
	docker compose exec node npm run lint

lint:
	docker compose exec node npm run lint -- --fix

rebuild: clear build install

.SUFFIXES: