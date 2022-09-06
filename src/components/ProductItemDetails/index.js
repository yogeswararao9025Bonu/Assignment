import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class ProductItemDetails extends Component {
  state = {productsData: {}, isLoading: true}

  componentDidMount() {
    this.getProductItemData()
  }

  getProductItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image,
      price: data.price,
      description: data.description,
      category: data.category,
      rating: data.rating.rate,
      count: data.rating.count,
    }

    this.setState({productsData: updatedData, isLoading: false})
  }

  renderProductItemDetails = () => {
    const {productsData} = this.state
    const {
      id,
      imageUrl,
      title,
      price,
      description,
      rating,
      count,
    } = productsData

    return (
      <div>
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
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderProductItemDetails()
        )}
      </div>
    )
  }
}

export default ProductItemDetails
