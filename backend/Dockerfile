FROM node:20-alpine

# Work inside backend folder
WORKDIR /app/backend
ENV NODE_ENV=production

# Copy manifests from the repo root (expects build context at repo root)
COPY backend/package.json backend/package-lock.json ./
RUN if [ -f package-lock.json ]; then npm ci --omit=dev; else npm install --omit=dev; fi

# Copy backend source
COPY backend/. .

# Ensure writable uploads directory for multer
RUN mkdir -p /app/backend/uploads && chown -R node:node /app/backend/uploads
USER node

EXPOSE 5000
CMD ["node", "server.js"]
