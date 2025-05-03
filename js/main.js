// Toast Handler
function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout (() => {
        toast.classList.remove('show');
        setTimeout(() => document.body.removeChild(toast), 500)
    }, 4000);
}

//Booking Form Sumbit
const bookingForm = document.querySelector('.booking-form')
if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();
        showToast('Appointment submitted successfully!');
        bookingForm.requestFullscreen();
}); 
}

//Contact Form Submit


const scrollBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


fetch("/api/news")
  .then(res => res.json())
  .then(data => {
    const newsList = document.getElementById("vetNews");
    newsList.innerHTML = ""; // clear loading text
    data.articles.forEach(article => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${article.link}" target="_blank">${article.title}</a>`;
      newsList.appendChild(li);
    });
  })
  .catch(err => {
    document.getElementById("vetNews").innerHTML = "<li>Failed to load news.</li>";
  });
