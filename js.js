$(document).ready(function(){
    $("#search").on("click",function(){
        getCountries();
    });
  
});

function getCountries(){
    var search = $(".form-control").val();
   
    var my_url = "https://restcountries.eu/rest/v2/all";
    if( search.length > 0 ){
        my_url = "https://restcountries.eu/rest/v2/name/" + search;
    }
    $.ajax({
        url:my_url, 
        type:"get", 
        data:{}, 
        success:function(result){ 
            console.log(result);
            $("#countries").html("");
            printAllCountries(result);

        },
        error:function(xhr){
            console.log("Error:",xhr);
        }
    });
}


function printAllCountries(result) {
    for (let i = 0; i < result.length; i++) {
        let html = "";
        html += "<div class='col-md-3 cube' >";
        html += "<h6>name: " + result[i].name + "</h6>";
        html += "<h6>topLevelDomain: " + result[i].topLevelDomain + "</h6>";
        html += "<h6>capital: " + result[i].capital + "</h6>";
        html += "<h6>currencies: " + getAllCoins(result[i].currencies) + "</h6>";
        html += "<img  src='" + result[i].flag + "'class='col-md-6' />";
        html += "</div>";
        $("#countries").append(html);
    }
}


function getAllCoins(coins){
    let html = "";
    for( var i = 0; i < coins.length; i++ ){
       if(  coins[i].name==null){
        html +"";
       } else{ html +="name: "+ coins[i].name+"/"}
       if(  coins[i].symbol==null){
        html +"";
       } else{ html +="symbol: " + coins[i].symbol}
       
    }
    return html;
}


