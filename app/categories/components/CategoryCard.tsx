import Link from 'next/link';

interface CategoryCardProps {
  id: number;
  name: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, name }) => {
  return (
    <Link href={`/categories/${id}`} passHref>
      <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      </div>
    </Link>
  );
};

export default CategoryCard;