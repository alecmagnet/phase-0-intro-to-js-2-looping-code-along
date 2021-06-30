// Code your solutions in this file
/*
const name = ["Lisa", "Kaitlin", "Jan"];
const event = ["surprise"]

function writeCards(name, event) {
	const cardMessages = [];
	for (let i = 0; i < name.length; i++) {
		cardMessages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
	}
	return cardMessages;
}

function countDown(number) {
	while (number >= 0) {
		console.log(number--);
	}
}
*/

/*
for (let age = 30; age < 40; age++) {
	console.log(`I'm ${age} years old. Happy birthday to me!`);
}
*/

/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
	for (let i = 0; i < gifts.length; i++) {
		console.log(`Wrapped ${gifts[i]} and added a bow!`);
	}
	return gifts;
}
wrapGifts(gifts);
*/

//const names = ['Lisa', 'Kaitlin', 'Jan'];

function writeCards(names, event) {
	const cards = [];
	for (let i = 0; i < names.length; i++) {
		cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
	}
	return cards;
}

function countDown(positiveInteger) {
	while (positiveInteger >= 0) {
		console.log(positiveInteger--);
	}
}