import { ApiProperty } from "@nestjs/swagger";

export class UpdateQuantityDto {
  @ApiProperty({
    description: "Update record id"
  })
  recordId: string;

  @ApiProperty({
    description: "Limit product quantity"
  })
  productQuantity: number;

  @ApiProperty({
    description: "Update quantity"
  })
  quantity: number;
}