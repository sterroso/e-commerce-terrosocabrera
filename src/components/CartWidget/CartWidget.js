import './CartWidget.css';
const tabIndex = -1

function CartWidget() {
    return (
        <div id='CartWidget' className='offcanvas offcanvas-end offCartWidget' tabIndex={tabIndex} aria-labelledby="offcanvasLabel">
            <div className='offcanvas-header'>
                <h5 className='offcanvas-title' id='offcanvasLabel'>Carrito de Compras</h5>
                <button type='button' className='btn-close text-reset'data-bs-dismiss='offcanvas' aria-label='Cerrar'></button>
            </div>

            <div className='offcanvas-body'>
                <p>Contenido del carrito.</p>
            </div>
        </div>
    )
}

export default CartWidget;