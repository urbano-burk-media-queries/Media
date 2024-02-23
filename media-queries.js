// const cursor = document.querySelector('.custom-cursor');
//
// document.addEventListener('mousemove', (e) => {
//     cursor.style.display = 'block';
//     cursor.style.left = e.pageX - 10 + 'px'; // Adjust cursor position based on its width
//     cursor.style.top = e.pageY - 10 + 'px'; // Adjust cursor position based on its height
// });
//
// document.addEventListener('mouseleave', () => {
//     cursor.style.display = 'none'; // Hide the cursor when it leaves the document
// });

// const cursor = document.querySelector('.custom-cursor');
//
//     document.addEventListener('mousemove', (e) => {
//         cursor.style.display = 'block';
//         cursor.style.left = e.pageX - cursor.offsetWidth / 2 + 'px';
//         cursor.style.top = e.pageY - cursor.offsetHeight / 2 + 'px';
//     });

const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.display = 'block';
    cursor.style.left = e.pageX - cursor.offsetWidth / 2 + 'px';
    cursor.style.top = e.pageY - cursor.offsetHeight / 2 + 'px';

    // Set the custom image URL
    const imageUrl = 'path/to/your/image.png';

    // Set the background image property of the cursor
    cursor.style.backgroundImage = `url(${imageUrl})`;
});