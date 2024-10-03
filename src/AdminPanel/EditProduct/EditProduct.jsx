import { useDispatch, useSelector } from "react-redux";
import { createProductLoad } from "../../redux/action/product_action";
import AddProductForm from "../../components/Form/AddProductForm";
import { useNavigate } from "react-router-dom";

const EditProduct = () => {
   const photo = useSelector((state) => state?.UploadFileReducer?.uploadFile);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const onSubmit = (data) => {
      console.log("DATA", data);

      dispatch(
         createProductLoad({
            apiPayload: {name: data.Name,
            price: data.price,
            stock: data.Stock,
            category: data.Category,
            photo: photo,},
            navigate,
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
         <AddProductForm data={productFormProps} />
      </>
   );
};

export default EditProduct;
