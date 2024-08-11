import path from 'path';

export default function getPathToPageFile(url) {
  const rootFolder = path.resolve(import.meta.dirname, '..');
  let pathToPageFile = path.join(rootFolder, 'pages');

  switch (url) {
    case '/':
    case '/home':
      pathToPageFile = path.join(pathToPageFile, 'index.html');
      break;
    case '/about':
      pathToPageFile = path.join(pathToPageFile, 'about.html');
      break;
    case '/contact-me':
      pathToPageFile = path.join(pathToPageFile, 'contact-me.html');
      break;
    default:
      pathToPageFile = path.join(pathToPageFile, '404.html');
      break;
  }

  return pathToPageFile;
}
