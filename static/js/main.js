document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const mobileNav = document.getElementById('mobile-nav');
    const mobileToggle = document.getElementById('mobile-toggle');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            mobileNav.classList.toggle('show');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mobileNav && mobileNav.classList.contains('show')) {
                    mobileNav.classList.remove('show');
                }
            }
        });
    });
    
    // Finance Calculator
    const calculatorForm = document.getElementById('calculator-form');
    const calculatorResults = document.getElementById('calculator-results');
    
    if (calculatorForm) {
        calculatorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const budget = parseFloat(document.getElementById('travel-budget').value);
            const days = parseInt(document.getElementById('days').value);
            const destinations = document.getElementById('destinations').value;
            const currency = document.getElementById('currency').value;
            
            // Calculate traditional bank costs
            const bankFees = budget * 0.05; // 5% in fees
            const bankTotal = budget + bankFees;
            
            // Calculate travel card costs
            const cardFees = budget * 0.015; // 1.5% in fees
            const cardTotal = budget + cardFees;
            
            // Calculate savings
            const savings = bankFees - cardFees;
            
            // Update results
            document.getElementById('bank-fees').textContent = bankFees.toFixed(2) + " " + currency;
            document.getElementById('bank-total').textContent = bankTotal.toFixed(2) + " " + currency;
            
            document.getElementById('card-fees').textContent = cardFees.toFixed(2) + " " + currency;
            document.getElementById('card-total').textContent = cardTotal.toFixed(2) + " " + currency;
            
            document.getElementById('total-savings').textContent = savings.toFixed(2) + " " + currency;
            
            // Show results
            calculatorResults.style.display = 'block';
        });
    }
    
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Get the target tab
                const target = button.getAttribute('data-tab');
                
                // Show the target content
                document.getElementById(target).classList.add('active');
            });
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('newsletter-email').value;
            
            // Here you would typically send this to your server
            // For now, we'll just show a success message
            
            const formContainer = document.querySelector('.newsletter-form');
            formContainer.innerHTML = '<p style="color: var(--success);">Obrigado por se inscrever!</p>';
        });
    }
    
    // Lead capture form
    const leadForm = document.getElementById('lead-form');
    
    if (leadForm) {
        leadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('lead-name').value;
            const email = document.getElementById('lead-email').value;
            
            // Here you would typically send this to your server
            // For now, we'll just show a success message
            
            leadForm.innerHTML = '<div style="text-align: center;"><i class="fas fa-check-circle" style="font-size: 48px; color: var(--success); margin-bottom: 20px;"></i><h3>Obrigado, ' + name + '!</h3><p>Seu guia financeiro para viajantes será enviado para ' + email + ' em breve.</p></div>';
        });
    }
});
