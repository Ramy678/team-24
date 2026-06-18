async function loadRecommendations() {
    const spinner = document.getElementById('loading-spinner');
    const container = document.getElementById('recommendations-container');
    const error = document.getElementById('error-message');
    const noRecs = document.getElementById('no-recommendations');

    spinner.style.display = 'block';
    container.style.display = 'none';
    error.style.display = 'none';
    noRecs.style.display = 'none';

    try {
        const data = getMockData();
        await sleep(800);
        spinner.style.display = 'none';

        if (!data.recommendations || data.recommendations.length === 0) {
            noRecs.style.display = 'block';
            return;
        }

        container.style.display = 'block';
        renderDishes(data.recommendations);

    } catch (err) {
        console.error('Error loading the recommendations:', err);
        spinner.style.display = 'none';
        error.style.display = 'block';
    }
}

function getMockData() {
    return {
        recommendations: [
            {
                id: 1,
                name: 'Chicken Soup with Homemade Noodles',
                price: 350,
                description: 'Rich chicken broth with homemade noodles and fresh herbs',
                ingredients: ['Chicken', 'Noodles', 'Carrots', 'Onion', 'Herbs', 'Celery'],
                reason: 'Within your budget • No allergens'
            },
            {
                id: 2,
                name: 'Greek Salad with Feta Cheese',
                price: 420,
                description: 'Fresh vegetables with olive oil, oregano and feta cheese',
                ingredients: ['Tomatoes', 'Cucumbers', 'Bell Pepper', 'Red Onion', 'Feta', 'Olives', 'Oregano'],
                reason: 'Within your budget • Vegetarian'
            },
            {
                id: 3,
                name: 'Grilled Salmon Steak with Vegetables',
                price: 890,
                description: 'Tender salmon steak with grilled vegetables and lemon juice',
                ingredients: ['Salmon', 'Zucchini', 'Eggplant', 'Bell Pepper', 'Lemon', 'Rosemary'],
                reason: 'Popular dish • Chef\'s recommendation'
            }
        ]
    };
}

function renderDishes(dishes) {
    const grid = document.getElementById('dishes-grid');
    grid.innerHTML = '';

    dishes.forEach(dish => {
        const card = document.createElement('div');
        card.className = 'dish-card';

        card.innerHTML = `
            <div class="card-content">
                <h3>${dish.name}</h3>
                <div class="price">${dish.price} $</div>
                <div class="description">${dish.description}</div>
                ${dish.ingredients ? `<div class="ingredients"> ${dish.ingredients.join(' • ')}</div>` : ''}
                ${dish.reason ? `<div class="reason"> ${dish.reason}</div>` : ''}
            </div>
        `;

        grid.appendChild(card);
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener('DOMContentLoaded', loadRecommendations);