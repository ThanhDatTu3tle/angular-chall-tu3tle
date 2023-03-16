export interface Todo {
    id: number;
    name: string;
    status: boolean;
}

export const todos: Todo[] = [
    {
      "id": 1,
      "name": "Dậy trước 7h sáng",
      "status": false,
    },
    {
      "id": 2,
      "name": "Ăn sáng ún cafe",
      "status": false,
    },
    {
      "id": 3,
      "name": "Đi làm trước 7h30 sáng",
      "status": false,
    }
]