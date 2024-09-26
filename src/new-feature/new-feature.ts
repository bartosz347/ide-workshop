import {
  TextAnalysisResult,
  TextAnalyserProps,
} from "./new-feature-interfaces";

export class TextAnalyser {
  analyseText(text: string): TextAnalysisResult {
    const splitText = text.split(" ");
    return {
      keyWordsCount: this.getFilteredWords(splitText).length,
    };
  }
  constructor(private readonly params: TextAnalyserProps) {}

  private getFilteredWords(splitText: string[]) {
    return splitText.filter((word) => this.params.keyWords.includes(word));
  }
}
