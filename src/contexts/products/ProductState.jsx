import { useReducer } from "react";
import ProductContext from "./ProductContext";
import ProductReducer from "./ProductReducer";
import axiosClient from "../../config/axios";

const ProductState = (props) => {
    const initialState = {
        products: []
    }

    const [ globalState, dispatch ] = useReducer(ProductReducer, initialState);

    const getProducts = async () => {
        try {
            const res = await axiosClient.get("/product/get-products");
            dispatch({
                type: "OBTENER-PRODUCTOS",
                payload: res.data.products
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ProductContext.Provider value={{
            products: globalState.products,
            getProducts
            }}>
            { props.children }
        </ProductContext.Provider>
    )
}

export default ProductState;