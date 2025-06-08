import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

export const addBanner = async (formData) => {
    console.log("FormData in service:", formData);
    try {
        const response = await axios.post(API_URL + 'banner/add-banner', formData, {
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

// getAllBanner

export const getAllBanner = async () => {
    try {
        const response = await axios.get(API_URL + 'banner/get-all-banner', {
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        });

        return response.data;

    } catch (error) {
        console.log("Error in product service:", error);
        throw error;
    }
};

// getBannerbyId
export const getBannerbyId = async (bannerId) => {
    try {
        const response = await axios.put(API_URL + 'banner/get-banner', { id: bannerId },
            {
                headers: {
                    'Authorization': localStorage.getItem('token'),
                },
            }
        );
        return response.data;

    } catch (error) {
        console.log("Error in product service:", error);
        throw error;
    }
};

// updateBanner

export const updateBanner = async (formData) => {
    try {
        const response = await axios.put(API_URL + 'banner/update-banner', formData, {
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
}


// deleteBanner
export const deleteBanner = async (bannerId) => {
    try {
        const response = await axios.delete(API_URL + 'banner/delete-banner', {
            data: { id: bannerId },
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        });

        return response.data;

    } catch (error) {
        console.log("Error in product service:", error);
        throw error;
    }
};