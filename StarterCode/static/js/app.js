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
    