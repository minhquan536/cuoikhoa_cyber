export const IIFE = (fn: () => void) => {
    fn();
}

export const saveLocal = (key: string, data: any) =>{
    localStorage.setItem(key, JSON.stringify(data));
};

export const getLocal = (key:string) => {
    const resp = localStorage.getItem(key);
    if (resp) {
        return JSON.parse(resp);
    }
};

export const removeLocal = (key: string) => {
    localStorage.removeItem(key);
}