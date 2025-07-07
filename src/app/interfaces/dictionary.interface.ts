export interface DictionaryEntry {
  phonetic: ComposePhonetic,
  meanings: Meaning[];
  sourceUrls: string[];
}

export interface ComposePhonetic {
  word: string;
  phonetictText?: string;
  audioUrl?: string;
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

export interface Definition {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example?: string;
}
