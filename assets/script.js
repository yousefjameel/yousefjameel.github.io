document.addEventListener("DOMContentLoaded", () => {
    
    
    const contactForm = document.getElementById("contactForm");


    contactForm.addEventListener("submit", (event) => {
        
        event.preventDefault();

        
        const name = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const country = document.getElementById("country").value;
        const comments = document.getElementById("comments").value.trim();

        if (name === "" || email === "" || country === "" || comments === "") {
            
            alert("Error: Please fill out all fields before submitting.");
        } else {
            
            alert("Success! Your form was submitted. Thank you, " + name + ".");
            
        }
    });
});