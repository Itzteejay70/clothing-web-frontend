const brands = [
  { id: "nike",  logo: "/assets/brands/nike.jpeg" },
  { id: "go-crazy",  logo: "/assets/brands/gocrazy.png" },
  { id: "zttw",  logo: "/assets/brands/zttw.png" },
  { id: "ashluxe",  logo: "/assets/brands/ashluxe.png" },
  { id: "dttw",  logo: "/assets/brands/dttw.png" },
  { id: "puma",  logo: "/assets/brands/puma.png" },
];

export async function getAllBrands() {
  return brands;
}

export async function getFeaturedBrands() {
  // For now: first 3, or any selection you want
  return brands.slice(0, 4);
}

export async function getBrandById(id) {
  return brands.find((b) => b.id === id) || null;
}
