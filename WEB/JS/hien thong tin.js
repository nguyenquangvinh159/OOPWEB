document.addEventListener("DOMContentLoaded", function () {
    const showMoreButton = document.querySelector(".show-more");
    const moreContent = document.querySelector(".more-content");

    showMoreButton.addEventListener("click", function () {
        // Toggle hiển thị nội dung
        moreContent.style.display = moreContent.style.display === "block" ? "none" : "block";

        // Thay đổi văn bản nút
        if (moreContent.style.display === "block") {
            showMoreButton.textContent = "Ẩn bớt ▲";
        } else {
            showMoreButton.textContent = "Hiển thị thêm ▼";
        }

        // Di chuyển nút về cuối
        showMoreButton.classList.toggle("expanded");
    });
});
