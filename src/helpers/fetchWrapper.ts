import { IApiResponse, IFetchWrapper } from "@/types/fetchWrapper";

//Create JSDOC and reference return types
/**
 * A wrapper around the native Fetch API that provides a more convenient and type-safe way to make HTTP requests.
 * @param url The URL to which the request is to be made.
 * @param parseJson Whether to parse the response as JSON. Defaults to true.
 * @param options The options to be passed to the native Fetch API.
 * @returns A promise that resolves to an `IApiResponse` object.
 */

export default async function fetchWrapper<T>({
  url,
  parseJson = true,
  ...options
}: IFetchWrapper<T>): Promise<IApiResponse<T>> {
  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });
    const data: IApiResponse<T> = await res.json();

    if (!res.ok) {
      const defaultMessage = "Something went wrong";
      return {
        success: false,
        message: data.message || defaultMessage,
      };
    }
    if (parseJson) {
      return {
        success: true,
        data: data.data,
      };
    } else {
      return {
        success: true,
        message: "Success",
      };
    }
  } catch (err) {
    return {
      success: false,
      message: (err as Error).message,
    };
  }
}
