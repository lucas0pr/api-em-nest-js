import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { ProductnestModule } from './generate/productnest/productnest.module';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // ou 'mysql', 'sqlite', etc.
      host: 'localhost',
      port: 5432, // ou a porta do seu banco
      username: 'seu_usuario',
      password: 'sua_senha',
      database: 'nome_do_banco',
      entities: [Product],
      synchronize: true, // Cuidado: não use em produção
    }),
    ProductModule,
    ProductnestModule,
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class AppModule {}
