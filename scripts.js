document.addEventListener('DOMContentLoaded', () => {
    const gameList = document.getElementById('game-list');
    const games = [
        {
            name: 'Pac-Man',
            description: 'Classic arcade game.',
            imageUrl: 'img/pacman.png',
            price: '$19.99'
        },
        {
            name: 'Space Invaders',
            description: 'Defend against alien invaders.',
            imageUrl: 'img/space-invaders.jpg',
            price: '$14.99'
        },
        {
            name: 'Donkey Kong',
            description: 'Help Mario save the princess.',
            imageUrl: 'img/donkey-kong.jpg',
            price: '$24.99'
        },
        {
            name: 'Super Mario Bros',
            description: 'Join Mario on a classic adventure.',
            imageUrl: 'img/super-mario.jpg',
            price: '$29.99'
        },
        {
            name: 'Tetris',
            description: 'The classic puzzle game.',
            imageUrl: 'img/tetris.png',
            price: '$9.99'
        },
        {
            name: 'Street Fighter II',
            description: 'The ultimate fighting game.',
            imageUrl: 'img/street-fighter.jpg',
            price: '$19.99'
        },
        {
            name: 'Galactic Quest: The Lost Stars',
            description: 'Recover the lost stars of the galaxy.',
            imageUrl: 'img/galactic-quest.jpg',
            price: '$21.99'
        },
        {
            name: 'X-Men: Mutant Apocalypse',
            description: 'Join the X-Men in their battle against evil mutants.',
            imageUrl: 'img/x-men-mutant-apocalypse.jpg',
            price: '$22.99'
        }
    ];

    games.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.className = 'game-list-item';
        gameItem.innerHTML = `
            <img src="${game.imageUrl}" alt="${game.name}" style="border-radius:8px;">
            <div class="game-details">
                <h3>${game.name}</h3>
                <p>${game.description}</p>
                <div class="game-price">
                    <span class="price-label"><strong></strong></span>
                    <span class="price-value">${game.price}</span>
                </div>
                <button class="buy-now">BUY</button>
            </div>
        `;
        gameList.appendChild(gameItem);

        // Add event listener to the buy button
        gameItem.querySelector('.buy-now').addEventListener('click', () => {
            addToCart(game);
        });
    });

    function addToCart(game) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(game);
        localStorage.setItem('cart', JSON.stringify(cart));

        const alertBox = document.getElementById('custom-alert');
        alertBox.textContent = `${game.name} added to your cart.`;
        alertBox.classList.add('show');

        setTimeout(() => {
            alertBox.classList.remove('show');
        }, 3000); // Alert disappears after 3 seconds
    }

    function toggleDropdown(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const dropdownContent = event.target.nextElementSibling;
        if (window.innerWidth > 768) { // Check if screen width is greater than 768px
            dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
        } else {
            // Toggle dropdown content for mobile
            dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
        }
    }

    function toggleMenu() {
        if (window.innerWidth > 768) { // Toggle menu only when screen width is greater than 768px
            const navLinks = document.getElementById('nav-links');
            navLinks.style.display = navLinks.style.display === "block" ? "none" : "block";
        }
    }

    // Slideshow functionality
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slides img');
    const totalSlides = slides.length;

    function showSlide(index) {
        const slidesContainer = document.querySelector('.slides');
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});
