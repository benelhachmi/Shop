import React , {useEffect}from "react";
import { useSelector , useDispatch } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./product/product";

const Accueil = () => {

    const product = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProduct = async () => {
        const response = await axios 
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
            console.log("Err",err);
        });
        dispatch(setProducts(response.data));
    }
    useEffect(() => {
        fetchProduct();
    },[]);
    
    return (
        <div className="ui grid container">
           <ProductComponent/>
        </div>
    )

}
export default Accueil;