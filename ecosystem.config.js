module.exports = {
  apps: [
    {
      name: 'GoUmrah-Konvensional', // Application name
      script: 'pnpm',               // Use pnpm to start the app
      args: 'run start',            // Run "pnpm run start"
      cwd: '/home/www/goumrah-konvensional', // Set working directory
      exec_mode: 'fork',            // ✅ Force fork mode (no cluster mode)
      instances: 1,                 // ✅ Single instance
      env: {
        NODE_ENV: 'production',
      },
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      error_file: '/var/log/pm2/GoUmrah-Konvensional-error.log', // Error log path
      out_file: '/var/log/pm2/GoUmrah-Konvensional-out.log',     // Output log path
      merge_logs: true,                // Merge logs from all PM2 instances
      autorestart: true,                // Auto-restart on failure
      watch: ['src', 'config'],         // Monitor these directories
      ignore_watch: ['node_modules', 'logs'], // Ignore changes in these directories
      max_memory_restart: '1G',         // Restart if memory exceeds 1GB
      restart_delay: 5000,              // Delay between restarts (5s)
      exp_backoff_restart_delay: 100,   // Exponential backoff restart delay

      // ✅ Enable PM2 Metrics for Monitoring
      pmx: true,                         // Enable PM2 metrics module
      metrics: {
        eventLoop: true,                 // Monitor Event Loop Latency
        heapUsage: true,                  // Track Heap Memory Usage
        rss: true,                        // Monitor Resident Set Size (Memory)
        cpu: true,                        // Monitor CPU Usage
        network: {
          traffic: true,                  // Monitor Network Traffic
          ports: true,                    // Monitor Open Ports
        },
        http: true,                        // Track HTTP requests
      },
    },
  ],
};
