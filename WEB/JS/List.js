function changeImage(element, newSrc) {
    const img = element.querySelector('img');
    img.src = newSrc; // Thay đổi đường dẫn ảnh
}

function resetImage(element, originalSrc) {
    const img = element.querySelector('img');
    img.src = originalSrc; // Khôi phục ảnh gốc
}