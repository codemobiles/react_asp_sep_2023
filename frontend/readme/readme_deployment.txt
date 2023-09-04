# frontend
   - yarn build
   - npx serve -s build 
   - production -> readme_nginx


# backend ts
  - set .evn to root backend folder
  - tsc
  - node -r dotenv/config src/index.ts
  - pm2 run
    + cd build
    + pm2 init simple
    + pm2 start ecosystem.config.js

# using yarn build
    "scripts": {
          "build": "tsc && cp *.key .env ecosystem.config.js ./build",      
    }

