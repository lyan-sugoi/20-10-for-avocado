function openLetter() {
    const envelopeScreen = document.getElementById('envelope-screen');
    const letterScreen = document.getElementById('letter-screen');

    // Ẩn màn hình phong bì
    envelopeScreen.style.display = 'none';

    // Hiển thị màn hình lời chúc
    letterScreen.style.display = 'block';

    // Tùy chọn: Thay đổi màu nền tổng thể cho trang lời chúc
    document.body.style.backgroundColor = '#fff8f8';
    
    // Cuộn lên đầu trang lời chúc (nếu cần thiết)
    window.scrollTo(0, 0);
}