import { env } from "@/env.ts";
import { MovieDb } from "moviedb-promise";

export const movieDbClient = new MovieDb(env.TMDB_API_KEY);
