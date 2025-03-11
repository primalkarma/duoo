
import CategoryCard from './components/CategoryCard';
import groceryData from '@/dummyData';

interface Category {
  id: number;
  name: string;
}


const CategoriesPage = async () => {
    // Extract only the necessary data for the categories page
    const categories: Category[] = groceryData.map(({ id, name }) => ({ id, name }));
  
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Categories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} id={category.id} name={category.name} />
          ))}
        </div>
      </div>
    );
  };
  
  export default CategoriesPage;