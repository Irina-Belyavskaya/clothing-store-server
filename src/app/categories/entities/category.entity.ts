import { Column, Entity, OneToMany } from "typeorm";

// ============ Entities ================
import { ProductsEntity } from "../../products/entities/products.entity";
import { IDEntity } from '../../../shared/entities/id.entity';

@Entity("categories")
export class CategoryEntity extends IDEntity{
  @Column({name: 'name'})
  name: string;

  @Column({name: 'description'})
  description: string;

  @Column({
    name: 'image_url', 
    default: 'https://images.unsplash.com/photo-1542060748-10c28b62716f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
  })
  image: string;

  @OneToMany(() => ProductsEntity, product => product.category)
  products?: ProductsEntity[];

}