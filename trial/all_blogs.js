// Retrieve stored data from localStorage
function retrieveUserData() {
    let userData = [];
    if (localStorage.getItem('blogs')) {
        userData = JSON.parse(localStorage.getItem('blogs'));
    }
    return userData;
}

// Function to generate HTML table rows based on the retrieved data
function generateTableRows(userData) {
    let rows = '';
    userData.forEach((user, index) => {
        rows += `
            <tr>
                <td>${index + 1}</td>
                <td><img src="${user.picture}" style="max-width: 100px; max-height: 100px;"></td>
                <td>${user.title}</td>
                <td>${user.description}</td>
                <td>
                    <button onclick="viewUser(${index})">View</button>
                    <button onclick="openUpdateForm(${index})">Edit</button>
                    <button onclick="deleteUser(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
    return rows;
}

// Function to display retrieved data in a table
function displayUserDataInTable() {
    const userData = retrieveUserData();
    const tableBody = document.getElementById('blogTableBody');
    if (userData.length > 0) {
        const tableRows = generateTableRows(userData);
        tableBody.innerHTML = tableRows;
    } else {
        tableBody.innerHTML = '<tr><td colspan="5">No data available</td></tr>';
    }
}

// Function to view user details in a modal
function viewUser(index) {
    const userData = retrieveUserData();
    const user = userData[index];
    const modal = document.getElementById('userModal');
    const blogDetails = document.getElementById('blogDetails');
    blogDetails.innerHTML = `<strong>Tile:</strong> ${user.title}<br><strong>Picture:</strong><img src="${user.picture}" style="max-width: 100px; max-height: 100px;"><br><strong>Description:</strong> ${user.description}`;
    modal.style.display = "block";

    // Close the modal when the close button or outside the modal content is clicked
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Function to open update form with user details
function openUpdateForm(index) {
    const userData = retrieveUserData();
    const user = userData[index];
    const updateForm = document.getElementById('updateForm');
    const updateTitle = document.getElementById('updateTitle');
    const updatePicturePreview = document.getElementById('updatePicturePreview');
    const updateDescription = document.getElementById('updateDescription');

    updateTitle.value = user.title;
    updatePicturePreview.src = user.picture;
    updateDescription.value = user.description;

    updateForm.style.display = "block";
}

// Function to handle form submission for updating user details
// Function to handle form submission for updating user details
document.getElementById('updateForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const updateTitle = document.getElementById('updateTitle').value;
    // Instead of directly getting the value of the file input, get the file itself
    const updatePicture = document.getElementById('updatePicture').files[0];
    const updateDescription = document.getElementById('updateDescription').value;

    // Retrieve stored user data
    let userData = retrieveUserData();
    // Find the index of the user to be updated
    const index = userData.findIndex(user => user.title === updateTitle);
    // Update user details if found
    if (index !== -1) {
        // Update user details including the picture data
        userData[index].picture = URL.createObjectURL(updatePicture); // Assuming 'updatePicture' contains the file data
        userData[index].description = updateDescription;

        // Store updated user data back to localStorage
        localStorage.setItem('blogs', JSON.stringify(userData));
        // Close the update form
        document.getElementById('updateForm').style.display = "none";
        // Refresh the table to reflect the changes
        displayUserDataInTable();
    } else {
        alert("User not found!"); // Show an alert if user not found
    }
});


// Function to delete user
function deleteUser(index) {
    const userData = retrieveUserData();
    userData.splice(index, 1);
    localStorage.setItem('blogs', JSON.stringify(userData));
    displayUserDataInTable();
}

// Call the function to display data in the table when the page loads
window.onload = function() {
    displayUserDataInTable();
};
