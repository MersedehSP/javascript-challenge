// from data.js
var tableData = data;
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


 ////////////////// Select the  button///////////////////////////////////////////////

var button = d3.select("#filter-btn");

//  Use D3 `.on` to attach a click handler for the button
button.on("click", function() {
    
  // Prevent the page from refreshing
    d3.event.preventDefault();
    tbody.html("");

    // Select the input element 
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    
    //filter data
    var filteredData = tableData.filter(sightings => sightings.datetime === inputValue);

    console.log(filteredData);
    
    ///////////////display the filtered data

  ufoTable(filteredData);

});    
