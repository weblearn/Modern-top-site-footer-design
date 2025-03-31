document.addEventListener("DOMContentLoaded", function () {
  const data = [
    { name: "John", age: 30, occupation: "Developer" },
    { name: "Jane", age: 25, occupation: "Designer" },
    { name: "Bob", age: 35, occupation: "Manager" },
    { name: "Alice", age: 28, occupation: "Engineer" },
    { name: "Charlie", age: 32, occupation: "Architect" },
    { name: "Emily", age: 27, occupation: "Teacher" },
    { name: "David", age: 31, occupation: "Analyst" },
    { name: "Olivia", age: 29, occupation: "Writer" },
    { name: "James", age: 33, occupation: "Doctor" },
    { name: "Sophia", age: 26, occupation: "Artist" },
  ];

  const content = document.getElementById("content");
  const toggleNav = document.getElementById("toggleNav");
  const sidebar = document.getElementById("sidebar");

  // Initialize with sidebar closed
  document.body.classList.remove("sidebar-open");

  // Populate content with data
  data.forEach((item) => {
    content.innerHTML += `
                    <div class="data-card">
                        <h3>${item.name}</h3>
                        <p><strong>Age:</strong> ${item.age}</p>
                        <p><strong>Occupation:</strong> ${item.occupation}</p>
                        <button class="btn" style="background-color: #3498db; color: white; margin-top: 10px;">View Profile</button>
                    </div>
                `;
  });

  // Toggle sidebar
  toggleNav.addEventListener("click", function () {
    document.body.classList.toggle("sidebar-open");

    // Change icon based on state
    const icon = this.querySelector("i");
    if (document.body.classList.contains("sidebar-open")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // Login/Signup button functionality
  const loginBtn = document.querySelector(".btn-login");
  const signupBtn = document.querySelector(".btn-signup");

  loginBtn.addEventListener("click", function () {
    alert("Login functionality would go here");
  });

  signupBtn.addEventListener("click", function () {
    alert("Sign up functionality would go here");
  });

  // Nav item click functionality with selection highlight
  const navItems = document.querySelectorAll("nav ul li");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Remove selected class from all items
      navItems.forEach((navItem) => {
        navItem.classList.remove("selected");
      });

      // Add selected class to clicked item
      this.classList.add("selected");

      // Optional: Close sidebar after selection on mobile
      if (window.innerWidth <= 768) {
        document.body.classList.remove("sidebar-open");
        toggleNav.querySelector("i").classList.remove("fa-times");
        toggleNav.querySelector("i").classList.add("fa-bars");
      }
    });
  });

  // Set first item as selected by default
  if (navItems.length > 0) {
    navItems[0].classList.add("selected");
  }
});
