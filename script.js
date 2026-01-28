// Select elements
const updateBtn = document.getElementById('updateBtn');
const nameInput = document.getElementById('nameInput');
const bioInput = document.getElementById('bioInput');
const locationInput = document.getElementById('locationInput');

const userName = document.getElementById('userName');
const userBio = document.getElementById('userBio');
const userLocation = document.getElementById('userLocation');

// Add click event to button
updateBtn.addEventListener('click', function() {
    if(nameInput.value !== "") {
        userName.textContent = nameInput.value;
    }
    if(bioInput.value !== "") {
        userBio.textContent = bioInput.value;
    }
    if(locationInput.value !== "") {
        userLocation.textContent = locationInput.value;
    }

    // Clear inputs
    nameInput.value = "";
    bioInput.value = "";
    locationInput.value = "";
});
