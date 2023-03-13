import { ViewController } from "aplenturejs/dist/client";

export class IndexViewController extends ViewController {
    public static readonly route = 'index';

    constructor(...classes: string[]) {
        super(...classes, "index-view-controller");

        this.title = '#_title_index';
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