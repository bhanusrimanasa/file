 Form handling
function toggleForm(type) {
    const loginContainer = document.getElementById('loginContainer');
    const signupContainer = document.getElementById('signupContainer');
    
    if (type === 'signup') {
        loginContainer.style.display = 'none';
        signupContainer.style.display = 'flex';
    } else {
        loginContainer.style.display = 'flex';
        signupContainer.style.display = 'none';
    }
}

// Form submissions
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
});

// Logout functionality
function logout() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'flex';
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
}

// Section navigation
function showSection(section) {
    document.getElementById('dashboard').style.display = 'none
Last edited 3 minutes ago


