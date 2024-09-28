# Define variables
MONGO_CONTAINER_NAME=test-mongo
MONGO_PORT=27017
BACKUP_DIR=./mongodb-backup
DATABASE_NAME=mydatabase
COLLECTION_NAME=mycollection
JSON_FILE=${BACKUP_DIR}/${COLLECTION_NAME}.json

# Default target
.PHONY: all
all: up check backup restore verify

.PHONY: serverUp
serverUp:
	@npm run server

# Bring up the MongoDB container
.PHONY: dbUp
dbUp:
	@echo "Starting MongoDB container..."
	@if [ $$(docker ps -a -q -f name=${MONGO_CONTAINER_NAME}) ]; then \
		echo "A container with the name '${MONGO_CONTAINER_NAME}' already exists. Stopping and removing..."; \
		docker stop ${MONGO_CONTAINER_NAME}; \
		docker rm ${MONGO_CONTAINER_NAME}; \
	fi
	@docker run -d -p ${MONGO_PORT}:27017 --name ${MONGO_CONTAINER_NAME} mongo:latest
	@sleep 5

# Clean up by stopping and removing the container
.PHONY: dbClean
dbClean:
	@echo "Stopping and removing MongoDB container..."
	@docker stop ${MONGO_CONTAINER_NAME} && docker rm ${MONGO_CONTAINER_NAME}
	@echo "Cleanup completed."