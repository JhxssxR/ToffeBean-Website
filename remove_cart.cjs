/* eslint-disable */  
const fs = require('fs');
const path = require('path');
const dir = 'c:/Users/asus/Documents/Xammppp/htdocs/ToffeeBean/resources/views';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.blade.php')).map(f => path.join(dir, f));

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    const newContent = content.replace(/\s*<button className="[^"]*w-11 h-11[^"]*">\s*<Icons\.ShoppingBag[^>]*\/>\s*<\/button>/g, '');
    if (content !== newContent) {
        fs.writeFileSync(f, newContent);
        console.log('Updated ' + f);
    }
});
