import { ApiProperty } from '@nestjs/swagger';
import { ProductType } from 'src/common/constants/enum';

export class ImageDto {
	@ApiProperty({ description: 'Path', example: '/iphone14.png' })
	url_path: string;

	@ApiProperty({ description: 'height', example: 60 })
	height: number;

	@ApiProperty({ description: 'width', example: 180 })
	width: number;
}

class CompanyA {
	@ApiProperty({ description: 'brand' })
	brand: string;
}

class CompanyB {
	@ApiProperty({ description: 'trademark' })
	trademark: string;
}

type Company = CompanyA | CompanyB;

export class CreateProductDto {
	@ApiProperty({
		description: 'Tên SP',
		maxLength: 255,
		example: 'iPhone 14 Pro'
	})
	name: string;

	@ApiProperty({ description: 'Giá', minimum: 0, example: 1299 })
	price: number;

	@ApiProperty({ description: 'SKU', maxLength: 255, example: 'IP1420230505' })
	sku: string;

	@ApiProperty({ description: 'Meta Keywords', example: ['iphone14', 'apple'] })
	meta_keywords: string[];

	@ApiProperty({ type: () => [ImageDto] })
	images: ImageDto[];

	@ApiProperty({ enum: Object.values(ProductType), isArray: true })
	type: ProductType;
}
