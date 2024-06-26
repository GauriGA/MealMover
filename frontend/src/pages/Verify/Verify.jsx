import React, { useContext, useEffect } from 'react';
import './Verify.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {
    const [searchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const { url } = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = async () => {
        try {
            // Ensure the URL ends with a slash if necessary
            const endpoint = url.endsWith('/') ? `${url}api/order/verify` : `${url}/api/order/verify`;

            const response = await axios.post(endpoint, { success, orderId });
            if (response.data.success) {
                navigate("/myorders");
            } else {
                navigate("/");
            }
        } catch (error) {
            console.error("Error verifying payment: ", error.response ? error.response.data : error.message);
            alert("Error verifying payment. Please check the console for more details.");
            navigate("/"); // Navigate to the home page on error
        }
    };

    useEffect(() => {
        verifyPayment();
    }, []); // Empty dependency array to run only once on mount

    return (
        <div className='verify'>
            <div className="spinner">
                {/* You can add a spinner here to indicate loading */}
            </div>
        </div>
    );
};

export default Verify;
