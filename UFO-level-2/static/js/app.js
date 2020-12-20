// from data.js
var tableData = data;
//define a var to hold the filtered data
var filterObject = {};

// YOUR CODE HERE!

console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");
function ufoTable(data) {
  tbody.html("");
  data.forEach(function(selected) {
    console.log(selected); 
    var row = tbody.append("tr");
    Object.entries(selected).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
}
////display table
ufoTable(tableData);

//// function that could filter data based on the criteria
function inputFilter(){
    var changedElement = d3.select(this).select("input");
    var elementValue = changedElement.property("value");
    var id = changedElement.attr("id");

    if (elementValue)
    {
        filterObject[id] = elementValue;
    
    }
    else {
        delete filterObject[id];
    }
    filterTable();
}
//// calling function for all the selected criteria
function filterTable(){

    Object.entries(filterObject).forEach(([key, value])=>{
     var   filteredData = tableData.filter(row => row[key]=== value);
    
  ufoTable(filteredData);

});    

}

/////// filter data as soon as input is in the field
d3.selectAll(".filter").on("change", inputFilter);