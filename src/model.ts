export interface Task{
    [x: string]: any;
    id:number;
    task: string;
    time: number;
    isDone: boolean;
    isActive: boolean;
    isCurrent: boolean;
}