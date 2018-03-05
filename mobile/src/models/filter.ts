export class Filter {
    start: string;
    end: string;

    constructor(raw?: string) {
        this.set(raw);
    }

    set(raw?: string) {
        if (!raw) {
            this.start = null;
            this.end = null;
            return;
        }

        raw = raw.trim();
        if (!raw) {
            this.start = null;
            this.end = null;
            return;
        }

        raw = raw.replace(/\s/g, '');
        raw = raw.toLowerCase();

        this.start = raw;
        this.end = raw.substring(0, raw.length - 1) + String.fromCharCode(raw.charCodeAt(raw.length - 1) + 1);
    }
}