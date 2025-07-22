interface IFetchWrapper<T> extends RequestInit {
  parseJson?: boolean;
  url: string;
  includeCredentials?: boolean;
}
interface IApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
}

export type { IFetchWrapper, IApiResponse };
