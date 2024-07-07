FROM node:22-alpine

# Prepare dependencies
WORKDIR /app
COPY package.json .
RUN npm install --omit=dev

# Copy source code
COPY . .
RUN npm run build

# Expose port and run the app
EXPOSE 3000
CMD ["node", "dist/main"]