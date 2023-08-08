export type Themes = "dark" | "light";

export type ThemeState = {
  theme: Themes;
  setTheme(theme: Themes): void;
};


export type Character={
    _id: string;
    name: string;
    race: string;
    gender: string;
    wikiUrl: string;
    birth: string;
    death: string;
};


export type ApiContextType={
  characterList: Character[];
  setCharacterList(characterList: Character[]):void;
  getCharacterList():void;
  search: string;
  setSearch(search:string):void;
};