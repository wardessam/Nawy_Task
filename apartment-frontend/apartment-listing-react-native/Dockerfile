# Use the official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source files
COPY . ./

# Expose port for Metro bundler
EXPOSE 8081

# Start the React Native Metro bundler
CMD ["npx", "react-native", "start"]
