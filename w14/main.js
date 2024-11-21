function renderPhotos(photos) {
    photos.forEach((img) => {
        const imgEl = document.createElement("img");
        imgEl.setAttribute("src", img.thumbnailUrl);
        document.getElementById("output").appendChild(imgEl);
    });
}

async function getPhotos() {
    const output = document.getElementById("output");
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        //const response = await fetch("https://jsonplaceholder.typicode.com/photossss"); // testing error
        const photos = await response.json();


        if (response.status === 200) {
            renderPhotos(photos.slice(0, 50));
        } else {
            output.textContent = `Server Error: ${response.status}`;
        }
    } catch (error) {
        output.textContent = `Error: ${error.message}`;
        console.error("Fetch error:", error);
    }
}

async function start() {
    await getPhotos();
}

start();
