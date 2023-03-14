import { Route, Router, ViewController } from "aplenturejs/dist/client";
import { IndexViewController } from "./indexViewController";

export class RootViewController extends ViewController {
    constructor(...classes: string[]) {
        super(...classes, "root-view-controller");

        Router.onRouteChanged.on(() => this.unload());
        Router.onRouteChanged.on(() => this.removeAllChildren());

        Router.addRoute(new Route(IndexViewController.route), () => this.appendChild(new IndexViewController()));

        Router.onRouteChanged.on(() => this.load());
    }
}