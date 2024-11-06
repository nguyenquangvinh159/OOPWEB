window.onscroll = function() {
    checkScroll();
  };
  
  function checkScroll() {
    // Lấy phần tử nút
    let backToTopBtn = document.getElementById("backtop");
  
    // Kiểm tra nếu trang được cuộn xuống trên 300px, hiển thị nút
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  }