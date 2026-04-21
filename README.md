# Rebox - Give it a second life 🎁

A sustainable platform connecting people who have cardboard boxes with those who need them.

## Quick Start

### Option 1: Using npm (Python Server)
```bash
npm run dev
```
Then open: **http://localhost:3000**

### Option 2: Direct Python Command
```bash
python3 server.py
```
Then open: **http://localhost:3000**

### Option 3: Using Node.js
```bash
node server.js
```
Then open: **http://localhost:3000**

## Project Structure

```
Rebox-Front/
├── index.html           # Main entry point
├── styles.css           # Global styles
├── app.js               # Main app script
├── server.py            # Python dev server (recommended)
├── server.js            # Node.js dev server (alternative)
├── components/          # Reusable UI components
│   ├── nav.js           # Navigation bar
│   ├── hero.js          # Hero section
│   ├── waitlist.js      # Waitlist form
│   ├── how-it-works.js  # How it works steps
│   ├── impact.js        # Impact stats
│   ├── mission.js       # Mission statement
│   └── footer.js        # Footer
└── package.json         # Project config
```

## Features

✅ **Responsive Design** - Works on all devices
✅ **Component-based** - Easy to maintain and extend
✅ **No Dependencies** - Pure HTML/CSS/JS + Python
✅ **Fast & Light** - Minimal overhead
✅ **Ready for Backend** - Python server for future integration

## Development

The project uses a component architecture where each UI section is a separate JavaScript module. This makes it easy to:
- Add new features
- Modify existing sections
- Scale to a full Python backend later

### Adding a New Component

1. Create a new file in `components/` folder:
   ```javascript
   // components/my-component.js
   function renderMyComponent() {
     return `<section>My Content</section>`;
   }
   ```

2. Add to `app.js`:
   ```javascript
   ${renderMyComponent()}
   ```

3. Link in `index.html`:
   ```html
   <script src="components/my-component.js"></script>
   ```

## Server Options

### Python Server (Recommended)
- ✅ No Node dependencies
- ✅ Ready for Python backend
- ✅ Simple and robust
- ✅ Built-in security (prevents directory traversal)

### Node.js Server
- ✅ Works if Node is installed
- ✅ Lightweight
- ⚠️ Requires Node.js

## Troubleshooting

**Port 3000 already in use?**
```bash
# Kill the process
lsof -i :3000
kill -9 <PID>

# Or use a different port
python3 server.py  # Edit server.py to change PORT
```

**Can't find server.py?**
```bash
# Make sure you're in the right directory
cd /Users/vini/Rebox-Front
python3 server.py
```

## Ready for Next Steps

This project is structured to scale:
- ✅ Components ready for React/Vue later
- ✅ Python server ready for Flask/Django backend
- ✅ CSS organized and modular
- ✅ No build step needed

---

Made with ❤️ for sustainability
