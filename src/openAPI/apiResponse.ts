import { Type, applyDecorators } from '@nestjs/common';
import {
    ApiCreatedResponse,
    ApiExtraModels,
    ApiOkResponse,
    ApiOperation,
    ApiProperty,
    getSchemaPath
} from '@nestjs/swagger';

export class Paging {
	@ApiProperty({ description: 'current page', example: 1 })
	currentPage: number;

	@ApiProperty({ description: 'page size', example: 10 })
	pageSize: number;

	@ApiProperty({ description: 'total', example: 1500 })
	total: number;
}

export class PaginatedResponseDto<TData> {
	@ApiProperty({ example: 200 })
	protected statusCode?: number;

	@ApiProperty({ description: 'data' })
	protected data: TData[];

	@ApiProperty()
	protected paging: Paging;

	@ApiProperty({ example: 'Success' })
	protected message?: string;
}

export class CreatedResponseDto<TData> {
	@ApiProperty({ example: 201 })
	statusCode?: number;

	@ApiProperty({ description: 'data' })
	data: TData[];

	@ApiProperty({ example: null })
	paging: Paging = null;

	@ApiProperty({ example: 'Success' })
	message?: string;
}

type TApiResponse<TModel> = {
	type: TModel;
	summary: string;
};

export const ApiListResponse = <TModel extends Type<any>>({ type, summary }: TApiResponse<TModel>) =>
	applyDecorators(
		ApiExtraModels(PaginatedResponseDto),
		ApiOperation({ summary: summary ?? type.name }),
		ApiOkResponse({
			schema: {
				title: `ListResponseOf${type.name}`,
				allOf: [
					{ $ref: getSchemaPath(PaginatedResponseDto) },
					{
						properties: {
							data: {
								type: 'array',
								items: { $ref: getSchemaPath(type) }
							}
						}
					}
				]
			}
		})
	);

export const ApiCreatedResponseCustom = <TModel extends Type<any>>({ type, summary }: TApiResponse<TModel>) =>
	applyDecorators(
		ApiExtraModels(CreatedResponseDto),
		ApiOperation({ summary: summary ?? type.name }),
		ApiCreatedResponse({
			schema: {
				title: `CreateResponseOf${type.name}`,
				allOf: [
					{ $ref: getSchemaPath(CreatedResponseDto) },
					{
						properties: {
							data: {
								type: 'object',
								$ref: getSchemaPath(type)
							}
						}
					}
				]
			}
		})
	);
