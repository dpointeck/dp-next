FROM oven/bun:1.3.5 AS base

ARG NEXT_PUBLIC_FATHOM_SITE_ID
ARG NEXT_PUBLIC_GOOGLE_SITE_VERIFY_ID

FROM base AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# Copy source files and build the application
COPY . .
RUN bun run build

# Production stage: create the final image
FROM base AS production

ENV NODE_ENV=production

WORKDIR /app

# Create a non-root user and group
RUN addgroup --system --gid 1001 bunjs && \
    adduser --system --uid 1001 --ingroup bunjs nextjs

# Copy only necessary files from the builder stage
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Copy .next with correct ownership
COPY --from=builder --chown=nextjs:bunjs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# Switch to non-root user
USER nextjs

# Expose the port Next.js runs on
EXPOSE 3000

# Start the Next.js application in production mode
CMD ["bun", "run", "start"]
