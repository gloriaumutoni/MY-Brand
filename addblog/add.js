// upload image button
const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");

customBtn.addEventListener("click", function() {
    realFileBtn.click();
});

realFileBtn.addEventListener("change", function() {
    if (realFileBtn.value) {
        customTxt.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    } else {
        customTxt.innerHTML = 'No Image chosen';
    }
});

// text editor

const textarea = document.getElementById("textarea");

function f1(e) {
    let value = e.value;
    textarea.style.fontSize = value + "px";
}

function f2(e) {
    if (textarea.style.fontWeight == "bold") {
        textarea.style.fontWeight = "normal";
        e.classList.remove('active');
    } else {
        textarea.style.fontWeight = "bold";
        e.classList.add('active');
    }
}

function f3(e) {
    if (textarea.style.fontStyle == "italic") {
        textarea.style.fontStyle = "normal";
        e.classList.remove("active");
    } else {
        textarea.style.fontStyle = "italic";
        e.classList.add("active");
    }
}

function f4(e) {
    if (textarea.style.textDecoration == "underline") {
        textarea.style.textDecoration = "none";
        e.classList.remove("active");
    } else {
        textarea.style.textDecoration = "underline";
        e.classList.add("active");
    }
}

function f5(e) {
    textarea.style.textAlign = "left";
}

function f6(e) {
    textarea.style.textAlign = "center";
}

function f7(e) {
    textarea.style.textAlign = "right";
}

function f8(e) {
    if (textarea.style.textTransform == "uppercase") {
        textarea.style.textTransform = "none";
        e.classList.remove("active");
    } else {
        textarea.style.textTransform = "uppercase";
        e.classList.add("active");
    }
}

function f9(e) {
    textarea.style.fontWeight = "normal";
    textarea.style.textAlign = "left";
    textarea.style.fontStyle = "normal";
    textarea.style.textTransform = "capitalize";
    textarea.value = "";
}

function f10(e) {
    let value = e.value;
    textarea.style.color = value;
}

window.addEventListener('load', () => {
    textarea.value = "";
});

// adding blogs

function validateForm() {
    var title = document.getElementById("title").value;
    var pictureInput = document.getElementById("real-file");
    var description = document.getElementById("textarea").value;
    var isValid = true;

    // Reset errors
    document.getElementById("texterror").innerHTML = "";
    document.getElementById("pictureerror").innerHTML = "";
    document.getElementById("descriptionerror").innerHTML = "";

    // Validate title
    if (!title) {
        document.getElementById("texterror").innerHTML = "Title is required";
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
            document.getElementById("myform").reset();
        };
        reader.readAsDataURL(picture);
    }
}
