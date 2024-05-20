export interface ArchwayObservable {
  subscribe: <T>(id: string, cb: (data: T) => void) => ArchwayObserver;
  once: <T>(id: string, cb: (data: T) => void) => ArchwayObserver;
}

export interface ArchwayObserver {
  unsubsribe: () => void;
}
