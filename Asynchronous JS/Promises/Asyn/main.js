const listing = document.querySelector('ul');
async function fetchProduct() {
    try {
        const response = await fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
        );

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        for (const dat of data) {
            const list = document.createElement('li');
            list.textContent = dat.name;
            listing.appendChild(list);
        }
    } catch(error) {
       console.error(`couldn't get product: ${error}`) 
    }
}

fetchProduct();