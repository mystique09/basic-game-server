start-db:
	mysqld_safe -u root &
	redis-server

run: start-db
	npm start

.PHONY: start-db
