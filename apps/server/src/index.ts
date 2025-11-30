import { serve } from "@hono/node-server";
import app from "@/app";

serve(
	{
		fetch: app.fetch,
	},
	(info) => {
		// eslint-disable-next-line no-console
		console.log(`Server is running on http://localhost:${info.port}`);
	},
);

export type AppType = typeof app;
