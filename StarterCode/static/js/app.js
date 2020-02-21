// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

data.forEach((tableData) => {
  var row = tbody.append("tr");
  Object.entries(tableData).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

var filter = d3.select("#filter-btn").on("click", function(){
    tableData.forEach(data =>data.datetime.filter()
    person.bloodType === inputValue)
})

// RESET BUTTON 
var resetBtn = d3.select("#reset-btn");
resetBtn.on("click", function() {
    clearRecords();
    allRecords();
});

// Initiate site with all records showing
function allRecords(){
    data.forEach((ufoRecord) => {
        let row = tbody.append("tr");
        Object.entries(ufoRecord).forEach(([key, value]) => {
            let cell = row.append("td");
            cell.text(value);
        })
    })
};

// Clear all records
function clearRecords(){
    let notFound = d3.select("#not-found").remove();
    let rows = tbody.selectAll("tr").remove();
}

// init
allRecords()