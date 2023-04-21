start-db:
	mysqld_safe -u root &
	redis-server

codespace-mysql:
	docker run --name express -e MYSQL_ROOT_PASSWORD=secret -d mysql:latest

codespace-redis:
	docker run --name express-redis -d redis:6.0-alpine3.17

run-codespace:
	make codespace-mysql \
	make codespace-redis \
	npm start

run: start-db
	npm start

.PHONY: codespace-mysql codepsace-redis start-db run-codespace run