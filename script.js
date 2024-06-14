async function getDogs() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);

        // Creating an image element
        const dogImg = document.getElementById("dogImg");
        dogImg.src = data.message; // The 'message' field contains the URL of the dog image
        dogImg.alt = "A random dog"; // Adds alternative text for the image

        // Append the image element to the body or any other container
       // document.body.appendChild(dogImg);
    } catch (error) {
        console.error("Error fetching the dog image:", error);
    }
}

// Adding an event listener to the button
document.getElementById("dogButton").addEventListener("click", getDogs);
