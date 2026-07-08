const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.querySelector("input[type='text']");
        const email = document.querySelector("input[type='email']");
        const message = document.querySelector("textarea");

        if (
            name.value.trim() === "" ||
            email.value.trim() === "" ||
            message.value.trim() === ""
        ) {
            alert("Please fill in all fields.");
            return;
        }

        alert("Thank you! Your message has been sent.");

        form.reset();

    });

}