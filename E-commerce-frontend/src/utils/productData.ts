
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Minimalist Watch",
    description: "Elegant timepiece with a clean, minimalist design. Features premium materials and Swiss movement for exceptional accuracy.",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    category: "accessories",
    featured: true
  },
  {
    id: "2",
    name: "Wireless Headphones",
    description: "Premium wireless headphones with active noise cancellation, up to 30 hours of battery life, and exceptional sound quality.",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "electronics",
    featured: true
  },
  {
    id: "3",
    name: "Leather Wallet",
    description: "Handcrafted genuine leather wallet with multiple card slots, a bill compartment, and RFID protection.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1517254797898-6c3f1e8a6a09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    category: "accessories"
  },
  {
    id: "4",
    name: "Smart Speaker",
    description: "Intelligent speaker with voice assistant capabilities, premium sound, and seamless smart home integration.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    category: "electronics",
    featured: true
  },
  {
    id: "5",
    name: "Ceramic Mug",
    description: "Artisan-crafted ceramic mug with a comfortable handle and minimalist design. Perfect for your morning coffee or tea.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "homeware"
  },
  {
    id: "6",
    name: "Desk Lamp",
    description: "Modern desk lamp with adjustable brightness, color temperature control, and wireless charging base.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "homeware",
    featured: true
  },
  {
    id: "7",
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with waterproof design, 24-hour battery life, and rich, immersive sound.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    category: "electronics"
  },
  {
    id: "8",
    name: "Notebook Set",
    description: "Premium notebook set with soft-touch covers, high-quality paper, and elegant design. Ideal for journaling and note-taking.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "stationery"
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};
