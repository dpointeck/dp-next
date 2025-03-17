# Base Node image
FROM node:20-bookworm-slim as base

# Define build arguments for public environment variables
ARG NEXT_PUBLIC_FATHOM_SITE_ID
ARG NEXT_PUBLIC_GOOGLE_SITE_VERIFY_ID

# Build stage: install dependencies and build the app
FROM base as builder

WORKDIR /app

# Copy package files
COPY package.json .npmrc ./

# Install pnpm and dependencies
RUN npm install -g pnpm
COPY pnpm-lock.yaml* ./
RUN pnpm install

# Copy source files and build the application
COPY . .
RUN pnpm build

# Production stage: create the final image
FROM base as production

ENV NODE_ENV=production
# Public env variables will be set at runtime or via build args

WORKDIR /app

# Copy only necessary files from the builder stage
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port Next.js runs on
EXPOSE 3000

# Start the Next.js application in production mode directly with Node
CMD ["node", "node_modules/next/dist/bin/next", "start"]