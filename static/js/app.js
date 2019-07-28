// from data.js set array to variable 'tableData'
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

//append to reflect all data
data.forEach(function(ufoSighting) {
  var row = tbody.append("tr");
  
  Object.entries(ufoSighting).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
    });
});

// filtering data based in input
// -----------------------------------------

// Getting a reference to the button on the page with the id property set to `filter-btn`
var filterButton =d3.select("#filter-btn");

// defining filter function
filterButton.on("click", function() {
    //prevent refresh
    d3.event.preventDefault();
    d3.selectAll("td").remove()

    // Select the input element
    var inputElement = d3.select("#datetime");
    
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    //filter data to date of input
    var filteredData = data.filter(data => data.datetime === inputValue);
    
    // Get a reference to the table body
    var tbody = d3.select("tbody");

    //append to reflect the new, filtered data
    filteredData.forEach((filteredSightings) => {
        var row = tbody.append("tr");
        Object.entries(filteredSightings).forEach(([key, value]) =>{
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});









// // Getting a reference to the button on the page with the id property set to `filter-btn`
// var filterButton = d3.select("#filter-btn");

// // Select the input element and get the raw HTML node
// var inputElement = d3.select("#datetime");

// // Get the value property of the input element
// var inputValue = inputElement.property("value");



// var filteredData = data.filter(data => data.datetime === inputValue);










// // from data.js
// var tableData = data;

// // YOUR CODE HERE!

// var tbody = d3.select("tbody"); 

// // use arrow functions to import data

// tableData.forEach((ufoSightings) => {
//     var row = tbody.append("tr");
//     Object.entries(ufoSightings).forEach(([key, value]) => {
//         var cell = tbody.append("td");
//         cell.text(value);
//     });
// });

// filtering data based in input







