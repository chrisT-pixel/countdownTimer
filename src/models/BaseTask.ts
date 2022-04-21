/**
 * Represents base task type.
 */
export interface BaseTask {
  task: string;
  time: number | string;
}

export interface BaseTaskImport extends BaseTask {
    time: string;
}

/**
 * Type guard.
 */
export const canBeBaseTask = (obj: unknown): obj is BaseTask =>
  (obj as BaseTask).task != undefined && (obj as BaseTask).time != undefined
  && typeof (obj as BaseTaskImport).task === "string" && /^\d+$/.test((obj as BaseTaskImport).time);
