// Fake database (temporary)
const users = [
    { username: "admin", password: "1234", role: "admin" },
    { username: "teacher1", password: "1234", role: "teacher" },
    { username: "student1", password: "1234", role: "student" },
    { username: "parent1", password: "1234", role: "parent" }
];

const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    const user = users.find(
        u =>
            u.username === username &&
            u.password === password &&
            u.role === role
    );

    if (!user) {
        message.textContent = "Invalid credentials";
        message.style.color = "red";
        return;
    }

    message.textContent = "Login successful!";
    message.style.color = "green";

    // Store session
    localStorage.setItem("user", JSON.stringify(user));

    // Redirect based on role
    setTimeout(() => {
        if (role === "admin") window.location.href = "admin.html";
        else if (role === "teacher") window.location.href = "teacher.html";
        else if (role === "student") window.location.href = "student.html";
        else if (role === "parent") window.location.href = "parent.html";
    }, 800);
});
