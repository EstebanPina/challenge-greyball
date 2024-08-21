type Product = {
  Id: number;
  ProductName: string;
  Currency: string;
  Price: number;
  Description: string;
  Img: string;
  Rating_Value: number;
};

export const product_list: Product[] = [
  {
    Id: 1,
    ProductName: "Apple iPhone 13",
    Currency: "USD",
    Price: 850,
    Description: "The latest Apple iPhone with a powerful A15 Bionic chip.",
    Img: "https://i.imgur.com/wothPcE.jpeg",
    Rating_Value: 4.8,
  },
  {
    Id: 2,
    ProductName: "Bose QuietComfort 35 II",
    Currency: "USD",
    Price: 300,
    Description: "Noise-cancelling headphones with superior sound quality.",
    Img: "https://i.imgur.com/fgdaH8F.jpeg",
    Rating_Value: 4.6,
  },
  {
    Id: 3,
    ProductName: "Canon EOS R5",
    Currency: "USD",
    Price: 3800,
    Description: "Full-frame mirrorless camera for professionals.",
    Img: "https://i.imgur.com/Svt5Giy.jpeg",
    Rating_Value: 4.9,
  },
  {
    Id: 4,
    ProductName: "Dyson V11 Absolute",
    Currency: "GBP",
    Price: 600,
    Description:
      "Powerful cordless vacuum cleaner with intelligent cleaning modes.",
    Img: "https://i.imgur.com/ZJPxTj3.jpeg",
    Rating_Value: 4.5,
  },
  {
    Id: 5,
    ProductName: "Epson EcoTank ET-2760",
    Currency: "GBP",
    Price: 250,
    Description: "Cartridge-free printer with high-capacity ink tanks.",
    Img: "https://i.imgur.com/8G536Cm.jpeg",
    Rating_Value: 4.3,
  },
  {
    Id: 6,
    ProductName: "Fossil Men's Nate Stainless Steel Quartz Chronograph Watch",
    Currency: "GBP",
    Price: 140,
    Description: "Stylish and durable men's watch with a bold design.",
    Img: "https://i.imgur.com/lUHFD9j.jpeg",
    Rating_Value: 4.7,
  },
  {
    Id: 7,
    ProductName: "Google Nest Hub Max",
    Currency: "EUR",
    Price: 230,
    Description: "Smart display with Google Assistant and a 10-inch screen.",
    Img: "https://i.imgur.com/lMQXjV7.jpeg",
    Rating_Value: 4.6,
  },
  {
    Id: 8,
    ProductName: "HP Spectre x360",
    Currency: "EUR",
    Price: 1200,
    Description:
      "2-in-1 laptop with a 4K touch display and powerful performance.",
    Img: "https://i.imgur.com/34sLH6z.jpeg",
    Rating_Value: 4.8,
  },
  {
    Id: 9,
    ProductName: "Instant Pot Duo 7-in-1",
    Currency: "EUR",
    Price: 100,
    Description:
      "Multifunctional pressure cooker that can sauté, steam, and more.",
    Img: "https://i.imgur.com/uBdkH5Z.jpeg",
    Rating_Value: 4.7,
  },
  {
    Id: 10,
    ProductName: "JBL Flip 5",
    Currency: "MXN",
    Price: 2400,
    Description: "Portable Bluetooth speaker with powerful sound.",
    Img: "https://i.imgur.com/fFNY95e.jpeg",
    Rating_Value: 4.6,
  },
  {
    Id: 11,
    ProductName: "KitchenAid Artisan Series 5-Qt. Stand Mixer",
    Currency: "MXN",
    Price: 8600,
    Description: "Iconic stand mixer with 10 speeds and multiple attachments.",
    Img: "https://i.imgur.com/iJC1Y9S.png",
    Rating_Value: 4.9,
  },
  {
    Id: 12,
    ProductName: "Logitech MX Master 3",
    Currency: "MXN",
    Price: 2000,
    Description: "Advanced wireless mouse with precision control.",
    Img: "https://i.imgur.com/GscCtxZ.jpeg",
    Rating_Value: 4.8,
  },
  {
    Id: 13,
    ProductName: "Microsoft Surface Pro 7",
    Currency: "JPY",
    Price: 98000,
    Description:
      "Versatile 2-in-1 tablet with a powerful Intel Core processor.",
    Img: "https://i.imgur.com/FsbNF46.jpeg",
    Rating_Value: 4.7,
  },
  {
    Id: 14,
    ProductName: "Nintendo Switch",
    Currency: "JPY",
    Price: 39000,
    Description: "Hybrid gaming console for home and portable play.",
    Img: "https://i.imgur.com/qQGgMBK.jpeg",
    Rating_Value: 4.8,
  },
  {
    Id: 15,
    ProductName: "Oculus Quest 2",
    Currency: "JPY",
    Price: 52000,
    Description: "All-in-one VR headset with a high-resolution display.",
    Img: "https://i.imgur.com/U1nAXT6.jpeg",
    Rating_Value: 4.7,
  },
  {
    Id: 16,
    ProductName: "Philips Hue White",
    Currency: "EUR",
    Price: 80,
    Description: "Smart LED bulbs with customizable lighting options.",
    Img: "https://i.imgur.com/CWLBpXt.jpeg",
    Rating_Value: 4.5,
  },
  {
    Id: 17,
    ProductName: "QNAP TS-451D2-4G",
    Currency: "GBP",
    Price: 500,
    Description: "High-performance NAS with multimedia support.",
    Img: "https://i.imgur.com/3tzyeB9.jpeg",
    Rating_Value: 4.7,
  },
  {
    Id: 18,
    ProductName: "Roku Streaming Stick+",
    Currency: "USD",
    Price: 50,
    Description: "Portable streaming player with 4K resolution support.",
    Img: "https://i.imgur.com/iSfLxt5.jpeg",
    Rating_Value: 4.6,
  },
  {
    Id: 19,
    ProductName: "Samsung Galaxy S21",
    Currency: "USD",
    Price: 800,
    Description:
      "Flagship smartphone with a stunning display and powerful camera.",
    Img: "https://i.imgur.com/ddxtghM.jpeg",
    Rating_Value: 4.8,
  },
  {
    Id: 20,
    ProductName: "Toshiba 55-inch 4K UHD Smart TV",
    Currency: "JPY",
    Price: 90000,
    Description: "Ultra HD Smart TV with vibrant colors and HDR support.",
    Img: "https://i.imgur.com/pO4a596.jpeg",
    Rating_Value: 4.7,
  },
  {
    Id: 21,
    ProductName: "Ultimate Ears BOOM 3",
    Currency: "EUR",
    Price: 150,
    Description: "Waterproof Bluetooth speaker with 360° sound.",
    Img: "https://i.imgur.com/CYRfihZ.jpeg",
    Rating_Value: 4.7,
  },
  {
    Id: 22,
    ProductName: "Vitamix E310 Explorian Blender",
    Currency: "MXN",
    Price: 7500,
    Description: "High-performance blender with variable speed control.",
    Img: "https://i.imgur.com/EqlYG1G.jpeg",
    Rating_Value: 4.8,
  },
  {
    Id: 23,
    ProductName: "Western Digital My Passport 4TB",
    Currency: "GBP",
    Price: 120,
    Description: "Portable external hard drive with ample storage.",
    Img: "https://i.imgur.com/7nSiXr3.jpeg",
    Rating_Value: 4.7,
  },
  {
    Id: 24,
    ProductName: "Xiaomi Mi Smart Band 6",
    Currency: "JPY",
    Price: 30,
    Description: "Affordable fitness tracker with SpO2 tracking.",
    Img: "https://i.imgur.com/sA3na47.jpeg",
    Rating_Value: 4.6,
  },
  {
    Id: 25,
    ProductName: "Yamaha YAS-209 Sound Bar",
    Currency: "JPY",
    Price: 120,
    Description: "Soundbar with built-in Alexa and wireless subwoofer.",
    Img: "https://i.imgur.com/qDee1I5.jpeg",
    Rating_Value: 4.7,
  },
  {
    Id: 26,
    ProductName: "Zojirushi Neuro Fuzzy Rice Cooker",
    Currency: "JPY",
    Price: 200,
    Description: "Advanced rice cooker with multiple cooking settings.",
    Img: "https://i.imgur.com/wJIwfyc.jpeg",
    Rating_Value: 4.8,
  },
];
const productBase: Product = {
  Id: 0,
  ProductName: "",
  Currency: "USD",
  Price: 0,
  Description: "",
  Img: "",
  Rating_Value: 0,
};

export function findProductById(productId: number): Product {
  const product = product_list.find((product) => product.Id === productId);
  return product ? product : productBase;
}

export function findProductByProductName(productName: string): Product[] {
  const normalizedSearchText = productName.toLowerCase();
  const matchingProducts = product_list.filter((product) =>
    product.ProductName.toLowerCase().includes(normalizedSearchText)
  );
  return matchingProducts.length > 0
    ? matchingProducts
    : (["Product not found."] as unknown as Product[]);
}
