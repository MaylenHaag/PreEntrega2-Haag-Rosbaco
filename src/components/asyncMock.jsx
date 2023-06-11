const products = [
    {
        id: '1',
        name: 'Shampoo Elvive Hidra Hialurónico x 400 ml',
        price: 1000,
        category: 'shampoo',
        img: 'https://farmacityar.vteximg.com.br/arquivos/ids/228352-1000-1000/221679_shampoo-elvive-hidra-hialuronico-x-400-ml_imagen-1.jpg?v=637986815594830000',
        stock: 5,
        descripcion: 'El shampoo Hidra rellenador, con Ácido Hialurónico y efecto Anti-Sal°, recarga la fibra con una hidratación intensa para una transformación instantánea y un cabello suave, ligero y brillante. Elvive Hidra Hialurónico para cabello deshidratado.'
    },
    {
        id: '2',
        name: 'Shampoo Elvive Reparación Total Extreme x 400 ml',
        price: 1000,
        category: 'shampoo',
        img: 'https://farmacityar.vteximg.com.br/arquivos/ids/228448-600-600/143506_shampoo-reparacion-total-extreme-x-400-ml_imagen-1.jpg?v=637987726277500000',
        stock: 6,
        descripcion: '¿Cabello muy dañado? Nuestro Shampoo Reconstructor, con un concentrado reparador con KERATINxs, LAK 1000 y con efecto Anti-Sal°, transforma el cabello muy dañado. Elvive Reparación Total Extreme para cabello muy dañado.'
    },
    {
        id: '3',
        name: 'Shampoo Dove Regeneración Extrema x 200 ml',
        price: 700,
        category: 'shampoo',
        img: 'https://farmacityar.vteximg.com.br/arquivos/ids/239142-600-600/215075_shampoo-dove-regeneracion-extrema-x-200-ml___imagen-1.jpg?v=638149981472000000',
        stock: 4,
        descripcion: 'Descubre el shampoo Dove Regeneración Extrema un concentrado poderoso de ingredientes activos regeneradores que nutren profundamente la fibra capilar activando el proceso de regeneración interna del cabello.'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}