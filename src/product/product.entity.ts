// src/product/product.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome_do_produto: string;

  @Column()
  fornecedor: string;

  @Column()
  endereco_fornecedor: string;

  @Column()
  quantidade: number;

  @Column()
  descricao: string;

  @Column()
  data_registro: Date;

  @Column()
  data_update: Date;
}
