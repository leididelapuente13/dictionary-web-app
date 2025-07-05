export interface DictionaryEntry {
  phonetic: Phonetic,
  meanings: Meaning[];
  sourceUrls: string[];
}

interface Phonetic {
  word: string;
  phonetictText?: string;
  audioUrl?: string;
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

interface Definition {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example?: string;
}
