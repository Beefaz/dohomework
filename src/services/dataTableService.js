export const dataTableService = (dataObj) => {
   return {
      columns: Object.values(Object.keys(dataObj[0])).map((col) => {
         return {label: col.toUpperCase(), field: col}
      }),
      rows: Object.values(dataObj)
   };
};