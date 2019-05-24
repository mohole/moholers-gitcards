import React from 'react';
import Card from './Card';
import { AppData, CardData } from '../libs/types';

const App: React.FC<AppData> = (props) => {
  const list: CardData[] = props.list || [];

  return (
    <div className="container">
      <h1>Moholers GitCards</h1>
      <section>
        {list.map( (data: CardData, i: number) => 
          <Card data={data} key={i} />
        )}
      </section>
    </div>
  );
}

export default App;
