import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyProfileModule } from './my-profile/my-profile.module';
import { AuthModule } from './auth/auth.module';
import { JobsModule } from './jobs/jobs.module';

@Module({
  imports: [MyProfileModule, AuthModule, JobsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
