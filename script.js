    function togglePassword() {
        const passwordInput = document.getElementById('passwordInput');
        const togglePassword = document.getElementById('togglePassword');

        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.classList.remove('fa-eye');
            togglePassword.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = "password";
            togglePassword.classList.remove('fa-eye-slash');
            togglePassword.classList.add('fa-eye');
        }
    }

    function verifyPassword() {
        const enteredPassword = document.getElementById('passwordInput').value;
        const correctPassword = 'Thankyou304';

        if (enteredPassword === correctPassword) {
            document.getElementById('passwordSection').style.display = 'none';
            document.getElementById('protectedContent').style.display = 'block';
            // Redirect after 3 seconds
            setTimeout(() => {
                window.location.href = 'https://sanket3yoprogrammer.github.io/Class10his2/';
            }, 3000);
        } else {
            const errorMsg = document.getElementById('errorMsg');
            errorMsg.style.display = 'block';
            errorMsg.style.animation = 'shake 0.5s ease forwards';
        }
    }
