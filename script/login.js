const cardContainer = document.getElementById('cardContainer');
        const signupForm = document.getElementById('signup-form');
        const loginForm = document.getElementById('login-form');

        let storedPhoneNumber = '';
        let storedPin = '';

        function toggleCard() {
            cardContainer.classList.toggle('flipped');
        }

        signupForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const signupPhone = document.getElementById('signup-phone').value;
            const signupPin = document.getElementById('signup-pin').value;

            storedPhoneNumber = signupPhone;
            storedPin = signupPin;

            console.log('Sign Up Successful!');
            console.log('Phone Number stored:', storedPhoneNumber);
            console.log('PIN stored:', storedPin);
            alert('Sign up successful! You can now log in.');
            toggleCard(); // Flip the card to the login side
        });

        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const loginPhone = document.getElementById('login-phone').value;
            const loginPin = document.getElementById('login-pin').value;

            if (loginPhone === storedPhoneNumber && loginPin === storedPin) {
                console.log('Login successful! Welcome back.');
                alert('Login successful! Welcome back.');
            } else {
                console.log('Login failed. Please check your phone number and PIN.');
                alert('Login failed. Please check your phone number and PIN.');
            }
        });