type Product = {
  title: string,
  description: string,
  type: string,
  capacity: string,
  price: number
}

const productsArray:Product[] = [
  {
    title: 'iPhone 14 Pro',
    description: 'This is iphone 14 PRO',
    type: 'phone',
    capacity: '512',
    price: 1000
  },
  {
    title: 'iPhone 12 Pro',
    description: 'This is iphone 12 PRO',
    type: 'phone',
    capacity: '256',
    price: 900
  },
  {
    title: 'iPhone 13 Pro',
    description: 'This is iphone 13 PRO',
    type: 'phone',
    capacity: '512',
    price: 1200
  },
  {
    title: 'iPhone X',
    description: 'This is iphone X',
    type: 'phone',
    capacity: '64',
    price: 350
  },
  {
    title: 'iPhone 8',
    description: 'This is iphone 8',
    type: 'phone',
    capacity: '128',
    price: 180
  },
  {
    title: 'iPhone 6',
    description: 'This is iphone 6',
    type: 'phone',
    capacity: '16',
    price: 50
  },
]

export default productsArray