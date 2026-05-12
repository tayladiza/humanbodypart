async function loadPhotos() {

  const res = await fetch("./photos.json");
  const photos = await res.json();

  const gallery = document.getElementById("gallery");

  photos.forEach((photo) => {

    const figure = document.createElement("figure");
    figure.className = "photo";

    // slight random tilt for film vibe
    const rotate = (Math.random() * 6) - 3;

    figure.style.transform = `rotate(${rotate}deg)`;

    figure.innerHTML = `
      <img src="${photo.src}" />
      <figcaption>${photo.caption || ""}</figcaption>
    `;

    gallery.appendChild(figure);

  });

}

loadPhotos();