export const dataTableService = (dataObj) => {
   const headerTypes = ['number', 'string', 'string', 'string', ...Array(13).fill('number'), 'string', ...Array(6).fill('number'),];
   return {
      columns: Object.keys(dataObj[0]).map((col, index) => {
         const sort = {sortable: true};
         if (col === 'countryInfo'){
            sort.sortable = false;
         }
         return {label: col, field: col, type:headerTypes[index], ...sort}
      }),
      rows: Object.values(dataObj)
   };
};