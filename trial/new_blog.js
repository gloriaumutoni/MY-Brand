
function validateForm() {
    var title = document.getElementById("title").value;
    var pictureInput = document.getElementById("picture");
    var description = document.getElementById("description").value;
    var isValid = true;

    // Reset errors
    document.getElementById("titleerror").innerHTML = "";
    document.getElementById("pictureerror").innerHTML = "";
    document.getElementById("descriptionerror").innerHTML = "";


    // Validate title
    if (!title) {
        document.getElementById("titleerror").innerHTML = "Title is required";
        isValid = false;
    }

    // Validate picture
    var picture = pictureInput.files[0];
    if (!picture) {
        document.getElementById("pictureerror").innerHTML = "Picture is required";
        isValid = false;
    }

    // Validate description
    if (!description) {
        document.getElementById("descriptionerror").innerHTML = "Description is required";
        isValid = false;
    }


    if (isValid) {
        var reader = new FileReader();
        reader.onload = function(event) {
            // Create object to store data
            var blogs = {
                title: title,
                picture: event.target.result, // Store picture as base64 string
                description: description
               
            };

            // Check if data already exists in localStorage
            var storedData = localStorage.getItem("blogs");
            var dataArray = [];
            if (storedData) {
                dataArray = JSON.parse(storedData);
            }

            // Add new data to array
            dataArray.push(blogs);

            // Store data in localStorage
            localStorage.setItem("blogs", JSON.stringify(dataArray));

            // Reset form
            document.getElementById("myForm").reset();
        };
        reader.readAsDataURL(picture);
    }
}