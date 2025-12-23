FROM oven/bun:1.3.5 AS base

ARG NEXT_PUBLIC_FATHOM_SITE_ID
ARG NEXT_PUBLIC_GOOGLE_SITE_VERIFY_ID

# Build stage
FROM base AS builder
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

# Production stage
FROM base AS production
ENV NODE_ENV=production
WORKDIR /app

RUN groupadd -r -g 1001 bunjs && \
    useradd -r -u 1001 -g bunjs nextjs

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder --chown=nextjs:bunjs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

USER nextjs
EXPOSE 3000
CMD ["bun", "run", "start"]
