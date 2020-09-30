function hiensignin() {
    var x = document.getElementById("trangsignin");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("matkhau").value;
    var x = document.getElementById("trangsignin");
    if (email === '' || password === '') {
        alert('Email và Mật khẩu ko được để trống!')

    }
    if (email === 'hien@gmail.com' && password === '123456') {
        alert('Đăng nhập thành công!')
        x.style.display = "none";
    } else {
        alert('Email hoặc mật khẩu không chính xác...')
    }

    var x = document.getElementById("trangsignin");

}