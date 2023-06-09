import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
	async create(createProductDto: CreateProductDto): Promise<Product> {
		return '' as any;
	}

	async findAll(): Promise<Product> {
		return `This action returns all product` as any;
	}

	findOne(id: number) {
		return `This action returns a #${id} product`;
	}

	update(id: number, updateProductDto: UpdateProductDto) {
		return `This action updates a #${id} product`;
	}

	remove(id: number) {
		return `This action removes a #${id} product`;
	}
}
