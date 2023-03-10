import { ViewController } from "aplenturejs/dist/client";

export class IndexViewController extends ViewController {
    public static route = 'index';

    constructor(...classes: string[]) {
        super(...classes, "index-view-controller");
    }

    public async load(): Promise<void> {
        await super.load();
    }

    public async unload(): Promise<void> {
        await super.unload();
    }

    public focus(): void {
        super.focus();
    }
}