export default function ownerDocument(node?: Element) {
  return (node && node.getRootNode()) || document
}
