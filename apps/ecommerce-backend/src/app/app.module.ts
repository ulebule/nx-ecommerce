import { Module } from '@nestjs/common';
import { ProductsController, ProductsService } from '@nx-ecommerce/products';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
