// Code your solutions in this file
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