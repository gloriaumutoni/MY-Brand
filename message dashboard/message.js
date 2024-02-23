// Function to display the list of messages in a table
function displayMessages() {
    const messages = JSON.parse(localStorage.getItem('formData')) || [];
    const tableBody = document.getElementById('messageTableBody');
    if (messages.length > 0) {
        let rows = '';
        messages.forEach((message, index) => {
            rows += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${message.fullName}</td>
                    <td>${message.email}</td>
                    <td>${message.message}</td>
                    <td>
                        <button onclick="viewMessage(${index})">View</button>
                        <button onclick="deleteMessage(${index})">Delete</button>
                    </td>
                </tr>
            `;
        });
        tableBody.innerHTML = rows;
    } else {
        tableBody.innerHTML = '<tr><td colspan="5">No messages available</td></tr>';
    }
}

// Function to view a message
// Function to view a message
function viewMessage(index) {
    const messages = JSON.parse(localStorage.getItem('formData')) || [];
    const message = messages[index];
    const modal = document.getElementById('messageModal');
    const messageDetails = document.getElementById('messageDetails');

    // Populate modal with message details
    messageDetails.innerHTML = `
        <p><strong>Username:</strong> ${message.fullName}</p>
        <p><strong>Email:</strong> ${message.email}</p>
        <p><strong>Message:</strong> ${message.message}</p>
    `;

    // Show the modal
    modal.style.display = 'block';

    // Close the modal when the close button is clicked
    const closeButton = document.getElementsByClassName('close')[0];
    closeButton.onclick = function() {
        modal.style.display = 'none';
    };

    // Close the modal when clicking outside the modal content
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}


// Function to delete a message
function deleteMessage(index) {
    let messages = JSON.parse(localStorage.getItem('formData')) || [];
    messages.splice(index, 1);
    localStorage.setItem('formData', JSON.stringify(messages));
    displayMessages(); // Refresh the table
}

// Call displayMessages when the page loads
window.onload = function() {
    displayMessages();
};
