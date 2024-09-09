document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch('https://submit-form.com/HDy2yNVOU', {
            method: 'POST',
            // body: formData,
        })
        .then(response => {
            if (response.ok) {
                window.location.href = 'https://webinar.automatealgos.in/html/thankyou-page.html';
            } else {
                alert('There was an error with your submission.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the form.');
        });
});