import * as storage from "./lStorage.js";

export const get = (key) => {
    return storage.getItem(key)
}

export const set = (key, value) => {
    return storage.setItem(key, value)
}

export const dump = (key) => {
    return storage.deleteItem(key)
}