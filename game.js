// We are going to form one array that hold all of our dumb powers and use math.round(math.random) to pull indiviual values. 

// one we link our js to out button we will try and focus on design and other ux choices. sinceryl migul and tim


var pointPowers = [
	"The power to believe it's not butter", 
	"The power to teleport yourself to the exact same location.",
	"The power to be 13% bullet proof.",
	"The power to hold your breath under water unless you're wet.",
	"The power to walk through walls but fall through floors.",
	"The power to open automated doors a few moments sooner than they would typically open.",
	"The power to be invisible when no one is looking at you.",
	"The power to smell the future",
	"The power to slightly moisten objects.",
	"The power to die and then come back in the center of the Sun.",
	"The power to see through doors once they are opened.",
	"The power of immunity to paper cuts.",
	"The power to mentally control houseflies.",
	"The power to see into the past exactly one second.",
	"The ability to speak braille.",
	"The power to read people's mind, but only in languages you don't understand.",
	"The power to raise your cholesterol level using only your mind.",
	"the power to be able to touch MC Hammer",
	"the power to make yourself invisible, except for your left arm",
	"X-ray vision that only works on old mens clothes.",
	"The power to read the Terms of Service but be unable to check the box saying that you have done so.",
	"The ability to make dust accumulate on things five times faster than normal",
	"The power to be skillful at everything, but only when need to go to the toilet and you are on the verge of crapping yourself.",
	"The power to extend the length of commercial when your going to the bathroom",
	"The ability to glow but only in broad daylight",
	"The ability to compare apples to oranges.",
	"The ability to sneeze flames.",
	"The ability to tapdance flawlessly but only while being booked for trespassing",
	"The ability to turn anything into cheese, but be lactose intolerant.",
	"The ability to be superman but only with the left half of your body",
	"The power to turn lemons into limes"
]

var valueHolder;
var questionAnswer;
var arrayLength;
var randomNumber;
var randomPower;
var personName;

$(document).ready(function(){
	// personName = prompt("Hi, what's your name?");

	$("#answerButton").on('click', function(){
		arrayLength = pointPowers.length;
		randomNumber = (Math.floor(Math.random()*arrayLength));
		randomPower = pointPowers[randomNumber];
		console.log(randomPower);
		$('h3').html("<h3>"  + randomPower + "</h3>");
		return randomPower;
	});	



	// $('h3').on('click', function() {
	// 	$(this).text(randomPower);
	// // });
	// $('#answerButton')
	//   .on('click', function( e ) {
	//     $('div#modal').addClass('active');
	//     $('div#modal.h3').html("<h3>"  + randomPower + "</h3>");
	//     e.preventDefault();
	//   });

	// $('#close-modal')
	// .on('click', function( e ) {
	//   $('div#modal').removeClass('active');
	//   e.preventDefault();
	// });



});