export interface Itask {
  _id: string;
  name: string;
  completed: boolean;
  subtasks?: ISubTasks[];
}

export interface ISubTasks {
  parent_id: string;
  _id: string;
  name: string;
  completed: boolean;
}
