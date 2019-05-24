
export interface CardData {
  user: string;
  repo: string;
}

export interface CardState extends CardData {
  name: string;
  avatar: string;
  description: string;
}

export interface CardProps {
  data: CardData;
}

export interface AppData {
  list: CardData[];
}