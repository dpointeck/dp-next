# base node image
#FROM node:18-bullseye-slim as base
FROM node:20-bookworm-slim as base

# set for base and all layer that inherit from it
ENV NODE_ENV development

# Install all node_modules, including dev dependencies
FROM base as deps

WORKDIR /app

ADD package.json .npmrc ./
RUN npm install -g pnpm
RUN pnpm install

# Finally, build the production image with minimal footprint
FROM base

ENV NEXT_PUBLIC_FATHOM_SITE_ID=FZNGXPBT
ENV NEXT_PUBLIC_GOOGLE_SITE_VERIFY_ID=vTEzO8d5lqdjmewCVAFto1DTheaJF7IyYuuLGjQxGoQ

WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
ADD . .

CMD [ "npm", "run", "dev" ]