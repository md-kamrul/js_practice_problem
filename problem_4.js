function password(obj) {

    let birthYearLength = obj.birthYear.toString().length;

    // if any obj property is missing
    if (!obj.hasOwnProperty("name") || !obj.hasOwnProperty("birthYear") || !obj.hasOwnProperty("siteName")) {
        return "invalid";
    }
    
    // if birthYear is not 4 digits
    else if (birthYearLength !== 4) {
        return "invalid";
    }

    // if everything is okay
    else { 

        //the first letter of the site name must be in capital letter
        let site;
        for (let i = 0; i <= obj.siteName.length; i++) { 
            if (i === 0) {
                site = obj.siteName.charAt(i).toUpperCase();
            }
            else { 
                site = site + obj.siteName.charAt(i);
            }
        }
        let generatedPassword = site + "#" + obj.name + "@" + obj.birthYear;

        return generatedPassword;
    }
}

let generatedPassword = password({ name: "maisha", birthYear: 2002 });
console.log(generatedPassword);