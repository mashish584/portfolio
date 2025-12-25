(function () {
  'use strict';

  // Get current hour
  const currentHour = new Date().getHours();

  // Determine greeting based on time of day
  let greeting;
  let emoji;

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good Morning";
    emoji = "🌅";
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = "Good Afternoon";
    emoji = "☀️";
  } else if (currentHour >= 17 && currentHour < 21) {
    greeting = "Good Evening";
    emoji = "🌆";
  } else {
    greeting = "Good Night";
    emoji = "🌙";
  }

  // Fun console message with styling
  const styles = [
    'font-size: 20px',
    'font-weight: bold',
    'color: #4a90e2',
    'text-shadow: 2px 2px 4px rgba(0,0,0,0.1)',
    'padding: 10px',
    'font-family: "Courier New", monospace'
  ].join(';');

  const message = `%c${emoji} ${greeting}! Welcome to my portfolio! 👋`;

  console.log(message, styles);

  // Additional fun console messages with GitHub link
  console.log('%cCurious about the code? Check out the source! 🚀', 'color: #666; font-size: 12px; font-style: italic;');

  // GitHub repository link (clickable in most modern browsers)
  const githubUrl = 'https://github.com/mashish584/portfolio';
  console.log(`%c🔗 View Source Code: ${githubUrl}`, 'color: #4a90e2; font-size: 13px; font-weight: bold;');

  console.log('%cBuilt with ❤️ by Ashish Mehra', 'color: #999; font-size: 11px;');

  // Easter egg: ASCII art or fun message
  const asciiArt = `
%c
╔═══════════════════════════════════════╗
║   Thanks for checking out my work!    ║
║   Feel free to reach out if you'd     ║
║   like to collaborate or chat! 💬     ║
╚═══════════════════════════════════════╝
  `;

  console.log(asciiArt, 'color: #4a90e2; font-family: monospace;');

  // Theme toggle functionality
  window.toggleTheme = function () {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const isDark = currentTheme === 'dark';

    if (isDark) {
      html.removeAttribute('data-theme');
      console.log(
        '%c☀️ Switched to Light Mode!',
        'color: #ffa500; font-size: 16px; font-weight: bold;'
      );
      console.log('%cThe sun is shining! 🌞', 'color: #666; font-size: 12px;');
      return 'Light mode activated! ☀️';
    } else {
      html.setAttribute('data-theme', 'dark');
      console.log(
        '%c🌙 Switched to Dark Mode!',
        'color: #9b59b6; font-size: 16px; font-weight: bold;'
      );
      console.log('%cTime to code in the dark! 🦉', 'color: #666; font-size: 12px;');
      return 'Dark mode activated! 🌙';
    }
  };

  window.setTheme = function (theme) {
    const html = document.documentElement;
    if (theme === 'dark' || theme === 'light') {
      if (theme === 'dark') {
        html.setAttribute('data-theme', 'dark');
        console.log(
          '%c🌙 Dark Mode Activated!',
          'color: #9b59b6; font-size: 16px; font-weight: bold;'
        );
        return 'Dark mode activated! 🌙';
      } else {
        html.removeAttribute('data-theme');
        console.log(
          '%c☀️ Light Mode Activated!',
          'color: #ffa500; font-size: 16px; font-weight: bold;'
        );
        return 'Light mode activated! ☀️';
      }
    } else {
      console.log(
        '%c⚠️ Invalid theme! Use "dark" or "light"',
        'color: #e74c3c; font-size: 14px; font-weight: bold;'
      );
      console.log('%cExample: setTheme("dark") or setTheme("light")', 'color: #666; font-size: 12px;');
      return 'Invalid theme. Use "dark" or "light"';
    }
  };

  // Display theme toggle instructions
  console.log(
    '%c💡 Pro Tip: Try toggleTheme() or setTheme("dark"/"light") to switch themes!',
    'color: #27ae60; font-size: 13px; font-weight: bold; background: rgba(39, 174, 96, 0.1); padding: 5px; border-radius: 3px;'
  );
})();

