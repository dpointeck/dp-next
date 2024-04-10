# base node image
#FROM node:18-bullseye-slim as base
FROM oven/bun:1 as base

# set for base and all layer that inherit from it
ENV NODE_ENV production

# Install all node_modules, including dev dependencies
FROM base as deps

WORKDIR /app

ADD package.json .npmrc ./
RUN bun install --include=dev

# Setup production node_modules
FROM base as production-deps

WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules
ADD package.json .npmrc ./

# Build the app
FROM base as build

WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules

ADD . .
RUN bun run build

# Finally, build the production image with minimal footprint
FROM base

ENV NODE_ENV="production"


WORKDIR /app

COPY --from=production-deps /app/node_modules /app/node_modules

COPY --from=build /app/.contentlayer /app/.contentlayer
COPY --from=build /app/.next /app/.next
COPY --from=build /app/public /app/public
COPY --from=build /app/package.json /app/package.json

ENV NEXT_PUBLIC_FATHOM_SITE_ID=FZNGXPBT
ENV NEXT_PUBLIC_GOOGLE_SITE_VERIFY_ID=vTEzO8d5lqdjmewCVAFto1DTheaJF7IyYuuLGjQxGoQ

USER bun
CMD [ "bun", "run", "start" ]