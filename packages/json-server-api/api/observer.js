// Lowdb adapter to observe read/write events
export class Observer {
    #adapter;
    onReadStart = () => {
        return;
    };
    onReadEnd = () => {
        return;
    };
    onWriteStart = () => {
        return;
    };
    onWriteEnd = () => {
        return;
    };
    constructor(adapter) {
        this.#adapter = adapter;
    }
    async read() {
        this.onReadStart();
        const data = await this.#adapter.read();
        this.onReadEnd(data);
        return data;
    }
    async write(arg) {
        this.onWriteStart();
        await this.#adapter.write(arg);
        this.onWriteEnd();
    }
}
