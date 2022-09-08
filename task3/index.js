const conbineSameObjects = (arr) => {
    let newObj = [];
    arr.forEach((object) => {
        let isHaveValue = newObj.some((obj) => obj.type === object.type);
        if (!isHaveValue) {
            newObj.push({ type: object.type, value: [object.value] })
        } else {
            newObj.map((obj) => {
                if (obj.type === object.type) {
                    return obj.value.push(object.value);
                }
            })
        }
    })

    return newObj;
}
const combine = conbineSameObjects([
    { type: "A", value: "Tesla" },
    { type: "A", value: "GMC" },
    { type: "B", value: "KIA" },
    { type: "C", value: "Dodge" },
    { type: "C", value: "Ford" }
])
console.log(combine);