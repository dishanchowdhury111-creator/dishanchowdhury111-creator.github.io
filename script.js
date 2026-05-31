const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    if(username === "" || password === "" || role === "") {
        message.textContent = "Please fill all fields.";
        message.style.color = "red";
        return;
    }

    message.textContent = `Login successful as ${role}`;
    message.style.color = "green";

    console.log({
        username,
        password,
        role
    });

    // Future:
    // Send login request to backend
    // Redirect to dashboard
});
