import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
// import Cookies from 'js-cookie'

import ProductItem from '../ProductItem'
import ProductHeader from '../ProductHeader'

import './index.css'

const sortbyOptions = [
  {
    optionId: 'PRICE_HIGH',
    displayText: 'Price (High-Low)',
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'Price (Low-High)',
  },
]

class ProductList extends Component {
  state = {
    isLoading: false,
    productsData: [],
    activeOptionId: sortbyOptions[0].optionId,
  }

  componentDidMount() {
    this.getProductsData()
  }

  getProductsData = async () => {
    this.setState({
      isLoading: true,
    })

    // const jwtToken = Cookies.get('jwt_token')
    const {activeOptionId} = this.state
    const apiUrl = `https://fakestoreapi.com/products?sort_by=${activeOptionId}`
    // const options = {
    //   headers: {
    //     Authorization: `Bearer ${jwtToken}`,
    //   },
    //   method: 'GET',
    // }

    const response = await fetch(apiUrl)
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image,
      price: eachItem.price,
      description: eachItem.description,
      category: eachItem.category,
      rating: eachItem.rating.rate,
      count: eachItem.rating.count,
    }))

    this.setState({isLoading: false, productsData: formattedData})
  }

  updateActiveOptionId = activeOptionId => {
    this.setState({activeOptionId}, this.getProductsData)
  }

  renderProductsList = () => {
    const {productsData, activeOptionId} = this.state
    return (
      <>
        <ProductHeader
          activeOptionId={activeOptionId}
          sortbyOptions={sortbyOptions}
          updateActiveOptionId={this.updateActiveOptionId}
        />
        <ul className="blogs-list">
          {productsData.map(eachProductItem => (
            <ProductItem
              key={eachProductItem.id}
              productItemDetails={eachProductItem}
            />
          ))}
        </ul>
      </>
    )
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return isLoading ? this.renderLoader() : this.renderProductsList()
  }
}

export default ProductList
