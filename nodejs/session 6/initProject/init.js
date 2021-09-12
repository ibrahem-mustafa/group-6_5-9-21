const fs = require('fs')

const arg = process.argv

const projectPath = arg[2]
// ../../session\ 5/blog => ['..', '..', 'session 5', 'blog']
const projectPathSplitter = projectPath.split('/')
const projectName = projectPathSplitter.pop()
const projectRootPath = projectPathSplitter.join('/');


fs.mkdirSync(projectPath);

const viewsFolderPath = `${projectPath}/views`
fs.mkdirSync(viewsFolderPath)

const assetsFolderPath = `${projectPath}/assets`
fs.mkdirSync(assetsFolderPath);

const assetsNestedFoldersName = ['js', 'images', 'style', 'fonts']

assetsNestedFoldersName.forEach(fName => {
    fs.mkdirSync(`${assetsFolderPath}/${fName}`);
})

const jsFilePath = `${assetsFolderPath}/js/main.js`;
fs.writeFileSync(jsFilePath, 'console.log("Works")')

const cssFilePath = `${assetsFolderPath}/style/style.css`;
fs.writeFileSync(cssFilePath, "");


const htmlContent = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${projectName}</title>
    <link rel="stylesheet" href="./assets/style/style.css" />
  </head>
  <body>

    <script src="./assets/js/main.js" ></script>
  </body>
</html>
`

const indexFilePath = `${projectPath}/index.html`
fs.writeFileSync(indexFilePath, htmlContent);