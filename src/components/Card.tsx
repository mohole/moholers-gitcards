import React, { 
  useState,
  useEffect
} from 'react';
import { 
  CardProps, 
  CardState 
} from '../libs/types';
import { getUser, getRepo } from '../libs/github';

const mock: CardState = {
  user: 'user',
  repo: 'repo',
  name: 'Some User',
  avatar: 'https://randomuser.me/api/portraits/lego/1.jpg',
  description: 'Some description title'
}

const Card: React.FC<CardProps> = (props) => {
  const base: string = 'https://github.com/';
  const [state, setState] = useState(mock);

  useEffect(() => {
    const { user, repo } = {...props.data};

    Promise.all([
      getUser(user),
      getRepo(user, repo)
    ])
      .then(data => ({
        user,
        repo,
        name: data[0].name,
        avatar: data[0].avatar_url,
        description: data[1].description
      }))
      .then((newState: CardState) => setState(newState));
  }, [props.data]);

  return (
    <div className="card">
      <div className="card-body">
        <article>
          <img 
            src={state.avatar}
            alt={state.user}
          />
          <section>
            <h5 className="card-title">{state.repo}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{state.name}</h6>
          </section>
        </article>
        <p className="card-text">{state.description}</p>
        <div className="buttons">
          <a
            href={base + state.user}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >{state.user}'s profile</a>
          <a
            href={`${base}${state.user}/${state.repo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >{state.repo} repository</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
