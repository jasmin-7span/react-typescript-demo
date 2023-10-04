import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Product } from "../types";
import { productActions } from "../store/product";
import { useNavigate } from "react-router-dom";

export default function home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productList: Product[] = useSelector(
    (state: any) => state?.product?.productList
  );

  const removeProduct = (id: number) => {
    dispatch(
      productActions.removeProduct({
        id: id,
      })
    );
  };

  const handleEdit = (id: number) => {
    console.log("id", id);
    navigate(`edit/${id}`);
  };

  return (
    <div className="container mx-auto px-10">
      <h3 className="mt-4 font-medium">Product List</h3>
      <table className="mt-4 border table-fixed border-spacing-2 border-collapse border-slate-500 w-full">
        <thead>
          <tr>
            <th className="border border-slate-600">Product Name</th>
            <th className="border border-slate-600">Brand</th>
            <th className="border border-slate-600">Category</th>
            <th className="border border-slate-600">Price</th>
            <th className="border border-slate-600">Action</th>
          </tr>
        </thead>
        <tbody>
          {productList?.map((item, index) => {
            return (
              <tr key={index}>
                <td className="border border-slate-600">{item.product_name}</td>
                <td className="border border-slate-600">{item.brand}</td>
                <td className="border border-slate-600">{item.category}</td>
                <td className="border border-slate-600">{item.price}</td>
                <td className="border border-slate-600 py-2 text-center">
                  <button
                    className="text-white bg-blue-500 px-4 py-2 rounded"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-white bg-red-500 px-4 py-2 rounded ml-2"
                    onClick={() => removeProduct(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
