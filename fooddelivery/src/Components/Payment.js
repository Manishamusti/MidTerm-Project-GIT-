import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import image from '../Components/istockphoto-1330622188-612x612.jpg';

const PaymentPage = () => {
  const { items, cartTotal } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    // Check if payment method and delivery address are filled
    if (paymentMethod && deliveryAddress) {
      setOrderPlaced(true);
    } else {
      alert('Please fill in the payment method and delivery address.');
    }
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        paddingTop: '20px',
      }}
    >
      <div className="header" style={{ backgroundColor: 'yellow', padding: '10px' }}>
        <h1 className="text-center">Payment Details</h1>
      </div>
      <br />
      {items.length > 0 ? (
        <div>
          {items.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="card-body">
                <h3 className="card-title">{item.restaurant_name}</h3>
                <h6 className="card-text">₹{item.price}</h6>
                <p className="card-text">{item.description}</p>
                <p className="card-text">Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
          <div className="mb-3">
            <br />
            <h2>Total: ₹{cartTotal}</h2>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}

      <div className="mb-3">
        <label htmlFor="payment-method" className="form-label">
          Payment Method:
        </label>
        <select
          id="payment-method"
          className="form-select"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="">Select Payment Method</option>
          <br />
          <option value="UPI">UPI</option>
          <option value="Net Banking">Net Banking</option>
          <option value="Cash on Delivery">Cash on Delivery</option>
        </select>
      </div>
      <div>
        <label htmlFor="delivery-address">Delivery Address:</label>
        <input
          type="text"
          id="delivery-address"
          className="form-control"
          value={deliveryAddress}
          onChange={(e) => setDeliveryAddress(e.target.value)}
        />
      </div>
      <br />

      <button onClick={handlePlaceOrder} className="btn btn-dark">
        Place Order
      </button>
      <br />
      <br />
      {orderPlaced && <h3 className="success-message">Order placed successfully!</h3>}
      <div>
        <Link to="/">
          <b>
            <h3 style={{ marginTop: '10px', marginLeft: '1100px' }}>
              <button className="btn btn-danger">Logout</button>
            </h3>
          </b>
        </Link>
      </div>
    </div>
  );
};

export default PaymentPage;
