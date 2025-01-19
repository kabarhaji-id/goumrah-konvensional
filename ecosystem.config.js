module.exports = {
  apps: [
    {
      name: 'GoUmrah-Konvensional',        // Application name
      script: 'pnpm',                      // Use pnpm as the script
      args: 'run start',                   // Run "pnpm run start"
      cwd: '/home/www/goumrah-konvensional', // Set the current working directory
      env: {
        NODE_ENV: 'production',            // Set environment to production
      },
      log_date_format: 'YYYY-MM-DD HH:mm:ss', // Optional: set a log date format
      error_file: '/var/log/pm2/GoUmrah-Konvensional-error.log', // Optional: set error log path
      out_file: '/var/log/pm2/GoUmrah-Konvensional-out.log', // Optional: set output log path
      merge_logs: true,                    // Merge logs from all PM2 instances
      instances: 1,                        // Number of instances, you can adjust this based on your needs
      autorestart: true,                   // Enable automatic restart on failure
      watch: false,                        // Disable file watching
      max_memory_restart: '1G',            // Automatically restart app if it exceeds 1GB memory
    },
  ],
};