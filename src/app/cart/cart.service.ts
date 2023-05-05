import { Injectable } from '@nestjs/common';

// ============ Repos ================
import { CartRepo } from "./repos/cart.repo";

// ============ DTOs ================
import { AddProductToCartDto } from './dtos/add-product-to-cart.dto';
import { UpdateQuantityDto } from './dtos/update-quantity.dto';
import { UserSessionDto } from '../security/dtos/userSession.dto';
import { I18nService } from 'nestjs-i18n';

@Injectable()
export class CartService {
  constructor(
    private readonly cartRepo: CartRepo,
    private readonly i18n: I18nService
  ) { }

  async getCarts() {
    return await this.cartRepo.getAllCarts();
  }

  async getCartByUserId(user: UserSessionDto) {
    return await this.cartRepo.getCartByUserId(user.id);
  }

  async getCartById(id : string) {
    return await this.cartRepo.getCartById(id);
  }

  async addProductToCart(user: UserSessionDto, dto: AddProductToCartDto) {
    if (dto.quantity > dto.productQuantity)
      throw new Error(this.i18n.t('errors.ERRORS.ProductLimitnException'));

    const record = await this.cartRepo.findOne({where: {productId: dto.productId}});
    if (record) {
      record.quantity = record.quantity + dto.quantity;
      return await this.cartRepo.save(record);
    }
    const cartRecord = this.cartRepo.create({
      quantity: dto.quantity,
      productId: dto.productId,
      userId: user.id
    });

    return await this.cartRepo.save(cartRecord);
  }

  async deleteCartByUserId(user: UserSessionDto) {
    return await this.cartRepo.deleteByUserId(user.id);
  }

  async deleteProductFromCart(recordId: string) {
    return await this.cartRepo.delete(recordId);
  }
  async updateProductQuantity(dto: UpdateQuantityDto) {
    if (dto.quantity <= 0 )
      return await this.cartRepo.delete(dto.recordId);

    if (dto.quantity > dto.productQuantity)
      throw new Error(this.i18n.t('errors.ERRORS.ProductLimitnException'));
    
    return await this.cartRepo.update(
      dto.recordId, 
      { quantity: dto.quantity, updated: new Date()}
    );
  }
}
