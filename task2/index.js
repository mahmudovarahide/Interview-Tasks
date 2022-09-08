const CommonPrefix = (strs) => {
    let prefix = strs.reduce((acc, str) => (str.length < acc.length ? str : acc));

    for (let str of strs) {
        while (str.slice(0, prefix.length) != prefix) {
            prefix = prefix.slice(0, -1);
        }
    }
    return prefix.length > 0 ? prefix : false;
}


const res = CommonPrefix(["alma", "albalı", "alça"]);
const res2 = CommonPrefix(["alim", "müəllim", "şagirdə"]);

console.log(res2);