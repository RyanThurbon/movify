import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
    server: {
        TMDB_API_KEY: z.string(),
    },
    clientPrefix: "VITE_",
    client: {},
    runtimeEnv: process.env,
    emptyStringAsUndefined: true,
});
