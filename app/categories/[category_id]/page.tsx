import { notFound } from 'next/navigation';
import groceryData from '@/dummyData';
import SubcategoryCard from './components/SubcategoryCard';

interface Params {
  params: {
    category_id: string;
  };
}

const SubcategoryPage = ({ params }: Params) => {
  const categoryId = parseInt(params.category_id, 10);
  const category = groceryData.find((cat) => cat.id === categoryId);

  if (!category) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">{category.name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.subcategories.map((subcategory) => (
          <SubcategoryCard
            key={subcategory.id}
            id={subcategory.id}
            name={subcategory.name}
            categoryId={category.id}
          />
        ))}
      </div>
    </div>
  );
};

export default SubcategoryPage;