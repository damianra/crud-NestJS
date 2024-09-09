import { Module } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from '../schemas/product.schemas';
import { ProductController } from '../controllers/product.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
