import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ApiHeaders, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { ApiCreatedResponseCustom, ApiListResponse } from 'src/openAPI/apiResponse';
import { UserRole } from '../common/constants/enum';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';

@Controller('product')
@ApiHeaders([
	{
		name: 'Authorization',
		description: 'Access Token',
		example: 'accessToken',
		required: true
	},
	{
		name: 'x-auth-uuid',
		example: 'xAuthUUID',
		required: true
	},
	{
		name: 'Content-Type',
		example: 'application/json'
	}
])
@ApiResponse({ status: 403, description: 'Unauthorized' })
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@ApiQuery({ name: 'Role', enum: UserRole, isArray: true })
	@ApiCreatedResponseCustom({ type: Product, summary: 'Create Product' })
	@HttpCode(201)
	@Post()
	create(@Body() createProductDto: CreateProductDto): Promise<Product> {
		return this.productService.create(createProductDto);
	}

	@Get()
	@ApiListResponse({ type: Product, summary: 'Product List' })
	async findAll(): Promise<Product> {
		return this.productService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.productService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
		return this.productService.update(+id, updateProductDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.productService.remove(+id);
	}
}
