FROM node:20-alpine

WORKDIR /app

# Install only production deps
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --omit=dev

# Copy source
COPY . .

# Ensure uploads directory exists for multer writes
RUN mkdir -p /app/uploads

EXPOSE 5000

CMD ["node", "server.js"]
