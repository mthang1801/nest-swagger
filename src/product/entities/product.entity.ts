import { Prop, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

@Schema()
export class Product {
	@ApiProperty({ description: '_id', type: 'string', example: '1730127jkjdkalpjp109' })
	@Prop({ type: Types.ObjectId })
	readonly _id?: Types.ObjectId;

	@ApiProperty({ description: 'name', example: 'iPhone 14' })
	@Prop()
	name: string;

	@ApiProperty({ description: 'sku', example: 'IP1412328901' })
	@Prop()
	sku: string;

	@ApiProperty({ description: 'Price', example: 1299 })
	@Prop()
	price: number;

	@ApiProperty({ type: [String], description: 'Meta keyword', example: ['iphone 14', 'apple'] })
	@Prop({ type: [String] })
	meta_keyworkds: string[];
}
