build:
	docker build -t knspriggs/cicada .

run: build
	docker run -d -p 5255:5255 --name=cicada knspriggs/cicada

test: build run
	mocha

retest:
	mocha

stop:
	docker stop cicada




.PHONY: build test retest stop
