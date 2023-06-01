import React, { useEffect } from 'react';
import showAllRestaurants from '../Services/HomeServiceComponent';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import img from './images/adminbg.jpg';

const Try = () => {
  const { addItem } = useCart();
  const [listRestaurant, setListRestaurant] = React.useState([]);

  useEffect(() => {
    showAllRestaurants
      .getAllRestaurants()
      .then((res) => {
        setListRestaurant(res.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleAddToCart = (restaurant) => {
    alert('Added to cart !!');
    const { restaurant_id, ...rest } = restaurant;
    addItem({ id: restaurant_id, ...rest });
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
      }}
    >
      <br />
      <br />
      <nav className="navbar navbar-expand-lg navbar-light bg-light text-white">
        <a className="navbar-brand" href="#"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="/">
                Logout
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="/cart">
                View cart
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div>
        <h1 className="text-center text-dark text-italic">
          <a className="navbar-brand" href="#">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png"
              className="food-munch-logo"
              alt="Food Munch"
            />
            <br />
          </a>
          <b>Explore Menu</b>
          <br />
        </h1>
      </div>

      <br />
      <br />
      <div className="row">
        {listRestaurant.map((restaurant) => (
          <div className="col-lg-3 col-md-6 mb-4" key={restaurant.restaurant_id}>
            <div className="card p-0 overfloe-hidden h-100 shadow">
              <img
                src={restaurant.images}
                className="card-img-top image-fluid restaurant-image"
                alt={restaurant.restaurant_name}
              />
              <div className="card-body d-flex flex-column">
                <h4 className="card-text">{restaurant.restaurant_name}</h4>
                <h5 className="card-title">Item: {restaurant.cuisine_type}</h5>
                <h5 className="card-title">Price: ₹{restaurant.price}</h5>
                <h5 className="card-title">Location: {restaurant.location}</h5>
                <button
                  className="btn btn-dark mt-auto"
                  onClick={() => handleAddToCart(restaurant)}
                >
                  <b>Add to Cart</b>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Link to="/cart">
          <b>
            <h3 style={{ marginTop: '10px', marginLeft: '1100px' }}>
              <button className="btn btn-dark">View Cart</button>
            </h3>
          </b>
        </Link>
      </div>
    </div>
  );
};

export default Try;
