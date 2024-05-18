function filterCards() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const cardText = card.getAttribute('data-name');
        const cardTitle = card.querySelector('h2');
        const regex = new RegExp(`(${searchInput})`, 'gi');

        if (cardText.includes(searchInput)) {
            card.style.display = '';
            cardTitle.innerHTML = cardText.replace(regex, '<span class="highlight">$1</span>');
        } else {
            card.style.display = 'none';
        }
    });
}
