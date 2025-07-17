document.addEventListener('DOMContentLoaded', function() {
    // Efeito de hover nos botões de link
    const linkButtons = document.querySelectorAll('.link-button');
    
    linkButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.querySelector('i').style.transform = 'translateX(5px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.querySelector('i').style.transform = 'translateX(0)';
        });
    });
    
    // Animação de entrada dos elementos
    const elements = document.querySelectorAll('.profile-card, .links-section, .social-links');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 200 * index);
    });
    
    // Atualizar o ano no footer (caso queira adicionar)
    const year = new Date().getFullYear();
    const footer = document.querySelector('footer');
    if(footer) {
        footer.innerHTML = `&copy; ${year} Jhony Wictor Santos - Todos os direitos reservados`;
    }
});