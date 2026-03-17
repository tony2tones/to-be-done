export interface Country {
  flags: Flags;
  name: Name;
  cca3: string;
  population: number;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: Record<string, NativeName>;
}

export interface NativeName {
  official: string;
  common: string;
}