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

        const alertBox = document.getElementById('custom-alert');
        alertBox.textContent = `${game.name} added to your cart.`;
        alertBox.classList.add('show');

        setTimeout(() => {
            alertBox.classList.remove('show');
        }, 3000); // Alert disappears after 3 seconds
    }

    // Function to remove the last item from the cart
    function removeLastItem() {
        if (cart.length > 0) {
            cart.pop();
            localStorage.setItem('cart', JSON.stringify(cart));
            console.log('Last item removed. Current cart:', cart);
        } else {
            console.log('Cart is already empty.');
        }
    }

    // Example usage
    removeLastItem(); // ลบรายการสุดท้าย

    function toggleDropdown(event) {
        event.preventDefault(); // ป้องกันพฤติกรรมเริ่มต้นของ anchor
        const dropdownContent = event.target.nextElementSibling;
        if (window.innerWidth > 768) { // ตรวจสอบว่าความกว้���งของหน้าจอมากกว่า 768px หรือไม่
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        } else {
            // สำหรับมือถือ toggle dropdown content
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        }
    }

    function toggleMenu() {
        if (window.innerWidth > 768) { // toggle เมนูเฉพาะเมื่อความกว้างของหน้าจอมากกว่า 768px
            const navLinks = document.getElementById('nav-links');
            if (navLinks.style.display === "block") {
                navLinks.style.display = "none";
            } else {
                navLinks.style.display = "block";
            }
        }
    }

    document.addEventListener("click", function(event) {
        if (!event.target.matches('.dropbtn')) {
            const dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(dropdown => {
                dropdown.style.display = "none";
            });
        }
    });

});
