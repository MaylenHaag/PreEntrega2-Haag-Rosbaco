const Item = ({id, name, img, price, stock}) => {

    return (
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
                    <button href="#" class="btn btn-primary">Ver detalle</button>
                </footer>
            </div>        
        </article>
        </div>
        
    )
}

export default Item