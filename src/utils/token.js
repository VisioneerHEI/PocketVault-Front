import * as storage from "./lStorage.js";

const tokenName = "token";

export const save = (token) => {
    storage.setItem(tokenName, token);
    return token;
};

export const get = () => {
    return storage.getItem(tokenName);
};

export const dump = () => {
    const token = get();
    storage.deleteItem(tokenName);
    return token;
};