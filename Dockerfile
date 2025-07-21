# Multi-stage build for minimal image size and RAM usage
# Stage 1: Build stage
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files first for better layer caching
COPY package*.json ./

# Install dependencies with production optimizations
RUN npm i

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production stage with minimal footprint
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy built application from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create config directory and set permissions
RUN mkdir -p /config && chmod 755 /config

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 