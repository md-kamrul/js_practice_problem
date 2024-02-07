function checkName(name) {

    //if name is not a string type
    if (typeof name !== "string") {
        return "invalid";
    }

    // if name is a string type
    let nameInLowerCase = name.toLowerCase();
    let nameLenght = nameInLowerCase.length;

    if (nameInLowerCase.charAt(nameLenght - 1) === `a` || nameInLowerCase.charAt(nameLenght - 1) === `y` || nameInLowerCase.charAt(nameLenght - 1) === `i` || nameInLowerCase.charAt(nameLenght - 1) === `e` || nameInLowerCase.charAt(nameLenght - 1) === `o` || nameInLowerCase.charAt(nameLenght - 1) === `u` || nameInLowerCase.charAt(nameLenght - 1) === `w`) {
        return "Good Name";
    }
    else {
        return "Bad Name";
    }
}

let goodOrBad = checkName(["Rashed"]);
console.log(goodOrBad);