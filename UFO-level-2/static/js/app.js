// from data.js
var tableData = data;
var filterObject = {};

// YOUR CODE HERE!

console.log(tableData);

// YOUR CODE HERE!\\
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
////
ufoTable(tableData);

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

function filterTable(){


 //////////////// Select the  button///////////////////////////////////////////////


    
  
    
    Object.entries(filterObject).forEach(([key, value])=>{
     var   filteredData = tableData.filter(row => row[key]=== value);
    

    
    
  

  ufoTable(filteredData);

});    

}




//  Use D3 `.on` to attach a click handler for the button
d3.selectAll(".filter").on("change", inputFilter);