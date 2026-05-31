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
        if (role === "admin") window.location.href = "./admin.html";
        else if (role === "teacher") window.location.href = "./teacher.html";
        else if (role === "student") window.location.href = "./student.html";
        else if (role === "parent") window.location.href = "./parent.html";
    }, 800);
});
// Dashboard navigation
function showSection(sectionId){
    document.querySelectorAll(".section").forEach(sec => {
        sec.classList.remove("active");
    });

    document.getElementById(sectionId).classList.add("active");
}

// Logout (works globally)
function logout(){
    localStorage.removeItem("user");
    window.location.href = "index.html";
}
// Attendance storage
let attendanceData = JSON.parse(localStorage.getItem("attendance")) || {};

function loadAttendance(){
    const date = document.getElementById("attDate").value;

    if(!date){
        alert("Select a date");
        return;
    }

    const list = document.getElementById("attendanceList");
    list.innerHTML = "";

    const saved = attendanceData[date] || {};

    students.forEach(stu => {
        const status = saved[stu.id] || "absent";

        list.innerHTML += `
            <div class="att-item">
                <div>
                    <b>${stu.name}</b> (Class: ${stu.class})
                </div>

                <select id="att-${stu.id}">
                    <option value="present" ${status === "present" ? "selected" : ""}>Present</option>
                    <option value="absent" ${status === "absent" ? "selected" : ""}>Absent</option>
                </select>
            </div>
        `;
    });
}

function saveAttendance(){
    const date = document.getElementById("attDate").value;

    if(!date){
        alert("Select a date first");
        return;
    }

    const record = {};

    students.forEach(stu => {
        const value = document.getElementById(`att-${stu.id}`).value;
        record[stu.id] = value;
    });

    attendanceData[date] = record;
    localStorage.setItem("attendance", JSON.stringify(attendanceData));

    alert("Attendance saved!");
}
