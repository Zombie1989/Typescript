import { NavLink } from 'react-router-dom'

const ProductCard = ({item}:any) => {
    const addToWishList = () => {

    }
    const addToCompare = () => {

    }
    const addToShoppingCart = () => {

    }

  return (
    <div className="col">
        <div className="card">
            <div className="card-img">
                <img src={item.imageName} alt={item.name} />
                <div className="card-menu">
                    <button onClick={addToWishList} className="menu-link"><i className="fa-regular fa-heart"></i></button>
                    <button onClick={addToCompare} className="menu-link"><i className="fa-regular fa-code-compare"></i></button>
                    <button onClick={addToShoppingCart} className="menu-link"><i className="fa-regular fa-bag-shopping"></i></button>
                </div>
                <NavLink to={`/products/${item.name.toLowerCase().replace(/ /gi, "-")}`} className="btn-card">
                    <span className="btn-box-left"></span>
                    Quick View
                    <span className="btn-box-right"></span>
                </NavLink>
            </div>
            <div className="card-body">
                <p className="card-category">{item.category}</p>
                <h5 className="card-title">{item.name}</h5>
                <p className="card-rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                </p>
                <div className="prices">
                    <p className="regular-price">${item.price}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard