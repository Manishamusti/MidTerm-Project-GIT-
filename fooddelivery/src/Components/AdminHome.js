import React, { Component } from 'react';
import showAllRestaurants from '../Services/HomeServiceComponent';
import backgroundImage from '../Components/istockphoto-1269552168-612x612.jpg'
import { Link } from 'react-router-dom';

class ListRestautantComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listRestaurant: []
    };
  }

  componentDidMount() {
    showAllRestaurants.getAllRestaurants().then(res => {
      this.setState({ listRestaurant: res.data });
    });
  }

  render() {
    return (
      <div className="container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div>
          <br></br>
          <h1 className="text-center text-danger"><b>Admin</b></h1>
        </div>
        <div>
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <th colSpan={5}></th>
                <th>
                  <Link to="/admin">
                    <button className="btn btn-dark" ><b>Logout</b></button>
                  </Link>
                </th>
              </tr>
              <tr>
                <th colSpan={6}>
                  <h1 className="text-center text-dark"><b>Restaurant List</b></h1>
                </th>
              </tr>
              <tr>
                <th colSpan={6} align="center">
                  <Link to="/addrestaurant">
                    <button className="btn btn-primary"><b>Add Restaurant</b></button>
                  </Link>
                </th>
              </tr>
              <tr className="table-dark">
                <th><b>Restaurant ID</b></th>
                <th><b>Restaurant Name</b></th>
                <th><b>Items</b></th>
                <th><b>Price</b></th>
                <th><b>Phone</b></th>
                <th><b>Location</b></th>
              </tr>
            </thead>
            <tbody>
              {this.state.listRestaurant.map(restaurants => (
                <tr key={restaurants.restaurant_id}>
                  <td>{restaurants.restaurant_id}</td>
                  <td>{restaurants.restaurant_name}</td>
                  <td>{restaurants.cuisine_type}</td>
                  <td>{restaurants.price}</td>
                  <td>{restaurants.phone}</td>
                  <td>{restaurants.location}</td>
                </tr>
              ))}
              <tr>
                <th colSpan={4}></th>
                <th align="center">
                  <Link to="/updaterestaurant">
                    <button className="btn btn-dark"><b>Update Restaurants</b></button>
                  </Link>
                </th>
                <th align="center">
                  <Link to="/deleterestaurant">
                    <button className="btn btn-danger"><b>Delete Restaurant</b></button>
                  </Link>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListRestautantComponent;
