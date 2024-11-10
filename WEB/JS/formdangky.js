function CheckThongTin(){
    var name = document.getElementById("Name").value;
    var passWord = Number(Document.getElementById("PassWord").value);
    var checkpass = /^(?=\S+$).{6,18}$/;
    var confirmPass = document.getElementById("XacNhanMatKhau").value;
    var hoten = document.getElementById("Hoten").value;
    var checkhoten = /\s/;
    var email = document.getElementById("Email").value;
    var checkemail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var mobile = document.getElementById("Email").value;
    var checkmobile = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;   
    if (name == "" || checkhoten.test(name) == false)
        alert("Định dạng used sai");
    else if (email == "" || checkemail.test(email) == false || mobile == "" || isNaN(mobile) || checkmobile.test(mobile)==false)
        alert("Định dạng email sai và số điện thoại sai");
    else if (passWord == "" || passWord.includes(" ") == true || checkpass.text(passWord) == false)
        alert("Định dạng passWord sai");
    else if (confirmPass == "" || confirmPass != passWord)
        alert("Xác nhận mật khẩu sai");
    else if(hoten == "" || checkhoten.text(hoten)==false){
        alert("Định dạng tên sai");
    }
    else {
        alert("Đăng nhập thành công");
        $("#loginForm").css("display", "none");
    }
}