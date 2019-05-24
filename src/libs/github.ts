
const base: string = 'https://api.github.com';

const _fetch = (url: string): Promise<any> => 
  fetch(url)
    .then((response: Response) => response.json());

export const getUser = (user: string): Promise<any> => 
  _fetch(`${base}/users/${user}`);

export const getRepo = (
  user: string,
  repo: string
): Promise<any> => _fetch(`${base}/repos/${user}/${repo}`);