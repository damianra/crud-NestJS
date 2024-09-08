import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Res,
  HttpStatus,
  Param,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';
import { Product } from './interfaces/product.interface';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('/')
  async getAll(@Res() res): Promise<Product[]> {
    const products = await this.productService.getProducts();
    return res.status(HttpStatus.OK).json({
      products,
    });
  }

  @Get('/:productoId')
  async getProduct(
    @Res() res,
    @Param('productoId') productoId,
  ): Promise<Product> {
    console.log(productoId);
    const product = await this.productService.deleteProduct(productoId);
    console.log(productoId);
    if (!product) res.status(HttpStatus.NOT_FOUND).json(product);
    return res.status(HttpStatus.OK).json(product);
  }

  @Post('/create')
  async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO) {
    console.log(createProductDTO);
    const product = await this.productService.createProduct(createProductDTO);
    res.status(HttpStatus.OK).json({
      message: 'recived',
      product: product,
    });
  }
  @Delete('/delete')
  async deletePost(@Res() res, @Query('id') id) {
    const product = await this.productService.deleteProduct(id);
    if (!product) res.status(HttpStatus.NOT_FOUND).json(product);
    res.status(HttpStatus.OK).json({
      message: 'deleted',
      product: product,
    });
  }

  @Put('/refresh')
  async updateProduct(
    @Res() res,
    @Body() createProductDTO: CreateProductDTO,
    @Query('id') id,
  ) {
    console.log(id);
    const updateProduct = await this.productService.updateProduct(
      id,
      createProductDTO,
    );
    if (!updateProduct) throw new NotFoundException('Product does not exists');
    return res.status(HttpStatus.OK).json({
      message: 'Product updated successfully.',
      updateProduct,
    });
  }
}
