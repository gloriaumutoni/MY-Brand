
const swiperEl = document.querySelector('swiper-container')
    Object.assign(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        clickable: true,
      },
      breakpoints: {
        240: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        440: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
    });
    swiperEl.initialize();


// Function to retrieve blogs from local storage and display them in the swiper container
function displayBlogsInSwiper() {

  var blogs = JSON.parse(localStorage.getItem("blogs")) || []; // Retrieve blogs from local storage
  var swiperContainer = document.getElementById("swiper-container") // Select swiper container

  // Clear existing swiper slides
  swiperContainer.innerHTML = '';

  // Iterate through each blog and create a new swiper slide
  blogs.forEach(function (blog) {
    
    const image = blog.image

    console.log("blog image",blog.image)

    console.log("single blog : ", blog)


    const htmlTemplate =`<swiper-slide>
                  <div class="blog2">
                  
                  <img src=${blog.picture} alt="image5" class="blog-image">
                  
                  <h4><a href="./single blog list/blog1.html">${blog.title}</a></h4>
                  
                  <div class="feedback">
                  <p>${blog.comments.length}</p>  
                  <i class='bx bx-conversation'></i>    
                  <p>8</p> 
                  <i class='bx bx-like' ></i> 
                  </div>
                  </div>
                  </swiper-slide>
            `
    
      // Append the new swiper slide
      swiperContainer.insertAdjacentHTML('afterbegin', htmlTemplate);
  });
}

displayBlogsInSwiper();






// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const message = document.getElementById('message');


// form.addEventListener('submit', e => {
//     e.preventDefault();

//     validateInputs();
// });

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// }

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// const validateInputs = () => {
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const messageValue = message.value.trim();


//     if(usernameValue === '') {
//         setError(username, 'Username is required');
//     } else {
//         setSuccess(username);
//     }

//     if(emailValue === '') {
//         setError(email, 'Email is required');
//     } else if (!isValidEmail(emailValue)) {
//         setError(email, 'Provide a valid email address');
//     } else {
//         setSuccess(email);
//     }

//     if(messageValue === '') {
//         setError(message, 'message is required');
//     } else {
//         setSuccess(message);
//     }
// };
