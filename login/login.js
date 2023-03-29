const form = document.getElementById("login-form");

function check(form) {
    if (form.username.value == "홍길동" && form.userpassword.value == "1234") {
        location.href = '/main/main.html';
    } 
    else {
        alert("Error UserID");
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    check(this);
});