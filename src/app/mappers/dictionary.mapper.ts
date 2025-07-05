import { RESTDictionaryEntry, DictionaryEntry } from "../interfaces";

export class DictionaryMapper {
  static RestDictionaryEntryToDictionaryEntry(restDictionary: RESTDictionaryEntry): DictionaryEntry {
    const { word, phonetics, meanings, sourceUrls } = restDictionary

    const phoneticWithAudio = phonetics.find((phonetic) => phonetic.audio !== undefined);

    return {
      phonetic: {
        word,
        phonetictText: phoneticWithAudio?.text ?? phonetics[0].text,
        audioUrl: phoneticWithAudio?.audio,
      },
      meanings,
      sourceUrls
    }
  }

  static RestDictionaryEntryArrayToDictionaryEntryArray(restDictionaryArray: RESTDictionaryEntry[]): DictionaryEntry[] {
    return restDictionaryArray.map((restDictionaryEntry) => this.RestDictionaryEntryToDictionaryEntry(restDictionaryEntry))
  }
}
