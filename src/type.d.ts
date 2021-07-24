interface IContext {
  title: string;
  id: number | string;
}

type ContextType = {
  tasks: IContext[];
  editTodo: IContext | undefined;
  addTask: (title: string) => void;
  deleteTask: (id: number | string) => void;
  clearTask: () => void;
  findTask: (id: number | string) => void;
  editTask: (title: string, id: number | string) => void;
};
