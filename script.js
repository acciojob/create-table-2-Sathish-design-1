function createTable() {
    let numRows = prompt("Input number of rows");
    let numCols = prompt("Input number of columns");

    // Validate inputs
    if (isNaN(numRows) || isNaN(numCols) || numRows <= 0 || numCols <= 0) {
        alert("Please enter valid positive integers for rows and columns.");
        return;
    }

    numRows = parseInt(numRows);
    numCols = parseInt(numCols);

    const table = document.getElementById("myTable");
    table.innerHTML = ""; // Clear existing table content

    for (let i = 0; i < numRows; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < numCols; j++) {
            const cell = document.createElement("td");
            cell.textContent = `Row-${i} Column-${j}`;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}