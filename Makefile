.PHONY: all
.DEFAULT_GOAL:=help

## help: Prints this help message
help:
	@echo "Commands available"
	@sed -n 's/^##//p' ${MAKEFILE_LIST} | column -t -s ':' | sed -e 's/^/ /' | sort

## clean: Verify dependencies and remove intermediary products
clean:
	@-rm -rf public/build

## lint: Static analysis
lint:
	# Validate protocol buffer definitions
	npm run format
	npm run lint

## test: Run all tests excluding the vendor dependencies
test:
	npm run test

## build: Build production version
build:
	npm run build

## dev-server: Run development server
dev-server:
	npm run dev