document.addEventListener('DOMContentLoaded', () => {
    const photoItems = document.querySelectorAll('.photo-item');
    photoItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            const popup = document.createElement('div');
            popup.classList.add('popup');
            popup.innerHTML = `<div class="popup-content"><span class="close">&times;</span><img src="${imgSrc}" alt="放大预览"></div>`;
            document.body.appendChild(popup);
            popup.querySelector('.close').addEventListener('click', () => {
                popup.remove();
            });
        });
    });
});