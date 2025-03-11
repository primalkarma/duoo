// Define the data structure interfaces
interface Product {
    id: number;
    name: string;
    price: number;
    quantity?: number;
  }
  
  interface Subcategory {
    id: number;
    name: string;
    products: Product[];
  }
  
  interface Category {
    id: number;
    name: string;
    subcategories: Subcategory[];
  }
  
  // Dummy data implementation
  const groceryData: Category[] = [
    {
      id: 1,
      name: "Fruits",
      subcategories: [
        {
          id: 1,
          name: "Citrus",
          products: [
            { id: 1, name: "Orange", price: 0.99 },
            { id: 2, name: "Lemon", price: 0.75 },
            { id: 3, name: "Grapefruit", price: 1.25 }
          ]
        },
        {
          id: 2,
          name: "Berries",
          products: [
            { id: 4, name: "Strawberry", price: 3.99 },
            { id: 5, name: "Blueberry", price: 4.49 },
            { id: 6, name: "Raspberry", price: 4.99 }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Vegetables",
      subcategories: [
        {
          id: 3,
          name: "Leafy Greens",
          products: [
            { id: 7, name: "Spinach", price: 2.49 },
            { id: 8, name: "Kale", price: 2.99 },
            { id: 9, name: "Lettuce", price: 1.99 }
          ]
        },
        {
          id: 4,
          name: "Root Vegetables",
          products: [
            { id: 10, name: "Carrot", price: 0.89 },
            { id: 11, name: "Potato", price: 0.69 },
            { id: 12, name: "Beet", price: 1.49 }
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Dairy",
      subcategories: [
        {
          id: 5,
          name: "Milk Products",
          products: [
            { id: 13, name: "Whole Milk", price: 3.49 },
            { id: 14, name: "Skim Milk", price: 3.29 },
            { id: 15, name: "Almond Milk", price: 3.99 }
          ]
        },
        {
          id: 6,
          name: "Cheeses",
          products: [
            { id: 16, name: "Cheddar", price: 5.99 },
            { id: 17, name: "Mozzarella", price: 4.99 },
            { id: 18, name: "Brie", price: 7.99 }
          ]
        }
      ]
    }
  ];
  
  export default groceryData;