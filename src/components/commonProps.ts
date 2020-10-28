export interface IOptions {
    label: string,
    value: any
  };

  export interface IMinimunEventData {
    target: {
      id: string,
      name: string,
      value: any
    }
  }

  export type MinimunEventCallBack = (e: IMinimunEventData) => void; // for onChange, onBlur handlings