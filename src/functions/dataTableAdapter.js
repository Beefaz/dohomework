export const dataTableAdapter = (dataObj) => {
    Object.keys(dataObj).forEach((key) => {
        delete dataObj[key]['countryInfo'];
        delete dataObj[key]['continent'];
        delete dataObj[key]['updated'];
    });
    return {
        columns: createHeaders(dataObj[0]),
        rows: Object.values(dataObj)
    };
};

const createHeaders = (headerObj) => {
    return Object.keys(headerObj).map((col) => {
        const upperCaseCol = col.replace(/([A-Z]+)/g, " $1").toUpperCase();
        const params = {label: upperCaseCol, field: col};
        if (col === 'country') {
            return {type: 'string', ...params}
        } else
            return {type: 'number', ...params};
    })
};