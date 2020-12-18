// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// // Step 1: Loop Through UFO Sghtings data (tableData) and console.log each column
tableData.forEach(function(ufoSightings) {
  console.log(ufoSightings);
 

// // Step 2:  Use d3 to append one table row `tr` for each UFO Sghtings object

   var row = tbody.append("tr");


// // Step 3:  Use `Object.entries` to console.log each UFO Sghtings value
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");

   Object.entries(ufoSightings).forEach(function([key, value]) {
     console.log(key, value);
  });
 });
