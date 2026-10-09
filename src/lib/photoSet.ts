// Every photo has three copies (D-10 in DECISIONS.md): 200 and 450 px wide, made by the
// owner in docs/03-design/photos/small, and the 900 px original. The browser picks the smallest
// one that is sharp enough for the space the picture fills, so a 72 px thumbnail never
// downloads the 900 px file. The 900 px file is also the `src`, the fallback.
export function photoSet(small: string, medium: string, full: string): string {
  return `${small} 200w, ${medium} 450w, ${full} 900w`
}
