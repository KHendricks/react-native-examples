import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization:
            "Bearer 2V_Ygoa_XTzB8RnVZcJShv_UrqKRy__iCKzTX2z6O7dMKWNEzCeJc0W41pBE5dt9SyJ6SXJ_bJIET2ofYlCkljv1W9gsteUl2VutTMLVpPWKRLPfkTCo7a-uEw9xXnYx"
    }
});
