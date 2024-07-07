import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
    ) { }

    async test() {
        return this.userClient.send({ cmd: 'test-user' }, {});
    }
}
