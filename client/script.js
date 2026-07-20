

const contactForm = document.querySelector("#contact form");

contactForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const msg = document.querySelector("#message").value;

   

    console.log("Sending data:", {
        name,
        email,
        msg
    });

    try {

        const response = await fetch("http://127.0.0.1:5000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                msg
            })
        });

        console.log("Response status:", response.status);

        const data = await response.json();

        console.log("Response:", data);

        alert("Message submitted successfully!");

    }catch(error) {

        console.log("Fetch error:", error);
        alert("Backend connection failed");

    }} );