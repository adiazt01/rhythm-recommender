import z from "zod";
import * as dotenv from "dotenv";

dotenv.config();

export const envSchema = z.object({
	CASSANDRA_HOST: z.string().min(1),
	CASSANDRA_DATACENTER: z.string().min(1),
	CASSANDRA_KEYSPACE: z.string().min(1),
	CASSANDRA_PORT: z
		.number({
			coerce: true,
		})
		.min(1)
		.max(65535),
});

const envsValidate = envSchema.safeParse(process.env);

if (!envsValidate.success) {
	throw new Error(
		`Invalid environment variables: ${envsValidate.error.message}`,
	);
}

export const envs = envsValidate.data;
