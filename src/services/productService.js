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
      id: "tshirts",
      name: "T-Shirts",
      image:
        "/assets/categories/plainTee.jpg",
    },
    {
      id: "hoodies",
      name: "Hoodies",
      image:
       "/assets/categories/hoodies.jpeg",
    },
    {
      id: "jackets",
      name: "Jackets",
      image:
        "/assets/categories/jackets.jpeg",
    },
    {
      id: "sneakers",
      name: "Sneakers",
      image:
        "/assets/categories/sneakers.jpeg",
    },
    
  ];
}


