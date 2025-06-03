document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const submitBtn = document.getElementById('submitBtn');
    const loginError = document.getElementById('loginError');
    const errorMessage = document.getElementById('errorMessage');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
  
    let showPassword = false;
  
    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
      showPassword = !showPassword;
      passwordInput.type = showPassword ? 'text' : 'password';
      togglePassword.innerHTML = showPassword 
        ? '<i class="fas fa-eye-slash text-base-content/50 hover:text-base-content transition-colors"></i>'
        : '<i class="fas fa-eye text-base-content/50 hover:text-base-content transition-colors"></i>';
    });
  
    // Form submission
    loginForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      // Reset errors
      loginError.classList.add('hidden');
      emailError.classList.add('hidden');
      passwordError.classList.add('hidden');
      
      // Validate email
      const email = emailInput.value.trim();
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = 'Please enter a valid email address';
        emailError.classList.remove('hidden');
        emailInput.classList.add('input-error');
        return;
      } else {
        emailInput.classList.remove('input-error');
      }
      
      // Validate password
      const password = passwordInput.value.trim();
      if (!password || password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters';
        passwordError.classList.remove('hidden');
        passwordInput.classList.add('input-error');
        return;
      } else if (password.length > 32) {
        passwordError.textContent = 'Password must be less than 32 characters';
        passwordError.classList.remove('hidden');
        passwordInput.classList.add('input-error');
        return;
      } else {
        passwordInput.classList.remove('input-error');
      }
      
      // Simulate form submission
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <i class="fas fa-circle-notch fa-spin mr-2"></i>
        Signing in...
      `;
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Login data:', { email, password });
        
        // In a real app, you would redirect on success
        // window.location.href = '/dashboard';
        
      } catch (error) {
        errorMessage.textContent = 'Invalid email or password. Please try again.';
        loginError.classList.remove('hidden');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Sign in';
      }
    });
  
    // Add hover effects manually since we can't use Framer Motion directly
    const hoverElements = document.querySelectorAll('.relative');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        el.style.transform = 'scale(1.01)';
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  
    // Submit button hover effect
    submitBtn.addEventListener('mouseenter', () => {
      submitBtn.style.transform = 'scale(1.02)';
    });
    submitBtn.addEventListener('mouseleave', () => {
      submitBtn.style.transform = '';
    });
    submitBtn.addEventListener('mousedown', () => {
      submitBtn.style.transform = 'scale(0.98)';
    });
    submitBtn.addEventListener('mouseup', () => {
      submitBtn.style.transform = 'scale(1.02)';
    });
  });