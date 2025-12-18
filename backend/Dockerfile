FROM node:20-alpine

WORKDIR /app
ENV NODE_ENV=production

# Copy manifest and install production deps (fall back to npm install if lock is absent)
COPY package.json package-lock.json ./
RUN if [ -f package-lock.json ]; then npm ci --omit=dev; else npm install --omit=dev; fi

# Copy source
COPY . .

# Ensure writable uploads directory for multer
RUN mkdir -p /app/uploads && chown -R node:node /app/uploads
USER node

EXPOSE 5000
CMD ["node", "server.js"]
