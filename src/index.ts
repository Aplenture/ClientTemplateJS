import { JSONRequest } from "aplenturejs/dist/client";
import { Config } from "./models/config";
import { App } from "./utils/app";

(async function () {
    const config = await new JSONRequest<void, Config>('/config.json').send();
    const app = new App(config);

    await app.init(config);
})();