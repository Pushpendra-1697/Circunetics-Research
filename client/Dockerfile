# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire React.js frontend app to the container
COPY . .

# Build the React.js app for production
RUN npm run build

# Expose the port your React.js app listens on (if needed)
EXPOSE 3000

# Command to start the frontend server (depends on your setup)
CMD ["npm", "run", "start"]
