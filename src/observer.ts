import type { Adapter } from "lowdb";

// Lowdb adapter to observe read/write events
export class Observer<T> {
  #adapter;

  onReadStart = () => {
    return;
  };
  onReadEnd: (data: T | null) => void = () => {
    return;
  };
  onWriteStart = () => {
    return;
  };
  onWriteEnd = () => {
    return;
  };

  constructor(adapter: Adapter<T>) {
    this.#adapter = adapter;
  }

  async read() {
    this.onReadStart();
    const data = await this.#adapter.read();
    this.onReadEnd(data);
    return data;
  }

  async write(arg: T) {
    this.onWriteStart();
    await this.#adapter.write(arg);
    this.onWriteEnd();
  }
}
