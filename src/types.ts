export type Task = {
  readonly id: string;
  todo: string;
  category: string;
  description?: string;
  completed: boolean;
};
