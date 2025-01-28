export interface resJson<T> {
  records: T;
}

export interface resJsonDetail<T> {
  data: T;
  id: string;
  displayName: string;
  version: string;
}
