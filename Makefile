.PHONY: *
.DEFAULT_GOAL:=help

## help: Prints this help message
help:
	@echo "Commands available"
	@sed -n 's/^##//p' ${MAKEFILE_LIST} | column -t -s ':' | sed -e 's/^/ /' | sort

## clean: Remove previous builds and cache files
clean:
	@-rm -rf .cache
	@-rm -rf build

## test: Run all tests excluding vendor dependencies
test:
	npm run lint
	npm run test

## build: Build production version
build:
	npm run build

## dev: Run development server
dev:
	npm run dev

## lint: Verify code formatting is correct
lint:
	npm run lint

## format: Ensure code formatting is correct
format:
	npm run format

## scan: Scan your project for vulnerabilities and attempt automatic fix
scan:
	npm audit fix --only=prod
