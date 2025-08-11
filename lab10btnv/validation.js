// Hàm này sẽ chạy sau khi toàn bộ trang đã được tải
$(document).ready(function() {

    // Gắn sự kiện "submit" cho form
    $("#regform").submit(function(event) {
        // Ngăn form gửi đi ngay lập tức
        event.preventDefault(); 
        
        if (validate()) {
            // Nếu không có lỗi, bạn có thể thực hiện gửi form ở đây
            // Hoặc đơn giản là cho phép hành vi mặc định
            // this.submit(); // Bỏ comment dòng này nếu muốn form gửi đi thật
            alert("Biểu mẫu hợp lệ và sẵn sàng để gửi!");
        }
    });

    // Gắn sự kiện "click" cho nút thu gọn/mở rộng
    $(".collapse").click(function(event) {
        event.preventDefault();
        toggleFieldset(this);
    });

    // Gắn sự kiện "click" cho nút đóng cửa sổ lỗi và lớp phủ
    $("#errBtn, #scrnOverlay").click(function(event) {
        event.preventDefault();
        $("#scrnOverlay, #errWin").fadeOut();
    });

});

// Hàm kiểm tra lỗi chính
function validate() {
    var sid = $("#sid").val().trim();
    var pwd1 = $("#pwd1").val().trim();
    var pwd2 = $("#pwd2").val().trim();
    var uname = $("#uname").val().trim();
    var genderSelected = $("#genm").is(":checked") || $("#genf").is(":checked");

    var errors = [];
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var namePattern = /^[a-zA-Z\s]+$/;

    // Kiểm tra từng điều kiện
    if (sid === "") errors.push("User ID không được để trống.");
    else if (!emailPattern.test(sid)) errors.push("User ID phải là email hợp lệ.");

    if (pwd1 === "") errors.push("Mật khẩu không được để trống.");
    if (pwd2 === "") errors.push("Phần nhập lại mật khẩu không được để trống.");
    if (pwd1 !== "" && pwd1 !== pwd2) errors.push("Mật khẩu không khớp.");
    
    if (uname === "") errors.push("Họ và tên không được để trống.");
    else if (!namePattern.test(uname)) errors.push("Họ và tên chỉ chứa chữ cái và khoảng trắng.");
    
    if (!genderSelected) errors.push("Bạn phải chọn giới tính.");

    // Nếu có lỗi, hiển thị cửa sổ lỗi
    if (errors.length > 0) {
        $("#error-list").empty();
        $.each(errors, function(index, message) {
            $("#error-list").append("<li>" + message + "</li>");
        });
        $("#scrnOverlay, #errWin").fadeIn();
        return false; // Báo hiệu có lỗi
    }
    
    return true; // Báo hiệu không có lỗi
}

// Hàm đóng/mở fieldset
function toggleFieldset(element) {
    $(element).closest('legend').next('.fieldset-content').slideToggle();
    if ($(element).html().trim() === "[-]") {
        $(element).html("[+]");
    } else {
        $(element).html("[-]");
    }
}