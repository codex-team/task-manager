/**
 * Replaces item in list with new data
 *
 * @param items - array of items
 * @param item - new item data
 */
export default function getListWithItemReplaced<T extends { _id: string }>(items: T[], item: T): T[] {
  // Find index of the item
  const index = items.findIndex(x => x._id === item._id);

  if (index < 0) {
    return items;
  }
  const newState = [ ...items ];

  // Replace item at found index with new data
  newState[index] = item as T;

  return newState;
}