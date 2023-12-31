import { addProduct } from "../../actions/productAction";

const addProductData = (product) => {
    return async (dispatch, getState) => {
        const res = await fetch('https://shoptech-server.vercel.app/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        const data = await res.json();

        if (data.acknowledged) {
            dispatch(addProduct({
                _id: data.insertedId,
                ...product
            }))
        }
    }
}

export default addProductData;