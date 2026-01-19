const brands = [
  { id: "nike", name: "Nike", logo: "/assets/brands/nike.jpeg" },
  { id: "go-crazy", name: "Go-crazy", logo: "/assets/brands/gocrazy.png" },
  { id: "zttw", name: "Zttw", logo: "/assets/brands/zttw.png" },
  { id: "ashluxe", name: "Ashluxe", logo: "/assets/brands/ashluxe.png" },
  { id: "dttw", name: "Dttw", logo: "/assets/brands/dttw.png" },
  { id: "puma", name: "Puma", logo: "/assets/brands/puma.png" },
];

export async function getAllBrands() {
  return brands;
}

export async function getFeaturedBrands() {
  // For now: first 3, or any selection you want
  return brands.slice(0, 3);
}

export async function getBrandById(id) {
  return brands.find((b) => b.id === id) || null;
}
