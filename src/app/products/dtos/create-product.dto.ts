import { ApiProperty } from "@nestjs/swagger";
import { SizesNames } from "../enums/sizes.enum";

export class CreateProductDto {
  @ApiProperty({
    description: "Product name"
  })
  readonly name: string;
  
  @ApiProperty({
    description: "Product price"
  })
  readonly price: number;

  @ApiProperty({
    description: "Product vendor code"
  })
  vendorCode: string;

  @ApiProperty({
    description: "Product color"
  })
  color: string;

  @ApiProperty({
    description: "Product size"
  })
  size: SizesNames;

  @ApiProperty({
    description: "Product composition"
  })
  composition: string;
  
  @ApiProperty({
    description: "Product description",
    required: false
  })
  readonly description?: string;

  @ApiProperty({
    description: "Product image",
    required: false
  })
  readonly image?: string;

  @ApiProperty({
    description: "Product quantity",
    required: false
  })
  readonly quantity?: number;
  
  @ApiProperty({
    description: "Product brand",
    required: false
  })
  readonly brand?: string;
  
  @ApiProperty({
    description: "Product category",
    required: true
  })
  readonly categoryId!: number;
}