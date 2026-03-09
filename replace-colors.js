const fs = require('fs');
const path = require('path');

const dirs = ['./components', './components/sections'];
const replaceMap = {
    '#10b981': '#148be6',
    '#34d399': '#74caff',
    'ef-primary': 'ats-blue',
    'ef-accent': 'ats-blue-light',
    'glow-green': 'glow-blue',
    'metallic-green': 'metallic-blue',
    'rgba(16,185,129': 'rgba(20,139,230',
    'rgba(16, 185, 129': 'rgba(20, 139, 230',
    'rgba(52,211,153': 'rgba(116,202,255',
    'rgba(52, 211, 153': 'rgba(116, 202, 255'
};

dirs.forEach(dir => {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(file => {
        if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            const filePath = path.join(dir, file);
            let content = fs.readFileSync(filePath, 'utf8');
            let changed = false;
            for (const [key, value] of Object.entries(replaceMap)) {
                if (content.includes(key)) {
                    content = content.split(key).join(value);
                    changed = true;
                }
            }
            if (changed) {
                fs.writeFileSync(filePath, content);
                console.log(`Updated ${filePath}`);
            }
        }
    });
});
