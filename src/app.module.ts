import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './controllers/product.controller';
import { ProductModule } from './modules/product.module';
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
