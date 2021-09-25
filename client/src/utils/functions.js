
export function filterActivities(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === value) return array[i]
    }
    return false
}


export function sortAreaUp (array){
    array.sort((a,b)=>{
        return b.area - a.area
    })
    return array
}

export function sortAreaDown (array){
    array.sort((a,b)=>{
        return a.area - b.area
    })
    return array
}

export function sortAlphZA(array){
    array.sort((a,b)=>{
        if (a.name > b.name) {
            return -1;
        }
        if (b.name > a.name) {
            return 1;
        }
        return 0;
    })
    return array
}

export function sortAlphAZ(array){
    array.sort((a,b)=>{
        if (a.name > b.name) {
            return 1;
        }
        if (b.name > a.name) {
            return -1
        }
        return 0;
    })
    return array
}

export function validate(activitie) {
    let errors = {}
    let validateUrl = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;

    if (!activitie.name) {
        errors.name = 'Name is required'
    }
    else if (!/[a-zA-Z ]{2,254}/.test(activitie.name)) {
        errors.name = 'Name is invalid';
    }
    

    if (!activitie.dificult) errors.dificult = 'Dificult is required'
    if (!activitie.duration){
         errors.duration = 'Duration is required'
    }
    else if(!/^[a-zA-Z0-9]*$/.test(activitie.duration)){
        errors.duration = 'Duration is invalid'
    }
    if (!activitie.season) errors.season = 'Season is required'
    if (!activitie.nameCountry.length > 0) errors.nameCountry = 'Countries is required'
    if (!validateUrl.test(activitie.image)) errors.image = "Insert a valid URL.";
        
    return errors

}