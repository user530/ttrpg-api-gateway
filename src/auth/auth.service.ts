import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

interface IUserData {
    username: string;
    email: string;
    password: string;
    language: string;
    timeZone: string
}

interface IUserEntity extends IUserData {
    id: number;
}

@Injectable()
export class AuthService {
    constructor(
        @Inject('AUTH_SERVICE') private readonly authClient: ClientProxy,
    ) { }

    // For now, lets assume it returns the whole entity
    async register(userData: IUserData) {
        try {
            const result = await firstValueFrom(
                this.authClient.send<IUserEntity, IUserData>(
                    { cmd: 'register' },
                    userData,
                )
            );

            return result
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }
}
