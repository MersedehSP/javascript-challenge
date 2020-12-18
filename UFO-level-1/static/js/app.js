// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!\\
// Get a reference to the table body
var tbody = d3.select("tbody");

// // Step 1: Loop Through UFO Sghtings data (tableData) and console.log each column

tableData.forEach(function(ufoSightings) {
  console.log(ufoSightings);
 

// // Step 2:  Use d3 to append one table row `tr` for each UFO Sghtings object

   var row = tbody.append("tr");


// // Step 3:  Use `Object.entries` to console.log each UFO Sghtings value

   Object.entries(ufoSightings).forEach(function([key, value]) {
     console.log(key, value);
  });
 });

 ////////////////// Select the  button///////////////////////////////////////////////

var button = d3.select(".button");

// Use D3 `.on` to attach a click handler for the button
button.on("click", function() {
    
  // Prevent the page from refreshing////////////////////////
  // d3.event.preventDefault();
    tbody.html("");
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    
    //filter data
    var filteredData = tableData.filter(sightings => sightings.datetime === inputValue);

    console.log(filteredData);
    
    ///////////////


    filteredData.forEach(function(selected) {
        console.log(selected); 
        var row = tbody.append("tr");
        Object.entries(selected).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
});    
