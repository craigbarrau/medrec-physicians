build:
	docker build -t craigbarrau/medrec-physicians .

up:
	docker-compose up -d

stop:
	docker-compose stop

push:
	docker push craigbarrau/medrec-physicians
