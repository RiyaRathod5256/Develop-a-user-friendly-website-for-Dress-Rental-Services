document.addEventListener("DOMContentLoaded", function() {
    const dressGrids = document.querySelectorAll('.dress-grid');
    dressGrids.forEach(grid => {
        grid.innerHTML = ''; // Clear previous content
    });

    dresses.forEach(dress => {
        const dressDiv = document.createElement('div');
        dressDiv.classList.add('dress');
        
        dressDiv.innerHTML = `
            <div class="img-w">
                <img src="${dress.image}" alt="${dress.name}" data-id="${dress.id}">
            </div>
            <h3>${dress.name}</h3>
            <p>Price: ${dress.price}</p>
        `;

        dressDiv.addEventListener('click', function() {
            localStorage.setItem('selectedDressId', dress.id);
            window.location.href = 'product.html';
        });

        // Append to relevant category
        if (dress.image.includes('popular')) {
            document.querySelector('#popular .dress-grid').appendChild(dressDiv);
        } else if (dress.image.includes('traditional')) {
            document.querySelector('#traditional .dress-grid').appendChild(dressDiv);
        } else if (dress.image.includes('western')) {
            document.querySelector('#western .dress-grid').appendChild(dressDiv);
        } else if (dress.image.includes('partywear')) {
            document.querySelector('#partywear .dress-grid').appendChild(dressDiv);
        } else if (dress.image.includes('casualwear')) {
            document.querySelector('#casualwear .dress-grid').appendChild(dressDiv);
        } else if (dress.image.includes('officewear')) {
            document.querySelector('#officewear .dress-grid').appendChild(dressDiv);
        } else if (dress.image.includes('ethnicwear')) {
            document.querySelector('#ethnicwear .dress-grid').appendChild(dressDiv);
        } else if (dress.image.includes('sportswear')) {
            document.querySelector('#sportswear .dress-grid').appendChild(dressDiv);
        }
    });

    console.log('Dresses Rendered:', dressGrids);
});

