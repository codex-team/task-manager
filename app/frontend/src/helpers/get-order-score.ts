/* eslint-disable @typescript-eslint/no-magic-numbers */
import Task from 'types/entities/task';

/**
 * Calculates new order score based on new element index
 *
 * @param tasks - list of tasks sorted by orderScore
 * @param targetIndex - task index after movement
 * @param sourceIndex - task index before movement
 */
export default function getOrderScore(tasks: Task[], targetIndex: number, sourceIndex: number): number {
  if (targetIndex === 0) {
    return Math.round(tasks[0].orderScore + 1);
  } else if (targetIndex === tasks.length - 1) {
    return tasks[tasks.length - 1].orderScore / 2;
  } else {
    if (targetIndex > sourceIndex) {
      return (tasks[targetIndex].orderScore + tasks[targetIndex + 1].orderScore) / 2;
    } else {
      return (tasks[targetIndex].orderScore + tasks[targetIndex - 1].orderScore) / 2;
    }
  }
}