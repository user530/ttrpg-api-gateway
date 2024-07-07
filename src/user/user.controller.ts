import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) { }

    @Get()
    async getTestUser() {
        // return this.userService.test();
        return { id: 2, name: 'John Doe' }
    }
}
