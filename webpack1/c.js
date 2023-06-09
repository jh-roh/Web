import { sayhello } from "./b.js";
console.log('module_c');

export const sayhello2 = () => {
    sayhello();
    sayhello();
};