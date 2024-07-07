import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        ClientsModule.register({
            clients: [
                {
                    name: 'USER_SERVICE',
                    transport: Transport.TCP,
                    options: {
                        // Service name from the compose file
                        host: 'user-service',
                        // Port within the container
                        port: 3000,
                    },
                },
            ],
        })
    ],
    exports: [ClientsModule],
})
export class UserClientModule { }