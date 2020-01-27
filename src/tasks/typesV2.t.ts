export interface ArticleName {
  name: string;
  style?: {
    color?: string;
    bold?: boolean;
    underline?: string;
  };
}

export interface Group {
  id: number;
  groupable: boolean;
}

export interface Money {
  price: number;
  currency: string;
}

export interface taskType {
  article: ArticleName;
  group: Group;
  price: Money;
}
