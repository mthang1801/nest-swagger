import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';
import { extraModels } from 'src/openAPI/extra-model';

const swaggerConfig = (app: INestApplication) => {
	const SwaggerConfig = new DocumentBuilder()
		.setTitle('BLOCKCHAIN API DOCUMENT')
		.setDescription(`This is blockchain api document, all copyright@${new Date().getFullYear()} reserved.`)
		.setContact('MVT', 'https://mvt-blog-official.netlify.app/', 'mthang1801@gmail.com')
		.setVersion('1.0.0')
		.addTag('Document API')
		.addBearerAuth()
		.build();

	const swaggerOptions: SwaggerDocumentOptions = {
		operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
		ignoreGlobalPrefix: false,
		extraModels
	};

	const document = SwaggerModule.createDocument(app, SwaggerConfig, swaggerOptions);

	SwaggerModule.setup('api/v1/docs', app, document, {
		explorer: true,
		customCssUrl: '../../swagger-ui/swagger-outline.css',
		customSiteTitle: 'Block chain Document',
		customfavIcon: '../../images/favicon.png'
	});
};

export default swaggerConfig;
