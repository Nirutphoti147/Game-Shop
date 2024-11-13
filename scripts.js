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
        }
    ];

    games.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.className = 'game-list-item';
        gameItem.innerHTML = `
            <img src="${game.imageUrl}" alt="${game.name}" style="width:100%; height:auto; border-radius:8px; margin-bottom:10px;">
            <h3>${game.name}</h3>
            <p>${game.description}</p>
            <div class="game-price">
                <p class="price-label"><strong>Price</strong></p>
                <p class="price-value">${game.price}</p>
            </div>
            <button class="buy-now">BUY</button>
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
        alert(`${game.name} has been added to your cart.`);
    }
});
