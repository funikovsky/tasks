const path = "/users/download/index.html"

function isHtml(str) {
    const htmlStr = '.html'
    const pathStr = str.slice(-5);
      
    return htmlStr.includes(pathStr)
} 

console.log(isHtml(path))