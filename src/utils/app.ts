import { Client } from "aplenturejs/dist/client";
import { Config } from "../models/config";

export class App extends Client<Config> {
    protected setup(confg: Config): Promise<void> {
        throw new Error("Method not implemented.");
    }
}