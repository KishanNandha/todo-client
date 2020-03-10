export class Todo {

    constructor(
      public todoId: number,
      public todoName: string,
      public todoDesc: string,
      public inputDate: Date,
      public updateDate: Date,
      public completed: string,
      public userId: number
    ) {
    }
}
