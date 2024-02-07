function deleteInvalids(array) {

    //if the argument is not an array
    if (!(Array.isArray(array))) {
        return "Invalid Input......."
    }

    // if the argument is an array
    let newArray = [];
    for (let element of array) {
        if (!(isNaN(element)) && element !== null && typeof (element) !== "string") {
            newArray.push(element);
        }
    }
    return newArray;
}

let result = deleteInvalids({ num: [1, 2, 3] });
console.log(result);