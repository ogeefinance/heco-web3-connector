interface HoubiEcoChain {
  send: unknown;
  enable: () => Promise<string[]>;
  on?: (method: string, listener: (...args: any[]) => void) => void;
  removeListener?: (method: string, listener: (...args: any[]) => void) => void;
}

declare interface Window {
  HoubiEcoChain?: HoubiEcoChain;
}

declare const __DEV__: boolean;
