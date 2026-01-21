// This simulates a backend response for now

export async function getTrendingProducts() {
  return [
    {
      id: 1,
      name: "Varsity Jacket",
      price: 28000,
      image:
         "/assets/products/varsityjacket.jpeg",
    },
    {
      id: 2,
      name: "Cargo Pants",
      price: 15000,
      image:
        "/assets/products/cargopants.jpeg",
    },
    {
      id: 3,
      name: "Hoodie Drop",
      price: 12000,
      image:
        "/assets/products/hoodHoodie.jpeg",
    },
    {
      id: 4,
      name: "Drip Tee",
      price: 8500,
      image:
        "/assets/products/driptee.jpeg",
    },
  ];
}


export async function getNewArrivals() {
  return [
    {
      id: 101,
      name: "Graphic Snapback",
      price: 8500,
      image:
        "/assets/products/snapback.jpeg",
    },
    {
      id: 102,
      name: "Flame Print Shirt",
      price: 12000,
      image:
        "/assets/products/printshirt.jpeg",
    },
    {
      id: 103,
      name: "Abstract Sweatshirt",
      price: 15000,
      image:
        "/assets/products/sweatshirt.jpeg",
    },
    {
      id: 104,
      name: "Camo Shorts",
      price: 10000,
      image:
       "/assets/products/camoshorts.jpeg",
    },
  ];
}

export async function getCategories() {
  return [
    {
      category: "tshirts",
      name: "T-Shirts",
      icon: "👕",
      image:
        "/assets/categories/plainTee.jpg",
    },
    {
      category: "hoodies",
      name: "Hoodies",
      icon: "🧥",
      image:
       "/assets/categories/hoodies.jpeg",
    },
    {
      category: "jackets",
      name: "Jackets",
      icon: "🥼",
      image:
        "/assets/categories/jackets.jpeg",
    },
    {
      category: "sneakers",
      name: "Sneakers",
      icon: "👟",
      image:
        "/assets/categories/sneakers.jpeg",
    },
    
  ];
}

export async function getAllProducts() {
  return allProducts; // your full array
}

export async function getProductsByCategory(category) {
  if (!category) return allProducts;
  return allProducts.filter((p) => p.category === category);
}

const allProducts = [
  { id: 1, name: "Varsity Jacket", price: 28000, image: "/assets/products/varsityjacket.jpeg", category: "jackets" },
  { id: 2, name: "Cargo Pants", price: 15000, image: "/assets/products/cargopants.jpeg", category: "pants" },
  { id: 3, name: "Hoodie Drop", price: 12000, image: "/assets/products/hoodHoodie.jpeg", category: "hoodies" },
  { id: 4, name: "Drip Tee", price: 8500, image: "/assets/products/driptee.jpeg", category: "tshirts" },

  { id: 101, name: "Graphic Snapback", price: 8500, image: "/assets/products/snapback.jpeg", category: "caps" },
  { id: 102, name: "Flame Print Shirt", price: 12000, image: "/assets/products/printshirt.jpeg", category: "tshirts" },
  { id: 103, name: "Abstract Sweatshirt", price: 15000, image: "/assets/products/sweatshirt.jpeg", category: "hoodies" },
  { id: 104, name: "Camo Shorts", price: 10000, image: "/assets/products/camoshorts.jpeg", category: "pants" },

];

export async function getProductById(id) {
  return allProducts.find((p) => String(p.id) === String(id)) || null;
}

