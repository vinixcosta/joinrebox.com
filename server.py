#!/usr/bin/env python3
import http.server
import socketserver
import os
from urllib.parse import urlparse
import mimetypes

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Parse the URL
        parsed_path = urlparse(self.path).path
        
        # Default to index.html for root
        if parsed_path == '/' or parsed_path == '':
            parsed_path = '/index.html'
        
        # Construct file path
        file_path = os.path.join(DIRECTORY, parsed_path.lstrip('/'))
        
        # Security check - prevent directory traversal
        file_path = os.path.abspath(file_path)
        if not file_path.startswith(DIRECTORY):
            self.send_error(403)
            return
        
        # Check if file exists
        if os.path.isfile(file_path):
            try:
                self.send_response(200)
                # Guess content type
                content_type, _ = mimetypes.guess_type(file_path)
                if content_type is None:
                    content_type = 'application/octet-stream'
                self.send_header('Content-type', content_type)
                self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
                self.end_headers()
                with open(file_path, 'rb') as f:
                    self.wfile.write(f.read())
            except Exception as e:
                self.send_error(500, str(e))
        else:
            self.send_error(404)

if __name__ == '__main__':
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"🚀 Server running at http://localhost:{PORT}/")
        print(f"📂 Serving files from: {DIRECTORY}")
        print(f"Press Ctrl+C to stop the server")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n✓ Server stopped")
