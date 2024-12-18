export function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
    let timer: ReturnType<typeof setTimeout> | undefined;
    return function (this: any, ...args: Parameters<T>) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
