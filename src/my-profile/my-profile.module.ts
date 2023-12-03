import { Module } from '@nestjs/common';
import { MyProfileService } from './my-profile.service';
import { MyProfileController } from './my-profile.controller';

@Module({
  providers: [MyProfileService],
  controllers: [MyProfileController]
})
export class MyProfileModule {}
