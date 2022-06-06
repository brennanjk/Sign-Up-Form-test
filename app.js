function check_pass() {
    if (document.getElementById('password').value === document.getElementById('confirmPassword').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').textContent = 'Passwords match';
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').textContent = '*Passwords do not match';
    }
}