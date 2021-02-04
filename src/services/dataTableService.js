export const dataTableService = (dataObj) => {
   const headerTypes = ['number', 'number', 'number', 'number', 'string', 'string', 'object'];
   headerTypes.concat(Array(16).fill('number'));
   //hardcoded atm, because all values are received as strings. lots of 'number' type at the end :D
   return {
      columns: Object.keys(dataObj[0]).map((col, index) => {
         console.log(headerTypes[index]);
         return {label: col, field: col, type:headerTypes[index]}
      }),
      rows: Object.values(dataObj)
   };
};