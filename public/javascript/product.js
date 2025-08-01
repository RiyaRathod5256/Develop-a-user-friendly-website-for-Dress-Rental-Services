document.addEventListener("DOMContentLoaded", function() {
    const selectedDressId = localStorage.getItem('selectedDressId');
    console.log('Selected Dress ID:', selectedDressId);

    if (selectedDressId) {
        const dress = dresses.find(d => d.id == selectedDressId);
        console.log('Selected Dress:', dress);

        if (dress) {
            document.getElementById('product-image').src = dress.image;
            document.getElementById('product-name').textContent = dress.name;
            document.getElementById('product-price').textContent = dress.price;
            document.getElementById('product-description').textContent = dress.description;
        } else {
            document.getElementById('product-name').textContent = 'Product not found';
        }
    } else {
        document.getElementById('product-name').textContent = 'Product not found';
    }

    // Show form when "Rent Now" button is clicked
    document.getElementById('rent-now').addEventListener('click', function() {
        const rentForm = document.getElementById('rent-form');
        document.getElementById('rent-now').style.display = 'none'; // Hide the Rent Now button
        rentForm.style.display = 'block';
        setTimeout(() => rentForm.classList.add('show'), 10); // Add animation class
    });

    // Handle form submission
    document.getElementById('rental-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Hide the form
        document.getElementById('rent-form').style.display = 'none';

        // Show delivery message
        const deliveryMessage = document.createElement('p');
        deliveryMessage.textContent = 'Thank you for shopping with us! Your product will be delivered soon.';
        deliveryMessage.classList.add('thank-you-message'); // Add stylish class
        document.querySelector('main').appendChild(deliveryMessage);

        // Add Continue Shopping button
        const continueButton = document.createElement('button');
        continueButton.textContent = 'Continue Shopping';
        continueButton.classList.add('continue-shopping-button'); // Add stylish class
        continueButton.addEventListener('click', function() {
            window.location.href = 'index.html'; // Redirect to home page
        });
        document.querySelector('main').appendChild(continueButton);
    });
});


