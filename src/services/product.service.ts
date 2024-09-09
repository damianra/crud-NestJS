import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../interfaces/product.interface';
import { CreateProductDTO } from '../dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async getProducts(): Promise<Product[]> {
    const products = await this.productModel.find();
    return products;
  }

  async getProduct(productID: string): Promise<Product> {
    const product = await this.productModel.findById(productID);
    return product;
  }

  async createProduct(createProductDTO: CreateProductDTO): Promise<Product> {
    console.log(createProductDTO);
    const product = await new this.productModel(createProductDTO);
    console.log(product);
    return await product.save();
  }

  async deleteProduct(productID: string): Promise<Product> {
    const del = await this.productModel.findByIdAndDelete(productID);
    return del;
  }

  async updateProduct(
    id: string,
    createProductDTO: CreateProductDTO,
  ): Promise<Product> {
    const updateProduct = await this.productModel.findByIdAndUpdate(
      id,
      createProductDTO,
      { new: true },
    );
    return updateProduct;
  }
}
