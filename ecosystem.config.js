module.exports = {
  apps: [
    {
      name: "api-dtmoney",
      script: "./src/server.js",
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: "development",
        SERVER_PORT: 3333
      },
      env_production: {
        NODE_ENV: "production",
        SERVER_PORT: 8080
      }
    }
  ]
};
