/* eslint-disable @typescript-eslint/no-magic-numbers */
import Task from 'types/entities/task';

/**
 * Calculates new order score based on new element index.
 * Tasks array is supposed to be sorted in descending order.
 *
 * @param tasks - list of tasks sorted by orderScore sorted in descending order
 * @param targetIndex - task index after movement
 * @param sourceIndex - task index before movement
 */
export function getOrderScoreDesc(tasks: Task[], targetIndex: number, sourceIndex: number): number {
  if (targetIndex === 0) {
    return Math.round(tasks[0].orderScore + 1);
  } else if (targetIndex === tasks.length - 1) {
    return tasks[tasks.length - 1].orderScore / 2;
  } else {
    return getOrderScoreForMiddleItem(tasks, targetIndex, sourceIndex);
  }
}

/**
 * Calculates new order score based on new element index.
 * Tasks array is supposed to be sorted in ascending order.
 *
 * @param tasks - list of tasks sorted by orderScore sorted in ascending order
 * @param targetIndex - task index after movement
 * @param sourceIndex - task index before movement
 */
export function getOrderScoreAsc(tasks: Task[], targetIndex: number, sourceIndex: number): number {
  if (targetIndex === 0) {
    return tasks[0].orderScore / 2;
  } else if (targetIndex === tasks.length - 1) {
    return Math.round(tasks[tasks.length - 1].orderScore + 1);
  } else {
    return getOrderScoreForMiddleItem(tasks, targetIndex, sourceIndex);
  }
}

/**
 * Returns order score for item in the middle of array
 *
 * @param tasks - list of tasks sorted by orderScore
 * @param targetIndex - task index after movement
 * @param sourceIndex - task index before movement
 */
function getOrderScoreForMiddleItem(tasks: Task[], targetIndex: number, sourceIndex: number): number {
  let nextItemIndex;

  if (targetIndex > sourceIndex) {
    nextItemIndex = targetIndex + 1;
  } else {
    nextItemIndex = targetIndex - 1;
  }

  return (tasks[targetIndex].orderScore + tasks[nextItemIndex].orderScore) / 2;
}