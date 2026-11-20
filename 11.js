function deepClone(obj, visited = new WeakMap()) {
    if (obj === null || typeof obj !== "object") {
        return obj; }
    if (visited.has(obj)) {
        return visited.get(obj); }
    if (obj instanceof Date) {
        return new Date(obj); }
    let clone= Array.isArray(obj) ? [] : {};
    visited.set(obj, clone);
    for (let key in obj) {
        if (Object.hasOwn(obj, key)) {
            clone[key] = deepClone(obj[key], visited); }
    }
    return clone;
}
let obj = {
    name: "Vivek",
    age: 20,
    date: new Date(),
    subjects: ["JavaScript", "Python"],
    address: {
        city: "Ghaziabad",
        state: "UP"
    }
};
obj.self= obj;
let copy = deepClone(obj);
console.log(copy);
console.log(copy !== obj);
console.log(copy.self === copy);