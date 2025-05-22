import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;
// Add Product Service
export const product = async (formData) => {
    try {
        const response = await axios.post(API_URL + 'products/add-product', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': localStorage.getItem('token'),
            },
        });

        return response.data;

    } catch (error) {
        console.log("Error in product service:", error);
        throw error;
    }
};

// Get All Product Service

export const getAllProduct = async () => {
    try {
        const response = await axios.post(API_URL + 'products/get-product', {}, {
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        });
        console.log("Response in getAllProduct service:", response.data);
        return response.data;
    } catch (error) {
        console.log("Error in getAllProduct service:", error);
        throw error;
    }
}

// Get Product By Id

export const fetchProductById = async (productId) => {
    try {
        const response = await axios.put(API_URL + 'products/get-product', { id: productId },
            {
                headers: {
                    'Authorization': localStorage.getItem('token'),
                },
            }
        );
        // console.log("Response in fetchProductById service:", response.data);
        return response.data;
    } catch (error) {
        console.log("Error in fetchProductById service:", error);
        throw error;
    }
}

// Update Product Service
export const updateProduct = async (formData) => {
    console.log("Update product service called");

    try {
        const response = await axios.put(API_URL + 'products/update-product', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': localStorage.getItem('token'),
            },
        });
        console.log("Response in updateProduct service:", response.data);
        return response.data;
    } catch (error) {
        console.log("Error in updateProduct service:", error);
        throw error;
    }
}
