# simpleTable
 
 Simple HTML Table generator.

 ## USAGE
 
 See [demo.html](./test/demo.html).

 ## METHODS

 ```js
    simpleTable.generate() // Generates the table and displays it
    simpleTable.getRows() // Returns a array of row objects
    simpleTable.getCell(cellNo) // Gets the specified cell for usage. Starts at 1, as in `simpleTable.getCell(1)` returns the first cell.
    simpleTable.length // returns the number of cells in the table.
```
