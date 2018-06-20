// function to get from the landing page to results page
var yesButton = $('#id').on('click', function() {
    console.log("yesButton");
    $(this).parent().hide();
    $('.container').show();
    resultsPage();
});

// function for displaying the results page
var resultsPage = function() {
    
}