FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the app
RUN npm run build

# Install production dependencies only
RUN npm ci --only=production

# Start the server
CMD ["npm", "start"] 