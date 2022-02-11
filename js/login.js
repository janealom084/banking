document.getElementById('login-submit').addEventListener('click', function () {
    // user email
    const userFild = document.getElementById('user-email');
    const userEmail = userFild.value;

    // user password
    const passwordFild = document.getElementById('user-password');
    const userPassword = passwordFild.value;

    if (userEmail == 'sontan@bapp.com' && userPassword == 'asdf') {
        window.location.href = "banking-page.html";
    }
})