import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product/controllers/product.controller';
import { ProductModule } from './product/modules/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot('mongodb://localhost:27027/products-nest'),
  ],
  controllers: [AppController, ProductController],
  providers: [AppService],
})
export class AppModule {}
