import path from 'path';

export default function getPathToFile(url) {
  const rootFolder = path.resolve(import.meta.dirname, '..');
  let pathToFile = path.join(rootFolder, 'pages');

  switch (url) {
    case '/':
    case '/home':
      pathToFile = path.join(pathToFile, 'index.html');
      break;
    case '/about':
      pathToFile = path.join(pathToFile, 'about.html');
      break;
    case '/contact-me':
      pathToFile = path.join(pathToFile, 'contact-me.html');
      break;
    default:
      pathToFile = path.join(pathToFile, '404.html');
      break;
  }

  return pathToFile;
}
