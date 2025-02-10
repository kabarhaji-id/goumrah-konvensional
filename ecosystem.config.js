module.exports = {
  apps: [
    {
      name: 'GoUmrah-Konvensional',        // Application name
      script: 'node_modules/.bin/next',    // Use Next.js script directly
      args: 'start',                        // Start the Next.js server
      cwd: '/home/www/goumrah-konvensional', // Set working directory
      env: {
        NODE_ENV: 'production',            // Set environment to production
        PORT: 3002,                         // Define the port (if needed)
      },
      log_date_format: 'YYYY-MM-DD HH:mm:ss', // Log date format
      error_file: '/var/log/pm2/GoUmrah-Konvensional-error.log', // Error log path
      out_file: '/var/log/pm2/GoUmrah-Konvensional-out.log',     // Output log path
      merge_logs: true,                    // Merge logs from all PM2 instances
      instances: 1,                        // Number of instances, change based on your needs
      autorestart: true,                   // Restart app on crash
      watch: false,                        // Disable file watching for production (for better performance)
      ignore_watch: ['node_modules', 'logs'], // Ignore logs & node_modules
      max_memory_restart: '1G',            // Restart app if memory exceeds 1GB
      restart_delay: 5000,                 // Delay restart by 5 seconds
      exp_backoff_restart_delay: 100,      // Exponential backoff restart delay
    },
  ],
};
