document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "🌙 Dark Mode";
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "10px";
    toggleButton.style.right = "10px";
    toggleButton.style.padding = "10px";
    toggleButton.style.backgroundColor = "#0073e6";
    toggleButton.style.color = "white";
    toggleButton.style.border = "none";
    toggleButton.style.borderRadius = "5px";
    toggleButton.style.cursor = "pointer";
    document.body.appendChild(toggleButton);
  
    toggleButton.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "☀️ Light Mode";
        toggleButton.style.backgroundColor = "#ff8c42"; /* Orange */
      } else {
        toggleButton.textContent = "🌙 Dark Mode";
        toggleButton.style.backgroundColor = "#0073e6"; /* Blue */
      }
    });
  
    // Toggle Contact Info (Optional)
    const contactSection = document.getElementById("contact");
    const contactToggleButton = document.createElement("button");
    contactToggleButton.textContent = "Toggle Contact Info";
    contactSection.insertBefore(contactToggleButton, contactSection.firstChild);
  
    contactToggleButton.addEventListener("click", function () {
      const contactList = contactSection.querySelector("ul");
      if (contactList.style.display === "none") {
        contactList.style.display = "block";
      } else {
        contactList.style.display = "none";
      }
    });
  });