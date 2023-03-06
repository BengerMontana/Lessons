export type Product = {
  id: number,
  title: string,
  description: string,
  type: string,
  capacity: string,
  price: number,
  image: string,
  fullDesc: string
}

const productsArray:Product[] = [
  {
    id: 1,
    title: 'iPhone 14 Pro',
    description: 'This is iphone 14 PRO',
    type: 'phone',
    capacity: '512',
    price: 1000,
    image:"/images/iphone-13-Blue.webp",
    fullDesc: '<div class="red">Hello world!</div>',
  },
  {
    id: 2,
    title: 'iPhone 12 Pro',
    description: 'This is iphone 12 PRO',
    type: 'phone',
    capacity: '256',
    price: 900,
    image:"/images/iphone-13-Green.webp",
    fullDesc: '<div class="red">Hello world!</div>',
  },
  {
    id: 3,
    title: 'iPhone 13 Pro',
    description: 'This is iphone 13 PRO',
    type: 'phone',
    capacity: '512',
    price: 1200,
    image:"/images/iphone-13-Midnight.webp",
    fullDesc: '<div class="red">Hello world!</div>',
  },
  {
    id: 4,
    title: 'iPhone X',
    description: 'This is iphone X',
    type: 'phone',
    capacity: '64',
    price: 350,
    image:"/images/iphone-13-Pink.webp",
    fullDesc: '<div class="red">Hello world!</div>',
  },
  {
    id: 5,
    title: 'iPhone 8',
    description: 'This is iphone 8',
    type: 'phone',
    capacity: '128',
    price: 180,
    image:"/images/iphone-13-Red.webp",
    fullDesc: '<div class="red">Hello world!</div>',
  },
  {
    id: 6,
    title: 'iPhone 6',
    description: 'This is iphone 6',
    type: 'phone',
    capacity: '16',
    price: 50,
    image:"/images/iphone-13-Starlight.webp",
    fullDesc: '<div class="red">Hello world!</div>',
  },
]

export const getProductsObject = (array: Product[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )


export default productsArray