export default function isCurrentPath(path: string, currentPath: string) {
  return currentPath.startsWith(path);
}
