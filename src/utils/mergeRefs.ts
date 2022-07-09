export function mergeRefs(...refs: any) {
  return (node: any) => {
    for (let i = 0; i < refs.length; i++) {
      const ref = refs[i];

      if (ref == null) continue;

      if (typeof ref === "object") {
        ref.current = node;
      } else if (typeof ref == "function") {
        ref(node);
      }
    }
  };
}
