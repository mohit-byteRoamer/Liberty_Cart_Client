import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProductLoad } from "../../redux/action/product_action";
import AddProductForm from "../../components/Form/AddProductForm";

const AddProduct = () => {
   const photo = useSelector((state) => state?.UploadFileReducer?.uploadFile);

   const dispatch = useDispatch();

   useEffect(() => {
      // setClientReady(true);
   }, []);

   const onSubmit = (data) => {
      console.log(data ,"onSubmit");
      
      dispatch(
         createProductLoad({
            name: data.Name,
            price: data.price,
            stock: data.Stock,
            category: data.Category,
            photo: photo,
         })
      );
  
   };

   const productFormProps = {
      Heading: "Product Information",
      Name: "Name",
      Description: "Description",
      Stock: "Stock",
      Price: "Price",
      Category: "Category",
      onSubmit: onSubmit, // Passing the onSubmit function as a prop
   };

   return (
      <>
         {/* Pass the whole object as a single prop */}
         <AddProductForm AddProduct={productFormProps} />
      </>
   );
};

export default AddProduct;
