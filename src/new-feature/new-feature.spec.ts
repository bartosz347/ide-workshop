import assert from "node:assert";
import { describe } from "node:test";
import { TextAnalyser } from "./new-feature";

describe("TextAnalyser", () => {
  const textAnalyser = new TextAnalyser({
    keyWords: ["foo"],
  });
  const analysedText = textAnalyser.analyseText("foo bar");

  assert.deepStrictEqual(analysedText, { keyWordsCount: 1 });
});
