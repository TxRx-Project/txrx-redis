PROJECT_NAME := txrx-redis

MAKEFLAGS += --always-make

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

restart: clear build install

.SUFFIXES: