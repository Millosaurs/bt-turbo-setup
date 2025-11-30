import { config } from "dotenv";
import { expand } from "dotenv-expand";
import type { ZodError } from "zod";
import { z } from "zod";

expand(config());

const EnvSchema = z.object({
	NODE_ENV: z.string().default("development"),
	LOG_LEVEL: z
		.enum(["info", "warn", "error", "debug", "trace", "fatal", "silent"])
		.default("info"),
	DATABASE_URL: z.url(),
	BETTER_AUTH_SECRET: z.string(),
	BETTER_AUTH_URL: z.url(),
	CORS_ORIGIN: z.url(),
});
export type env = z.infer<typeof EnvSchema>;

// eslint-disable-next-line import/no-mutable-exports, ts/no-redeclare
let env: env;

try {
	// eslint-disable-next-line node/no-process-env
	env = EnvSchema.parse(process.env);
} catch (e) {
	const error = e as ZodError;
	console.error("Invalid env:");
	const flattened = z.flattenError(error);
	console.error(flattened.fieldErrors);

	process.exit(1);
}

export default env;
