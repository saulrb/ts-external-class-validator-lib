import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator'

export class Product {
  @IsNotEmpty()
  title: string
  @IsNumber()
  @IsPositive()
  price: number
  description: string

  constructor(title: string, price: number, description: string) {
    this.title = title
    this.price = price
    this.description = description
  }

  getInformation() {
    return [this.title, `$${this.price}`, this.description]
  }
}
