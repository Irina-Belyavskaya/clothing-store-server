import { ApiProperty } from "@nestjs/swagger";
import { SizesNames } from "../enums/sizes.enum";

export class UpdateProductQuantityDto {
  @ApiProperty({
    description: "Product id"
  })
  productId: string;
  
  @ApiProperty({
    description: "Product quantity"
  })
  boughtQuantity: number;
}