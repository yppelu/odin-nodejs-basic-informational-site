import getPathToPageFile from './getPathToPageFile.js';

export default function middleware(req, res) {
  const pathToPageFile = getPathToPageFile(req.url);

  res.sendFile(pathToPageFile, (error) => {
    if (error) res.send('Sorry, an error has occurred.');
  });
}
