//import 'reflect-metadata'
//import { plainToClass } from 'class-transformer'
import { Product } from './product.model'
import { validate } from 'class-validator'

//const products = [
//  { title: 'A Carpet', price: 29.99 },
//  { title: 'A Book', price: 10.99 }
//]

const newProd = new Product('', -5.99, 'A bad book')
validate(newProd).then(errors => {
  // validate() returns a promise
  if (errors.length > 0) {
    console.log('VALIDATION ERRORS!')
    console.log(errors)
  } else {
    console.log(newProd.getInformation())
  }
})

console.log(newProd)

//const loadedProducts = plainToClass(Product, products)
//for (const product of loadedProducts) {
//  console.log(product.getInformation())
//}
