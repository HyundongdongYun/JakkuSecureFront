import { atom } from 'recoil';

export const countState = atom({
    key: 'countState',
    default: 0,
});

export const priceState = atom({
    key: 'priceState',
    default: 0,
});

export const pageState = atom({
    key: 'pageState',
    default: 0,
});

export const modalState = atom({
    key: 'modalState',
    default: false,
});

export const usermoneyState = atom({
    key: 'usermoneyState',
    default: 0,
});

export const basketItemsState = atom({
    key: 'basketItemsState',
    default: [],
});

export const buyMoneyState = atom({
    key: 'buyMoneyState',
    default: new Map(),
});