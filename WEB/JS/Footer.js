window.addEventListener("scroll", function() {
    let footer = document.getElementById("myFooter");
  
    // Kiểm tra vị trí hiện tại của cuộn và chiều cao của trang
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight -200) {
      // Nếu người dùng cuộn gần đến cuối trang (cách 100px)
      footer.style.bottom = "0"; // Hiển thị footer
    } else {
      // Nếu người dùng cuộn lên xa hơn
      footer.style.bottom = "-200px"; // Ẩn footer ra khỏi màn hình
    }
  });
  