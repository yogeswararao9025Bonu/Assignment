import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Products from './components/Products'
import ProductList from './components/ProductList'
import Home from './components/Home'
import Cart from './components/Cart'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <Route path="products/:id" component={ProductList} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
