export interface IUserDTO{
    firstName: string;
    lastName: string;
}
export interface ITaskDTO{
    title: string
    description: string
}
export interface ICommentDTO{
    content: string
}
export interface IPriorityDTO{
    name: string
    color: string
}
export interface IReminderDTO{
    due_date: Date
    remind_date: Date
}