
const products = [
    {
        title: 'JBL',
        price: 99.90,
        priceUnity: 'R$'
    },
    {
        title: 'Sony',
        price: 149.90,
        priceUnity: 'R$'
    }
]

function loadProducts(){
    const elementoPai = document.getElementById('product-list-row');

    products.forEach(product => {
        var colDiv = document.createElement('div');
        colDiv.className = 'col-sm-6 col-md-4 col-lg-3 mb-5';

        var productDiv = document.createElement('div');
        productDiv.className = 'product';

        var imageDiv = document.createElement('div');
        imageDiv.className = 'image-product';
        productDiv.appendChild(imageDiv);

        var titleSpan = document.createElement('span');
        titleSpan.className = 'title-product';
        titleSpan.textContent = product.title;
        productDiv.appendChild(titleSpan)

        var priceSpan = document.createElement('span');
        priceSpan.className = 'price-product';
        priceSpan.textContent = `${product.priceUnity} ${product.price}`;
        productDiv.append(priceSpan);

        var buyButton = document.createElement('button');
        buyButton.className = 'buy-button';
        buyButton.textContent = 'Adicionar ao carrinho';
        productDiv.appendChild(buyButton);

        colDiv.appendChild(productDiv);

        elementoPai.appendChild(colDiv);
    })
}

function trocarTema(){
    const body = document.body;

    const isDarkTheme = body.classList.contains('dark-theme');

    body.classList.toggle('dark-theme', !isDarkTheme);
}


loadProducts();