document.addEventListener('DOMContentLoaded', function() {
    // Manage Classes and Subjects
    const manageClassesSubjectsForm = document.getElementById('manageClassesSubjectsForm');
    if (manageClassesSubjectsForm) {
        manageClassesSubjectsForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const className = document.getElementById('className').value;
            const section = document.getElementById('section').value;
            const academicYear = document.getElementById('academicYear').value;
            console.log('Class added:', { className, section, academicYear });
        });
    }

    // Manage Teacher Accounts
    const manageTeacherAccountsForm = document.getElementById('manageTeacherAccountsForm');
    if (manageTeacherAccountsForm) {
        manageTeacherAccountsForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const teacherUsername = document.getElementById('teacherUsername').value;
            const teacherPassword = document.getElementById('teacherPassword').value;
            const teacherContact = document.getElementById('teacherContact').value;
            console.log('Teacher added:', { teacherUsername, teacherPassword, teacherContact });
        });
    }

    // Assignment of Classes and Subjects
    const assignmentForm = document.getElementById('assignmentForm');
    if (assignmentForm) {
        assignmentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const assignClass = document.getElementById('assignClass').value;
            const assignSubject = document.getElementById('assignSubject').value;
            console.log('Assignment:', { assignClass, assignSubject });
        });
    }

    // Registration Form
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Get form values
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            // Perform basic validation
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            // Additional validation logic can be added here

            // If validation passes, proceed with form submission (e.g., send data to server)
            console.log('Form submitted with data:', {
                username: username,
                email: email,
                password: password
            });

            // You can use fetch or XMLHttpRequest to send form data to a server endpoint
            // Example using fetch:
            /*
            fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // Handle successful registration (e.g., redirect to login page)
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle registration error
            });
            */
        });
    }
});
