import cassandra from "cassandra-driver";
import { envs } from "../src/config/env.config.js";

const client = new cassandra.Client({
	contactPoints: [envs.CASSANDRA_HOST],
	localDataCenter: envs.CASSANDRA_DATACENTER,
	keyspace: envs.CASSANDRA_KEYSPACE,
	protocolOptions: {
		port: envs.CASSANDRA_PORT,
	},
});

async function connectCassandra() {
	await client.connect();
}

async function executeQuery(query, params = [], options = {}) {
    await connectCassandra();
    return client.execute(query, params, { prepare: true, ...options });
}

export default executeQuery;
