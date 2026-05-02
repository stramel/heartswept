const JP: Record<string, string> = {
  Haiku: "俳句",
  Poem: "詩",
  Story: "物語",
  Featured: "特集",
  "About the Author": "著者について",
  "Recent Works": "最新作",
  "More Haiku": "もっと俳句",
  "More Poem": "もっと詩",
  "More Story": "もっと物語",
};

export function jp(key: string): string {
  return JP[key] ?? key;
}
