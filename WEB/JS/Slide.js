const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const slideCount = slide.length;
const slideWidth = 100; // 100% width mỗi slide
const intervalTime = 4000; // 4 giây

let slideInterval;

// Hàm để chuyển đến slide cụ thể
function goToSlide(index) {
    slides.style.transform = `translateX(-${index * slideWidth}%)`;
    currentIndex = index;
}

// Hàm chuyển slide tự động
function startSlide() {
    slideInterval = setInterval(() => {
        if (currentIndex < slideCount - 1) {
            goToSlide(currentIndex + 1);
        } else {
            // Khi đến slide cuối cùng (bản sao của slide đầu tiên), quay lại đầu
            goToSlide(0);
        }
    }, intervalTime);
}

// Hàm dừng chuyển slide tự động
function stopSlide() {
    clearInterval(slideInterval);
}

// Sự kiện khi nhấn nút Next
nextButton.addEventListener('click', () => {
    stopSlide();
    if (currentIndex < slideCount - 1) {
        goToSlide(currentIndex + 1);
    } else {
        goToSlide(0);
    }
    startSlide();
});

// Sự kiện khi nhấn nút Prev
prevButton.addEventListener('click', () => {
    stopSlide();
    if (currentIndex > 0) {
        goToSlide(currentIndex - 1);
    } else {
        goToSlide(slideCount - 1);
    }
    startSlide();
});

// Khởi động slide tự động khi trang tải
startSlide();

// Sự kiện khi kết thúc chuyển đổi slide (để lặp mượt nếu cần)
slides.addEventListener('transitionend', () => {
    // Nếu đang ở slide cuối cùng (bản sao của slide đầu tiên), quay lại đầu
    if (currentIndex === slideCount - 1) {
        slides.style.transition = 'none';
        slides.style.transform = `translateX(0)`;
        currentIndex = 0;
        // Cho phép trình duyệt áp dụng lại transition
        setTimeout(() => {
            slides.style.transition = 'transform 1s ease-in-out';
        }, 0);
    }
});
// Dừng slide khi hover
const slider = document.querySelector('.slider');

slider.addEventListener('mouseenter', stopSlide);
slider.addEventListener('mouseleave', startSlide);
