import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    return(
        <div className="cartas">
            <article class="card">
            <picture>
                <img src={img} class="imgPeque" alt={name}/>
            </picture>
            <div class="card-body">
                <header>
                    <h5 class="card-title">
                        {name}
                    </h5>
                </header>
                
                <section class="card-text">
                    <p>
                        Precio :${price}
                    </p>
                    <p>
                        Stock disponible: {stock}
                    </p>
                </section>
                <footer>
                    <ItemCount initial={0} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada' )}/>
                </footer>
            </div>        
        </article>
        </div>
    )
}

export default ItemDetail