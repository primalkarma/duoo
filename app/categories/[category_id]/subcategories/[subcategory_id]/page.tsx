import { notFound } from 'next/navigation';
import groceryData from '@/dummyData';

interface Params {
  params: {
    category_id: string;
    subcategory_id: string;
  };
}

const ProductPage = ({ params }: Params) => {
  const categoryId = parseInt(params.category_id, 10);
  const subcategoryId = parseInt(params.subcategory_id, 10);

  // Find the category and subcategory
  const category = groceryData.find((cat) => cat.id === categoryId);
  if (!category) {
    notFound();
  }

  const subcategory = category.subcategories.find((subcat) => subcat.id === subcategoryId);
  if (!subcategory) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">{subcategory.name}</h1>
      <ul className="space-y-4">
        {subcategory.products.map((product) => (
          <li key={product.id} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-700">${product.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;