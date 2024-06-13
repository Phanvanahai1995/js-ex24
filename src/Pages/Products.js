export const productsDetail = [
  {
    id: 1,
    name: "Sản phẩm 1",
  },
  {
    id: 2,
    name: "Sản phẩm 2",
  },
  {
    id: 3,
    name: "Sản phẩm 3",
  },
];

function stringToPath(string) {
  string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return string.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

productsDetail.forEach((product) => {
  const path = stringToPath(product.name);
  product.path = path;
});

const renderCourse = (products) => {
  return products
    .map((product, index) => {
      return `<li><a href="/products/${
        product.path
      }" class="text-2xl bg-gray-500 text-white px-3 py-1.5 flex justify-center mt-4 w-72" data-navigo>${
        index + 1
      }. ${product.name}</a></li>`;
    })
    .join("");
};
export const Products = () => {
  return `<ul class="flex flex-col">
            <h1 class="text-3xl font-bold mt-3">Danh sách sản phẩm</h1>
            ${renderCourse(productsDetail)}
        </ul> `;
};
