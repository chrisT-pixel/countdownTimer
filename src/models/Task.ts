import { BaseTask } from "./BaseTask";

export interface Task extends BaseTask {
    id: string;
    isDone: boolean;
    isActive: boolean;
    isCurrent: boolean;
    time: number;
}