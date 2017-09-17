export default function countNodes(root) {
  let count = 0;

  if (root !== null || root !== undefined) {
    count++;
  }

  if (root.left !== null && root.left !== undefined) {
    count += countNodes(root.left);
  }

  if (root.right !== null && root.right !== undefined) {
    count += countNodes(root.right);
  }

  return count;
}
