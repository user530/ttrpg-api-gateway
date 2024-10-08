import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserClientModule } from './user.client.module';

@Module({
  imports: [UserClientModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule { }
