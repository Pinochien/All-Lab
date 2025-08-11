function validate() {
    var sid = document.getElementById("sid").value;
    var pwd1 = document.getElementById("pwd1").value;
    var pwd2 = document.getElementById("pwd2").value;
    var uname = document.getElementById("uname").value;
    var genm = document.getElementById("genm").checked;
    var genf = document.getElementById("genf").checked;

    var errMsg = "";
    var result = true;
    var pattern = /^[a-zA-Z ]+$/;

    // Rule 1: Không để trống
    if (sid == "") errMsg += "User ID cannot be empty.\n";
    if (pwd1 == "") errMsg += "Password cannot be empty.\n";
    if (pwd2 == "") errMsg += "Retype password cannot be empty.\n";
    if (uname == "") errMsg += "User name cannot be empty.\n";
    if (!genm && !genf) errMsg += "A gender must be selected.\n";

    // Rule 2: Email phải chứa '@' và không bắt đầu bằng '@'
    if (sid.indexOf('@') == 0) errMsg += "User ID cannot start with an @ symbol.\n";
    if (sid.indexOf('@') < 0) errMsg += "User ID must contain an @ symbol.\n";

    // Rule 3: Mật khẩu phải giống nhau
    if (pwd1 != pwd2) errMsg += "Passwords do not match.\n";

    // Rule 4: Tên chỉ chứa chữ và khoảng trắng
    if (!uname.match(pattern)) errMsg += "User name contains symbols.\n";

    // Optional: Yêu cầu mật khẩu mạnh
    if (pwd1.length < 8) errMsg += "Password must be at least 8 characters long.\n";
    if (!(/[A-Z]/.test(pwd1) && /[a-z]/.test(pwd1)))
        errMsg += "Password must contain both uppercase and lowercase letters.\n";

    // Hiển thị lỗi
    if (errMsg != "") {
        alert(errMsg);
        result = false;
    }

    return result;
}

function init() {
    var regForm = document.getElementById("regform");
    regForm.onsubmit = validate;
}

window.onload = init;
