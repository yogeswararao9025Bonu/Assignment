import {Link} from 'react-router-dom'

import './index.css'

const ProductItem = props => {
  const {productItemDetails} = props
  const {
    id,
    imageUrl,
    title,
    price,
    description,
    rating,
    count,
  } = productItemDetails

  return (
    <li className="item">
      <Link to={`/products/${id}`} className="item-link">
        <img className="item-image" src={imageUrl} alt={`item${id}`} />
        <div className="item-container">
          <h1 className="item-title">{title}</h1>
          <p className="price">${price}</p>
          <div className="rate">
            <p className="rating">Rating: {rating}</p>
            <p className="count">{count} Reviews</p>
          </div>
        </div>
        <div className="item-info">
          <p className="description">Description: {description}</p>
        </div>
      </Link>
    </li>
  )
}

export default ProductItem
