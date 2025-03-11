import Link from 'next/link';

interface SubcategoryCardProps {
  id: number;
  name: string;
  categoryId: number; // Used for constructing the link
}

const SubcategoryCard: React.FC<SubcategoryCardProps> = ({ id, name, categoryId }) => {
  return (
    <Link href={`/categories/${categoryId}/subcategories/${id}`} passHref>
      <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      </div>
    </Link>
  );
};

export default SubcategoryCard;