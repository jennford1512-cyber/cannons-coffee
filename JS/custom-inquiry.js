let form = document.querySelector("#inquiry-form");
let thankYou = document.querySelector(".thank-you");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
	event.preventDefault();

	const data = new FormData(form);
	const dataObject = Object.fromEntries(data.entries());

	// Show the form data in the console
	console.log("Our form data:", dataObject);

	// Get the information from the form
	let name = dataObject.name;
	let email = dataObject.email;
	let phone = dataObject.phone;
	let comments = dataObject.comments;
	let flavor = dataObject.flavor;
	let interest = dataObject.interest;

	// Create the thank-you message using a template literal
	let message = `☕ Thank You, ${name}! 
       We appreciate your interest in ${interest}. Your favorite coffee flavor is ${flavor} and your comments are:${comments}
		We will soon contact you at ${email} or ${phone}.
		 We look forward to hearing from you!☕`;

	// Display the message on the webpage
	thankYou.innerHTML = message;

	// BONUS: Make the form disappear
	form.style.display = "none";
}