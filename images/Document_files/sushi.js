
//Global Object
var sushiMe = {};

sushiMe.init = function() {
	alert(sushiMe.getLocation());
};


//find locations

sushiMe.getLocation = function() {
	$.ajax({
		url: 'https://api.foursquare.com/v2/venues/explore',
		type: 'GET',
		dataType: 'json',
		data: {
			near: 'Toronto',
			query: 'sushi',
			client_id: 'XOI0MBH5POODQZDXXT2L3RA0A3Y23UNDLF2PHZY2XMQLGALS',
			client_secret: 'C2HKF12I24HKUXVDYYXYNZC2B25RFCW4YG5AZIZ5T531DZNA',
			v: '20150728'
		},
		success: function(res) {
			console.log(res.response.groups[0].items[25].venue.name);
		}


	});
}

//print to HTMl


$(document).ready(function(){
	sushiMe.init();
});


