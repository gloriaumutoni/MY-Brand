// edit and deleting content

document.addEventListener('DOMContentLoaded', function() {
    const editButtons = document.querySelectorAll('.edit-btn');
    const deleteButtons = document.querySelectorAll('.delete-btn');
    
    // Add event listeners for edit buttons
    editButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const parentContent = button.parentElement.parentElement.previousElementSibling;
            const paragraphs = parentContent.querySelectorAll('p');
            paragraphs.forEach(function(paragraph) {
                paragraph.contentEditable = true;
                paragraph.style.border = '1px solid #007bff';
            });
        });
    });
    
    // Add event listeners for delete buttons
    deleteButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const parentContent = button.parentElement.parentElement.previousElementSibling;
            parentContent.remove();
        });
    });
});
