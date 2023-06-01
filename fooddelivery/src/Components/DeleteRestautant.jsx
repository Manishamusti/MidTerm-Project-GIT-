import { useState } from "react";
import axios from "axios";
import backgroundImage from '../Components/240_F_247848348_c9xNhBpQ2aAS4UuSkz52n3BaeY6bXhmz.jpg'
import { Link } from "react-router-dom";
function DeleteRestaurant() {
  const [restaurantId, setRestaurantId] = useState("");

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/deleterestaurant/${restaurantId}`);
      alert("Restaurant deleted successfully");
      // Perform any additional actions after successful deletion
    } catch (error) {
      console.error(error);
      // Handle error scenarios
    }
  };

  return (
    <div className='container ' style={{ backgroundImage: `url(${backgroundImage})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    //minWidth:'100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>

      
      <div>
        <table>
          <tbody>
            <tr>
              <th> <b><h1 className="text-dark">Delete Restaurant</h1></b></th>
              <br></br>

            </tr>

            <br></br>
            <tr>
              
              <th >
              <input
          type="text"
          value={restaurantId}
          placeholder="Enter Restaurant ID"
          onChange={(event) => setRestaurantId(event.target.value)}
        />

<br></br><br></br>
<br></br>
              </th>
            </tr>
            <tr>
            <Link to="/adminhome" > <button onClick={handleDelete} className="className='form-control btn btn-danger rounded submit px-3  text-white'" >Delete</button></Link>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DeleteRestaurant;
