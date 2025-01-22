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
      error_file: '/var/log/pm2/GoUmrah-Konvensional-error.log', // Error log path
      out_file: '/var/log/pm2/GoUmrah-Konvensional-out.log',     // Output log path
      merge_logs: true,                    // Merge logs from all PM2 instances
      instances: 1,                        // Number of instances, you can adjust this based on your needs
      autorestart: true,                   // Enable automatic restart on failure
      watch: ['src', 'config'],            // Monitor changes in specific directories (adjust based on your project structure)
      ignore_watch: ['node_modules', 'logs'], // Ignore changes in these directories
      max_memory_restart: '1G',            // Automatically restart app if it exceeds 1GB memory usage
      restart_delay: 5000,                 // Delay in ms between restarts (to prevent rapid restarts)
      exp_backoff_restart_delay: 100,      // Exponential backoff delay for retries
      // Enabling memory and system metrics for the app
      pm2_logrotate: true,                 // Enable log rotation for better memory usage tracking
    },
  ],
  // Optional: Enable system metrics for better memory tracking
  metrics: {
    network: true, // Enable network metrics
    heap: true,    // Enable heap memory tracking
    http: true,    // Track HTTP requests (if applicable)
  },
};
