import axios from 'axios'

const EMPLOYEE_BASE_API="http://localhost:5000/api/v1/getAllRestaurant"
class ShowAllRestaurants {
    getAllRestaurants(){
        return axios.get(EMPLOYEE_BASE_API)
    }
}
var showAllRestaurants = new ShowAllRestaurants();
export default showAllRestaurants;