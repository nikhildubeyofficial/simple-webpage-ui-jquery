$(document).ready(function() {
    // Initialize datepicker
    $("#datepicker").datepicker();

    // Initialize autocomplete for From and To city inputs
    var availableCities = [
        "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", 
        "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "Fort Worth", "Columbus", 
        "Charlotte", "Indianapolis", "San Francisco", "Seattle", "Denver", "Washington", "Boston"
    ];

    $("#fromCity, #toCity").autocomplete({
        source: availableCities
    });
});
