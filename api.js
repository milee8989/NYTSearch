


$("#submit").on('click', function () {


    var article = $("#search").val();
    console.log(search)
 
 
 
    // var article = "paris";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + article + "&api-key=EbCVmbtJGP2O1Hd0YGaYA5AXeI84v1lu";
 
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        var results = response.response.docs;
        console.log(results);
        for (var i = 0; i < results.length; i++) {
            var h1 = $("<h1>")
            h1.text(results[i].headline.main)
            $("#div").append(h1)
 
            var section = $("<h2>")
            section.text(results[i].section_name)
            $("#div").append(section)
 
            var time = $("<h3>")
            time.text(results[i].pub_date)
            $("#div").append(time)
 
            var path = $("<a href>")
            path.text(results[i].web_url)
            $("#div").append(path)
 
        }
    });
 
 
 
 })