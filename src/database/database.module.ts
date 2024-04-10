import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import DatabaseConfig from './database.config';
import typeOrmConfigOptions from './database.config';

@Module({
  imports: [TypeOrmModule.forRootAsync(typeOrmConfigOptions)],
})
export class DatabaseModule {}
