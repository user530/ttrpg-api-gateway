import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        ClientsModule.register({
            clients: [
                {
                    name: 'AUTH_SERVICE',
                    transport: Transport.TCP,
                    options: {
                        host: 'auth-service',
                        port: 3000,
                    }
                },
            ]
        })
    ],
    exports: [ClientsModule],
})
export class AuthClientModule { }