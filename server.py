#!/usr/bin/env python3
"""
Simple HTTP Server for RRΞBΣLZ Website
This script runs a basic web server to host the static HTML/CSS/JavaScript files.
"""

import http.server
import socketserver
import os

# Configuration
PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def run_server():
    """Start the HTTP server"""
    with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
        print(f"╔══════════════════════════════════════════════════╗")
        print(f"║  RRΞBΣLZ Website Server                          ║")
        print(f"╚══════════════════════════════════════════════════╝")
        print(f"\n✓ Server running at: http://localhost:{PORT}")
        print(f"✓ Press Ctrl+C to stop the server\n")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n✓ Server stopped successfully")
            httpd.shutdown()

if __name__ == "__main__":
    run_server()
