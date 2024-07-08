import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthClientModule } from './auth.client.module';

@Module({
    imports: [AuthClientModule],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule { }
