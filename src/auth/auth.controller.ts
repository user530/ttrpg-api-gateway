import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) { }

    // Registration endpoint
    @Post('register')
    async register() {
        // Check account data
        // Create new account
        // Send verification email
        // Signal creation
    }

    // Account verification endpoint
    @Get('verify/:token')
    async verify() {
        // Check user token and if valid -> activate account
        // Signal verification
    }

    // Login
    @Post('login')
    async login() {
        // Authenticate user credentials
        // Return access and refresh tokens
    }

    // Logout
    @Post('logout')
    async logout() {
        // Logout the user by invalidating tokens
        // Clear token cookies
    }

    // Refresh tokens
    @Post('refresh')
    async refresh() {
        // Check refresh token and if it is valid and not revoked generate new tokens
        // Return new tokens
    }

    @Post('request-password-reset')
    async requestPasswordReset() {
        // Send password reset email to the user
        // Signal email sent
    }

    @Post('reset-password')
    async resetPassword() {
        // Validate and hash new password
        // Update user account
        // Signal success
    }

}
