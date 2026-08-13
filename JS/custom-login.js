let form = document.querySelector("#login-form");
let welcome = document.querySelector(".welcome");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
	event.preventDefault();

	const data = new FormData(form);
	const dataObject = Object.fromEntries(data.entries());

	// Show the form data in the console
	console.log("Our login data:", dataObject);

	// Get the name from the form
	let name = dataObject.name;

	// Create the welcome message using a template literal
	let message = ` Welcome back, ${name}! 
		You are logged in!`;

	// Display the welcome message
	welcome.innerHTML = message;

	// BONUS: Make the form disappear
	form.style.display = "none";
}
