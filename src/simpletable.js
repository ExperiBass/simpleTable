let simpleTable = class {
    constructor({ rows = 2, 
                    cols = 2, 
                    id = 'simpletable', 
                    elem = 'nodejs', 
                    before = true, 
                    style: {                                
                        borderCollapse = true, 
                        head = true, 
                        headHeight = "20px", 
                    }
                }) {

        // Checking parameters
        // Checking rows and columns
        if (!rows || isNaN(parseInt(rows))) {
            return console.error(`param rows is not a number`)
        }
        if (!cols || isNaN(parseInt(cols))) {
            return console.error(`param cols is not a number`)
        }
        // Checking ID
        if (typeof id !== 'string') {
            return console.error(`param id is not a string`)
        }
        // Checking headHeight
        if (!headHeight || typeof headHeight !== 'string') {
            return console.error(`param headHeight is not a string`)
        }
        // Checking elem
        if (typeof elem !== 'string') {
            return console.error(`param elem is not a string`)
        }
        // Clecking before
        if (typeof before !== 'boolean') {
            return console.error(`param before is not boolean`)
        }

        this.rows = rows
        this.cols = cols
        this.id = id
        this.borderCollapse = borderCollapse
        this.head = head
        this.headHeight = headHeight
        this.elem = elem
        this.before = before
        this.table
    }
    
    generate() {
        
        // Creating the table
        this.table = document.createElement('table')
        let e
        
        // Setting its properties
        this.table.id = this.id
        this.table.style.border = '1px solid'
        if (this.borderCollapse == true) {
            this.table.style.borderCollapse = 'collapse' 
        } else {
            this.table.style.borderCollapse = 'seperate'
        }

        // Generating the table
        for (let i = 0; i < this.rows; i++) { 
            // Creating rows
            let row = this.table.insertRow()

            for (let j = 0; j < this.cols; j++) {
                // Creating cells
                let cell = row.insertCell(j)
                let style = cell.style
                style.borderSpacing = '0px'

                if (i + 1 == this.rows) {
                    style.borderBottom = 'none'    
                } else {
                    style.textAlign = 'center'
                    style.borderBottom = '1px solid'
                }
                style.borderRight = '1px solid' 
                style.padding = '3px 4px 3px 4px'

                cell.innerText = `Cell ${j + 1} of Row ${i + 1}`
            }
        }

        try {
            e = document.getElementById(`${this.elem}`)
        } catch(err) {
            console.err(err)
            return null
        }
        
        // Inserting the table
        if (this.before) {
            document.body.insertBefore(this.table, e)
        } else {
            document.body.insertAdjacentElement(this.table, e)
        }       
    }

    getRows() {      
        return this.table.children[0].children
    }

    getCell(cellNo) {     
        return this.cells[cellNo - 1]
    }

    get cells() {
        let cells = []

        for (let i = 0; i < this.getRows().length; i++) {
            for (let j = 0; j < this.getRows().length; j++) {
                cells.push(this.getRows()[i].children[j]) // Get all the cells and add them to a arrat
            }
        }
        return cells
    }

    get length() {
        return this.cells.length
    }
}
module.exports = simpleTable