type Work = {
  readonly id: string;
  todo: string;
  category: "Work";
  description: string;
  completed: boolean;
};

type Chores = {
  readonly id: string;
  todo: string;
  category: "Chores";
  description: string;
  completed: boolean;
};

type Gym = {
  readonly id: string;
  todo: string;
  category: "Gym";
  description: string;
  completed: boolean;
};

export type Task = Work | Chores | Gym;
