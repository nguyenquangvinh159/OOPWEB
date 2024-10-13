// script.js

// Lấy tất cả các phần tử phim
const movieItems = document.querySelectorAll('.movie-item');

// Thêm sự kiện cho từng phim
movieItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        // Lấy dữ liệu từ các thuộc tính data
        const title = item.getAttribute('data-title');
        const poster = item.getAttribute('data-poster');
        const description = item.getAttribute('data-description');
        const director = item.getAttribute('data-director');
        const cast = item.getAttribute('data-cast');
        const year = item.getAttribute('data-year');
        const genre = item.getAttribute('data-genre');
        const duration = item.getAttribute('data-duration');
        const rating = item.getAttribute('data-rating');

        // Cập nhật nội dung vào box thông tin
        const infoBox = item.querySelector('.info-box');
        const infoPoster = infoBox.querySelector('.info-poster');
        const infoTitle = infoBox.querySelector('.info-title');
        const infoDescription = infoBox.querySelector('.info-description');
        const infoDirector = infoBox.querySelector('.info-director');
        const infoCast = infoBox.querySelector('.info-cast');
        const infoYear = infoBox.querySelector('.info-year');
        const infoGenre = infoBox.querySelector('.info-genre');
        const infoDuration = infoBox.querySelector('.info-duration');
        const infoRating = infoBox.querySelector('.info-rating');

        infoPoster.src = poster;
        infoTitle.textContent = title;
        infoDescription.textContent = description;
        infoDirector.textContent = director;
        infoCast.textContent = cast;
        infoYear.textContent = year;
        infoGenre.textContent = genre;
        infoDuration.textContent = duration;
        infoRating.textContent = rating;
    });

    // Bạn có thể thêm các sự kiện khác nếu cần
});
