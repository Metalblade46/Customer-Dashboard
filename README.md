
# Customer Tracking Dashboard

This project helps to keep track of customers entering and leaving the stores and helps to get live data 


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the docker-compose directory

```bash
  cd docker-compose
```

Start the docker compose

```bash
  docker compose up
```

Open up the Dashboard at http://localhost:3000 and the Producer at http://localhost:4000

Enter the details to produce and hit submit

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in the folder same as the compose.yaml file. An example.env file is provided for reference.

`MONGODB_DATABASE`

`KAFKA_BOOTSTRAP_SERVERS`

