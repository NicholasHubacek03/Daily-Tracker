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
export interface ISubtaskDTO{
    title: string
    completed: boolean
}
export interface IRecurringDTO{
    daily:boolean
    weekly:boolean
    bi_weekly:boolean
    monthly:boolean
    bi_monthly:boolean
}