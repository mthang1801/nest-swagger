import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import swaggerConfig from './config/swagger.config';

(async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.useGlobalPipes(new ValidationPipe());

	swaggerConfig(app);

	await app.listen(3000);
})();
