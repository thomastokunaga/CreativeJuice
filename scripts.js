/**
 * Created by h205p3 on 5/22/17.
 */



$(document).ready(function() {
        $("#company").hide();
        $("#client").hide();
        $("#generate").click(function() {
            var company = ["Uber", "Netflix", "Snapchat", "Lyft", "Instagram", "Facebook", "Twitter", "Pandora", "YouTube", "Spotify", "SoundCloud", "iTunes", "Amazon", "Oovoo", "Yelp", "Tinder", "eBay", "Craigslist", "Pinterest", "Fandango", "Bitmoji", "Waze", "Chrome", "Safari", "Doorman", "Wish"];
            var client = ["elderly", "stoners", "kids", "tweens", "teens", "diabetics", "creeps", "stalkers", "fitness people", "ratchets", "truckers", "programmers", "musicians", "activists", "liberals", "hippies", "adrenaline junkies"];

           rcompany = company[Math.floor(Math.random() * company.length)];
           rclient = client[Math.floor(Math.random() * client.length)];

            document.getElementById("company").innerHTML = rcompany;
            document.getElementById("client").innerHTML = rclient;

            document.getElementById("company").className = "hyphenate";
            document.getElementById("client").className = "hyphenate";
            Hyphenator.config({hyphenchar:'-'});
            Hyphenator.run();
            setTimeout(split, 50);
        })

});


function split(){
    var clihy = document.getElementById("client").innerHTML;
    var comhy = document.getElementById("company").innerHTML;

    var first = "";
    var count = 0;
    var last = "";
    var count1 = 0;
    for(var i = 0; i < clihy.length; i++){
        count++;
        if(clihy[i] === "-"){
            var first = clihy.substring(0, i);
            break
        }

    }
    if(count === clihy.length){
        first = clihy;
    }

    for(var i = comhy.length; i > 0; i--){
        count1++;
        if(comhy[i] === "-"){
            var last = comhy.substring(i+1, comhy.length);
            break
        }

    }
    if(count1 === comhy.length){
        last = comhy;
    }

    document.getElementById("output").innerHTML = first+last+", "+rcompany+" for "+rclient+".";

}


