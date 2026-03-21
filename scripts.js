document.addEventListener('DOMContentLoaded', function() {
  
  // Znajdź przycisk "Przejdź dalej"
  const nextButton = document.querySelector('.next-btn');
  
  // Znajdź przyciski społecznościowe (Discord i TikTok)
  const socialButtons = document.querySelectorAll('.social-btn');
  
  // Obsługa przycisku "Przejdź dalej"
  if (nextButton) {
    nextButton.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Pobierz wybrany język
      let selectedLanguage = '';
      const languageOptions = document.querySelectorAll('.section:first-of-type .options button, .section:first-child .options button');
      languageOptions.forEach(btn => {
        if (btn.classList.contains('active')) {
          selectedLanguage = btn.textContent;
        }
      });
      
      // Pobierz wybraną walutę
      let selectedCurrency = '';
      const currencyOptions = document.querySelectorAll('.section:last-of-type .options button, .section:last-child .options button');
      currencyOptions.forEach(btn => {
        if (btn.classList.contains('active')) {
          selectedCurrency = btn.textContent;
        }
      });
      
      // Zapisz wybory
      if (selectedLanguage) {
        localStorage.setItem('userLanguage', selectedLanguage);
      }
      if (selectedCurrency) {
        localStorage.setItem('userCurrency', selectedCurrency);
      }
      
      // Przekieruj do home.html
      window.location.href = 'home.html';
    });
  }
  
  // Obsługa przycisków społecznościowych
  if (socialButtons.length >= 2) {
    // Discord (pierwszy przycisk)
    const discordBtn = socialButtons[0];
    discordBtn.addEventListener('click', function(e) {
      e.preventDefault();
      // Zmień ten link na swój link Discord
      window.open('https://discord.gg/masterreps', '_blank');
    });
    
    // TikTok (drugi przycisk)
    const tiktokBtn = socialButtons[1];
    tiktokBtn.addEventListener('click', function(e) {
      e.preventDefault();
      // Zmień ten link na swój link TikTok
      window.open('https://www.tiktok.com/@masterreps', '_blank');
    });
  }
  
  // Jeśli przyciski języka/valuty nie mają klasy active, ustaw domyślne
  const defaultLanguageBtn = document.querySelector('.section:first-of-type .options button:first-child, .section:first-child .options button:first-child');
  const defaultCurrencyBtn = document.querySelector('.section:last-of-type .options button:first-child, .section:last-child .options button:first-child');
  
  if (defaultLanguageBtn && !defaultLanguageBtn.classList.contains('active')) {
    defaultLanguageBtn.classList.add('active');
  }
  if (defaultCurrencyBtn && !defaultCurrencyBtn.classList.contains('active')) {
    defaultCurrencyBtn.classList.add('active');
  }
  
  // Obsługa kliknięcia na przyciski języka i waluty (żeby zmieniały active)
  const allOptionButtons = document.querySelectorAll('.options button');
  allOptionButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Znajdź rodzica .options i usuń active z wszystkich buttonów w tej grupie
      const parentOptions = this.closest('.options');
      if (parentOptions) {
        const buttonsInGroup = parentOptions.querySelectorAll('button');
        buttonsInGroup.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });
  
  console.log('Strona działa poprawnie!');
});
