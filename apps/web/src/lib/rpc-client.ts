import { createClient } from "@bt-turbo-setup/rpc";

export const api = createClient(
	process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
);
