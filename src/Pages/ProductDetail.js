import { productsDetail } from "./Products";
export const ProductDetail = ({ data }) => {
  const product = productsDetail.find((product) => product.path === data.id);
  return `
       <div>
          <h2 class="font-bold text-2xl"> Chi tiết ${product.name.toLowerCase()}</h2>
          <a href="/products" data-navigo class="bg-gray-400 rounded-sm px-3 py-1 text-sm inline-block mt-3 text-white">Back</a>
       </div>
        `;
};
