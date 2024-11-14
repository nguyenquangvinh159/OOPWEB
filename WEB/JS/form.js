function CheckThongTin(event) {
    event.preventDefault(); // Ngăn form không gửi đi

    var name = document.getElementById("Name").value;
    var passWord = document.getElementById("PassWord").value;
    var checkpass = /^(?=\S+$).{6,18}$/;
    var confirmPass = document.getElementById("XacNhanMatKhau").value;
    var hoten = document.getElementById("Hoten").value;
    var checkhoten = /^[a-zA-Z\s]+$/;
    var contact = document.getElementById("Email").value;
    var checkEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var checkMobile = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (name === "") {
        alert("Vui lòng nhập username.");
    } else if (hoten === "" || !checkhoten.test(hoten)) {
        alert("Định dạng tên sai. Chỉ được chứa chữ cái và khoảng trắng.");
    } else if (contact === "" || (!checkEmail.test(contact) && !checkMobile.test(contact))){
        alert("Vui lòng nhập đúng định dạng email hoặc số điện thoại.");
    }
    else if (passWord === "" || passWord.includes(" ") || !checkpass.test(passWord)) {
        alert("Định dạng mật khẩu sai");
    } else if (confirmPass === "" || confirmPass !== passWord) {
        alert("Xác nhận mật khẩu sai");
    } else {
        alert("Đăng ký thành công");
        document.getElementById("loginForm").style.display = "none";
    }
}
