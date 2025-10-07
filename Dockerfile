# ===========================
# Stage 1: Build
# ===========================
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source code and build Next.js
COPY . .
RUN npm run build

# ===========================
# Stage 2: Production
# ===========================
FROM node:20-alpine AS production

WORKDIR /app

# Copy only production dependencies and build output
COPY --from=builder /app/package*.json ./
RUN npm install --production
COPY --from=builder /app/.next ./.next

# Expose Next.js port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]

