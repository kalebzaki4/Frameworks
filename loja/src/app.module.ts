import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';

@Module({
  imports: [],
  controllers: [UsuarioController]
})
export class AppModule {}
