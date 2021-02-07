//returns simplified object [cases:'', deaths:'',recovered:'']

export const latestDataAdapter = (dataObj) => {
    return {
        cases: getLastVal(dataObj.cases),
        deaths: getLastVal(dataObj.deaths),
        recovered: getLastVal(dataObj.recovered)
    }
};

let getLastVal = (obj) => {
    return Object.values(obj).pop();
};