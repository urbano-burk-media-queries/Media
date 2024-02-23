// This is an attempt to make a sparkle effect that trails from the mouse cursor when it moves on page
// Haven't gotten it working quite yet

let starContainer = document.getElementById("starry");

function createStar() {
    let star = document.createElement("div");
    star.className = "star";
    starContainer.appendChild(star); // Append to the starContainer, not star itself

    // Animation logic
    let xy = Math.random() * 100;
    let duration = Math.random() * (1.5 - 1) + 1; // between 1 and 1.5 seconds
    let delay = Math.random() * (0.5); // between 0 and 0.5 seconds

    star.style.left = `${Math.random() * window.innerWidth}px`;
    star.style.animation = `twinkle ${duration}s ease ${delay}s infinite`;
    // ...
}

// Call the createStar function
for (let i = 0; i < 100; i++) {
    createStar();
}







//
//
// // JavaScript code for the sparkling effect
// const sparklesContainer = document.getElementById('sparkles-container');
//
// function createSparkle() {
//     const sparkle = document.createElement('div');
//     sparkle.className = 'sparkle';
//
//     const size = Math.random() * 3;
//     sparkle.style.width = `${size}px`;
//     sparkle.style.height = `${size}px`;
//
//     sparkle.style.top = `${Math.random() * 100}%`;
//     sparkle.style.left = `${Math.random() * 100}%`;
//
//     const duration = 0.6 + Math.random() * 1.5;
//     sparkle.style.animation = `sparkle-animation ${duration}s linear infinite`;
//
//     sparklesContainer.appendChild(sparkle);
//
//     setTimeout(() => {
//         sparkle.remove();
//     }, duration * 1000);
// }
//
// setInterval(createSparkle, 200);
