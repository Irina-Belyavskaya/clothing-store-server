import { Injectable } from '@nestjs/common';

// ============ Repos ================
import { ProductsRepo } from './repos/products.repo';
import { CategoryRepo } from '../categories/repos/category.repo';

// ============ DTOs ================
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductQuantityDto } from './dtos/update-product-quantity.dto';


@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepo) {}

  async getProductById(id: string) {
    return await this.productsRepository.getProductById(id);
  }

  async getAllProducts() {
    return await this.productsRepository.getAllProducts();
  }

  async createProduct(dto: CreateProductDto
    ) {
      return await this.productsRepository.save(dto);
  }

  async updateProduct(updateId: string, dto: CreateProductDto) {
    return await this.productsRepository.update(updateId, {...dto, updated: new Date()});
  }

  async delete(id: string) {
    return await this.productsRepository.delete(id);
  }

  async updateProductQuantity(dto: UpdateProductQuantityDto) {
    const product = await this.getProductById(dto.productId);
    return await this.productsRepository.update(dto.productId, {quantity: product.quantity - dto.boughtQuantity, updated: new Date()});
  }
} 
