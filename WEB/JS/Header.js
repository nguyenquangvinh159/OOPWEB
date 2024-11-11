// Đợi cho trang web được tải hoàn toàn
document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");

    // Hàm kiểm tra vị trí cuộn và thêm/loại bỏ lớp 'scrolled'
    function checkScroll() {
        if (window.scrollY > 50) { // Thay đổi giá trị này tùy ý để xác định khi nào header thay đổi
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    // Gọi hàm khi trang được cuộn
    window.addEventListener("scroll", checkScroll);

    // Gọi hàm một lần khi trang được tải (để xử lý trường hợp người dùng tải trang ở vị trí cuộn xuống)
    checkScroll();
});
$(document).ready(function(){
    $("#login-button").click(function(){
        $("#loginForm").css({
            display: 'block',
        });
        $(".popup-box").css({
            display: 'none',
        });
        $(".my-box").css({
            display: 'none',
        });
    });
});
