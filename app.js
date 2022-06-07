function check_pass() {
    if (document.getElementById('password').value === document.getElementById('confirmPassword').value) {
        document.getElementById('message').style.color = 'rgb(252,249,146)';
        document.getElementById('message').textContent = '*Passwords match';
        document.getElementById('password').style.borderColor = 'rgb(0,255, 13)'
        document.getElementById('confirmPassword').style.borderColor = 'green'
    } else {
        document.getElementById('message').style.color = 'rgb(155,0,0)';
        document.getElementById('message').textContent = '*Passwords do not match';
        document.getElementById('password').style.borderColor = 'red'
        document.getElementById('confirmPassword').style.borderColor = 'red'
    }
}