interface IFetchWrapper<T> extends RequestInit {
  parseJson?: boolean;
  url: string;
}
interface IApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
}

export type { IFetchWrapper, IApiResponse };
