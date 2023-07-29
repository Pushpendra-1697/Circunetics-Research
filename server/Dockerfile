# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the container
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the entire Node.js backend app to the container
COPY . .

# Set the environment variable for the backend
ENV NODE_mongoURL=mongodb+srv://Pushpendra:Push@cluster0.s3qifk4.mongodb.net/Circunetics?retryWrites=true&w=majority
ENV NODE_PORT=8080
ENV NODE_Salt_rounds = 5
ENV NODE_secret_key = masai

# Expose the port your Node.js app listens on
EXPOSE 8080

# Command to start the backend server (depends on your setup)
CMD ["npm", "run", "server"]
