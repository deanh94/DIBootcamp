let username = "John";
function checkName (user) {
	console.log("username = user", username === user)
	user += "Smith";
	console.log("username = user", username === user)
	console.log("username = ", user, username)
}
console.log("before username = ", username)
checkName(username)
console.log("after username = ", username)