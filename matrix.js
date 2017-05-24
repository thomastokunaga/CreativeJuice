/**
 * Created by h205p3 on 5/9/17.
 */


//dummy test data - get this from an API
    $(document).ready(function() {
        $.ajax({
            url: "https://itunes.apple.com/search?term=jack+johnson",
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            success: function(result) { console.log(result) },
            error: function() { alert('Failed!'); }
        });

//dummy test data - get this from an API
   var x =
       [{"text": 'Go to Page 1', "url": 'sarah.html'},
           {"text": 'Go to Page 2', "url": 'page2.html'},
           {"text": 'Go to Page 3', "url":'page3.html'},
           {"text": 'Go to page 4', "url":'page4.html'}
       ];

   for(var i=0; i< x.length; i++) {

       $("#thing").append("<li><a href='" + x[i].url + "'>" + x[i].text + "</a></li>")


   }

   $( "#thing" ).listview( "refresh" );


});










companies: ["Uber", "Netflix", "Snapchat", "Lyft", "Instagram", "Facebook", "Twitter", "Pandora", "YouTube", "Spotify", "SoundCloud", "iTunes", "Amazon", "Oovoo", "Yelp", "Tinder", "Hulu",
 "HBO Now", "eBay", "Craigslist", "Pintrest", "Fandago", "Bitmoji", "Cartoon Network", "waze", "chrome", "Safari", "Doorman", "Wish"];

clients: ["old people", "stoners", "kids", "tweens", "teens", "young adults", "old cat ladies", "dog people", "diabetics", "creeps", "stalkers", "fitness people", "ratchets", "truck drivers",
    "music junkies", "computer scientists", "musicians", "phone addicts", "people named courtney", "activists", "liberals", "dumb people(aka trump supporters)", "hippies", "mastodon", "adrenalin junkies"









































