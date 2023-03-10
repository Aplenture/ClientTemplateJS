import { Client } from "aplenturejs/dist/client";
import { RootViewController } from "./viewControllers/rootViewController";

const rootViewController = new RootViewController();

Client.init(rootViewController);