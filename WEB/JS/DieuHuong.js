document.addEventListener("DOMContentLoaded", function() {
    const movieElements = document.querySelectorAll(".movie"); // Tìm tất cả các phần tử phim
  
    movieElements.forEach((movieElement) => {
      const movieList = movieElement.querySelector(".movie-list"); // Danh sách phim trong mỗi phần tử phim
      const prevButton = movieElement.querySelector(".prev-item"); // Nút cuộn trái
      const nextButton = movieElement.querySelector(".next-item"); // Nút cuộn phải
  
      let currentScrollPosition = 0;
      const scrollAmount = 220;
  
      // Hàm cuộn sang trái
      function scrollLeft() {
        if (currentScrollPosition > 0) {
          currentScrollPosition -= scrollAmount;
          movieList.scrollTo({
            left: currentScrollPosition,
            behavior: "smooth"
          });
        }
      }
  
      // Hàm cuộn sang phải
      function scrollRight() {
        if (currentScrollPosition < movieList.scrollWidth - movieList.clientWidth) {
          currentScrollPosition += scrollAmount;
          movieList.scrollTo({
            left: currentScrollPosition,
            behavior: "smooth"
          });
        }
      }
  
      // Cập nhật currentScrollPosition khi người dùng cuộn thủ công
      movieList.addEventListener("scroll", function() {
        currentScrollPosition = movieList.scrollLeft;
      });
  
      // Gắn sự kiện click vào các nút
      prevButton.addEventListener("click", scrollLeft);
      nextButton.addEventListener("click", scrollRight);
    });
  });