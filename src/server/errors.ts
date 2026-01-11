export class MovifyError extends Error {
    readonly _tag: string;

    constructor(
        tag: string,
        message: string,
        readonly cause?: unknown,
    ) {
        super(message, { cause });

        this._tag = tag;
        this.name = tag;

        Object.setPrototypeOf(this, new.target.prototype);
    }
}

export class TMDBError extends MovifyError {
    constructor(message = "An error has occurred while using the TMDB API", cause?: unknown) {
        super("TMDBError", message, cause);
    }
}
