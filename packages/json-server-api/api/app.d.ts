import { App } from "@tinyhttp/app";
import type { Low } from "lowdb";
import { type Data } from "./service.js";
export type AppOptions = {
    logger?: boolean;
    static?: string[];
};
export declare function createApp(db: Low<Data>, options?: AppOptions): App<import("@tinyhttp/app").Request, import("@tinyhttp/app").Response<unknown>>;
