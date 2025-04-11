
// Get current language preference from localStorage or default to 'en'
let currentLanguage = localStorage.getItem('language') || 'en';

// Set initial language
document.documentElement.lang = currentLanguage;

// Set initial direction
if (currentLanguage === 'ar') {
    document.body.classList.add('rtl');
} else {
    document.body.classList.remove('rtl');
}

// Update all translated elements on the page
function updatePageTranslations() {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update language switcher button text
    const langSwitcherText = document.querySelector('.language-switcher .lang-text');
    langSwitcherText.textContent = currentLanguage === 'en' ? 'عربي' : 'EN';
}

// Toggle language
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    
    // Save to localStorage
    localStorage.setItem('language', currentLanguage);
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
    
    // Update RTL/LTR
    if (currentLanguage === 'ar') {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }
    
    // Update translations
    updatePageTranslations();
}

// Add event listener to language switcher button
document.querySelector('.language-switcher').addEventListener('click', toggleLanguage);

// Initialize translations on page load
document.addEventListener('DOMContentLoaded', () => {
    updatePageTranslations();
});
