FROM node:20-alpine

WORKDIR /app
ENV NODE_ENV=production

# Copy manifest and install production deps (works even if build context is repo root)
COPY backend/package*.json ./
RUN npm ci --omit=dev

# Copy source
COPY backend/. .

# Ensure writable uploads directory for multer
RUN mkdir -p /app/uploads && chown -R node:node /app/uploads
USER node

EXPOSE 5000
CMD ["node", "server.js"]
