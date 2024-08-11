import path from 'path';

export default function getPathToFile(url) {
  let pathToFile = path.join(import.meta.dirname, 'pages');

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
