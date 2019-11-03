// from data.js
var tableData = data;
var tbody = d3.select('tbody')

var button = d3.select('#filter-btn');

button.on("click", function() {

    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    tbody.innerHTML = "";
  
    // filter takes a function, and that function returns a boolean 
    /*
        tableData = [1,2,3,4,5];
        filteredData = tableData.filter(function(data) {
            return data < 3;
        })

        filteredData = [];
        for (i=0 ; i<data.length ; i++) { 
            if (tableData[i] < 3){ 
                filteredData.append(tableData[i]);
            }
        }
    */
    var filteredDate = tableData.filter(ufo => ufo.datetime === inputValue); //
        console.log(filteredDate)
            for (var i = 0; i < filteredDate.length; i++) {
                var sightings = filteredDate[i];
                var ufo = Object.values(sightings);
                console.log(sightings)
                var row = tbody.append('tr');
                for (var x = 0; x < ufo.length; x++) {
                    var foo = ufo[x];
                    console.log(foo)
                    var td = row.append('td');
                    td.text(foo) 
                   
                    
                };
            };

    // console.log(filteredDate);

    // if (inputValue === filteredDate) {
    //     var tbody = d3.select('tbody')
    //         for (var i = 0; i < filteredDate.length; i++) {
    //             var sightings = filteredDate[i];
    //             console.log(sightings)
    //             var ufo = Object.keys(sightings);
    //             var row = tbody.append('tr');
    //             for (var x = 0; x < ufo.length; x++) {
    //                 var foo = foo[x];
    //                 var cell = row.append('td');
    //                 cell.innerText = sightings[foo];
    //             };
    //         };
    


  
//     console.log(filteredData);
  
    // BONUS: Calculate summary statistics for the age field of the filtered data
  
    // First, create an array with just the age values

});
  


// function appendTable() {
//         var tbody = d3.select('tbody')
//         for (var i = 0; i < tableData.length; i++) {
//             var ufo = tableData[i];
//             console.log(ufo)
//             var sightings = Object.keys(ufo);
//             var row = tbody.append('tr');
//             for (var x = 0; x < sightings.length; x++) {
//                 var sighting = sightings[x];
//                 var cell = row.append('td');
//                 cell.innerText = ufo[sighting];
//             };
//         };
// //     };

// var searchInput = d3.select("#datetime");
// console.log(searchInput);

// var cityInput = document.querySelector("#city");
// console.log(cityInput);

// var stateInput = document.querySelector("state");
// console.log(stateInput);

// var countryInput = document.querySelector("#country");
// console.log(countryInput);

// var shapeInput = document.querySelector("#shape");
// console.log(shapeInput);

// var durationInput = document.querySelector("#duration");
// console.log(durationInput);

// var commentsInput = document.querySelector("#comments");
// console.log(commentsInput);   

// var commentsInput = document.querySelector("#comments");
// console.log(commentsInput);   

// var tbody = d3.select("tbody");

// searchInput.on("change", function() {
//     var searchValue = searchInput.property("value");
//     d3.select("tbody").innerHTML = "";
//     switch (searchValue) {
//         case 'datetime':
//             placeHolder = 'Enter Date';
//             break;
//         case 'city':
//             placeholder = 'Enter City'
//         case 'state':
//             placeHolder = 'Enter State';
//             break;
//         case 'country':
//             placeholder = 'Enter Country'
//         case 'shape':
//             placeHolder = 'Describe the Shape';
//             break;
//         case 'duration':
//             placeholder = 'Enter Duration'
//         case 'comments':
//             placeHolder = 'Enter Comments';
//             break;
//         default:
//             placeholder = '';
//     }
// });

// tableData.forEach((ufo) => {
//     var row = tbody.append("tr");
//     Object.entries(ufo).forEach(([key, value]) => {
//         var cell = row.append('td');
//         cell.text(value);
//     })
// });

// function filterTableClick() {
// var filterDate = searchInput.value;
// var filterCity = cityInput.value.trim().toLowerCase();
// var filterState = stateInput.value.trim().toLowerCase();
// var filterCountry = countryInput.value.trim().toLowerCase();
// var filterShape = shapeInput.value.trim().toLowerCase();
// var filterDuration = durationInput.value.trim().toLowerCase();
// var filterComments = commentsInput.value.trim().toLowerCase();



// var button = d3.select('#filter-btn')

// button.on("click", function appendTable() {
//     var tbody = d3.select('tbody')
//     for (var i = 0; i < tableData.length; i++) {
//         var ufo = tableData[i];
//         console.log(ufo)
//         var sightings = Object.keys(ufo);
//         var row = tbody.append('tr');
//         for (var x = 0; x < sightings.length; x++) {
//             var sighting = sightings[x];
//             var cell = row.append('td');
//             cell.innerText = ufo[sighting];
//         };
//     };
// });