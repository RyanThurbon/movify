import { MovifyError } from "@/server/errors";

export function toTaggedError(error: MovifyError) {
    return { _tag: error._tag, message: error.message };
}
