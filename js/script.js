/**
 * 1. NAVIGATION BAR SCROLL EFFECT
 * Adds a small shadow to the navigation bar when the user scrolls down.
 */
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 20);
});

/**
 * 2. MOBILE MENU TOGGLE
 * Opens and closes the hamburger menu on small phone screens.
 */
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

/**
 * 3. SCROLL REVEAL ANIMATION
 * Detects when an element scrolls into the screen and fades it in.
 */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/**
 * 4. FAQ TOGGLE
 * Expands and collapses the answers in the FAQ section.
 */
function toggleFaq(btn) {
  btn.closest('.faq-item').classList.toggle('open');
}

/**
 * 5. APP SCREENSHOT VIEWER
 * Replaced fake HTML mockups with actual image files.
 * Make sure your file names (home.png, entry.png, etc.) match exactly!
 */
const screenData = {
  home: {
    label: 'Home Screen',
    screens: [{
      label: 'Dashboard',
      html: `<img src="images/home.png" alt="Home Screen" style="width: 100%; height: 100%; object-fit: cover;">`
    }]
  },
  entry: {
    label: 'Daily Entry Screen',
    screens: [{
      label: 'Entry Form',
      html: `<img src="images/entry.png" alt="Daily Entry Screen" style="width: 100%; height: 100%; object-fit: cover;">`
    }]
  },
  stock: {
    label: 'Stock Screen',
    screens: [{
      label: 'Current Balance',
      html: `<img src="images/stock.png" alt="Stock Screen" style="width: 100%; height: 100%; object-fit: cover;">`
    }]
  },
  report: {
    label: 'Monthly Report',
    screens: [{
      label: 'Monthly Summary',
      html: `<img src="images/report.png" alt="Report Screen" style="width: 100%; height: 100%; object-fit: cover;">`
    }]
  },
  settings: {
    label: 'Settings Screen',
    screens: [{
      label: 'Settings',
      html: `<img src="images/settings.png" alt="Settings Screen" style="width: 100%; height: 100%; object-fit: cover;">`
    }]
  }
};

/**
 * 6. SHOW SCREEN FUNCTION
 * Switches the active tab and renders the correct screen layout dynamically.
 */
function showScreen(key) {
  document.querySelectorAll('.screen-tab').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');

  const data = screenData[key];
  const display = document.getElementById('screensDisplay');
  display.innerHTML = data.screens.map(s => `
    <div class="screen-card">
      <div class="screen-device">
        <div class="screen-inner">${s.html}</div>
      </div>
      <div class="screen-label">${s.label}</div>
    </div>
  `).join('');
}

// Initialize the screen viewer by showing the home screen on load
showScreen('home');

/**
 * 7. CONTACT FORM SUBMISSION
 * Grabs the data from the inputs and redirects the user to WhatsApp.
 */
function handleFormSubmit() {
  const inputs = document.querySelectorAll('.form-input');
  const name    = inputs[0].value.trim();
  const contact = inputs[1].value.trim();
  const message = inputs[2].value.trim();
  
  if (!message) { 
    alert('Please enter your message.'); 
    return; 
  }
  
  const text = `Hi! I have a question about the ICDS Monthly Report app.%0A%0AName: ${name}%0AContact: ${contact}%0AMessage: ${message}`;
  window.open(`https://wa.me/917407518404?text=${text}`, '_blank');
}
