# Step 1: Use an official Node.js base image
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Step 4: Copy the rest of your application code
COPY . .

# Step 5: Expose the port your server listens on
EXPOSE 3000

# Step 6: Command to start the application
CMD ["node", "server.js"]