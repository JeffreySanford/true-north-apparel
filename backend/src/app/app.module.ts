import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThrottlerModule } from '@nestjs/throttler';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ThrottlerModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost:27017/true-north-apparel'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
