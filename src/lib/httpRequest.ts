import axios, { AxiosError, AxiosHeaders, AxiosRequestConfig, AxiosResponse } from 'axios';

// サーバー通信時の共通設定定義
const api = axios.create({
  baseURL: 'http://localhost:8080', // ベースURLを指定
  timeout: 10000, // ミリ秒指定=10秒
  headers: { 'Content-Type': 'application/json' },
});

/**
 * GETリクエスト
 * @param url リクエスト先
 * @param callback コールバック関数
 * @param mockData モック用データ(開発時のみ使用)
 */
export const doGet = (url: string, callback: (res: AxiosResponse) => void, mockData?: any) => {
  const options: AxiosRequestConfig = { url, method: 'GET' };
  mockData ? mockCall(options, callback, mockData) : call(options, callback);
};

/**
 * POSTリクエスト
 * @param url リクエスト先
 * @param data リクエストデータ
 * @param callback コールバック関数
 * @param mockData モック用データ(開発時のみ使用)
 */
export const doPost = (
  url: string,
  data: any,
  callback: (res: AxiosResponse) => void,
  mockData?: any
) => {
  const options: AxiosRequestConfig = { url, method: 'POST', data };
  mockData ? mockCall(options, callback, mockData) : call(options, callback);
};

/**
 * PUTリクエスト
 * @param url リクエスト先
 * @param data リクエストデータ
 * @param callback コールバック関数
 * @param mockData モック用データ(開発時のみ使用)
 */
export const doPut = (
  url: string,
  data: any,
  callback: (res: AxiosResponse) => void,
  mockData?: any
) => {
  const options: AxiosRequestConfig = { url, method: 'PUT', data };
  mockData ? mockCall(options, callback, mockData) : call(options, callback);
};

/**
 * DELETEリクエスト
 * @param url リクエスト先
 * @param callback コールバック関数
 * @param mockData モック用データ(開発時のみ使用)
 */
export const doDelete = (url: string, callback: (res: AxiosResponse) => void, mockData?: any) => {
  const options: AxiosRequestConfig = { url, method: 'DELETE' };
  mockData ? mockCall(options, callback, mockData) : call(options, callback);
};

/**
 * 通信処理本体
 * @param options axios設定情報
 * @param callback コールバック関数
 */
const call = async (
  options: AxiosRequestConfig,
  callback: (res: AxiosResponse) => void
): Promise<any> => {
  await api
    .request(options)
    .then((res: AxiosResponse) => {
      callback(res);
    })
    .catch((e: AxiosError) => {
      console.log(e);
      if (isUnauthorized(e)) {
        // TODO:ログイン画面表示
      } else {
        alertErrorMessage(e);
      }
    });
};

/**
 * 認証エラーかどうかを判定
 * @param e axiosエラー情報
 * @returns 認証エラーの場合true
 */
const isUnauthorized = (e: AxiosError<unknown, any>): boolean => {
  if (axios.isAxiosError(e)) {
    // 認証エラー判定
    return e.response?.status === 401;
  }
  return false;
};

/**
 * alert表示するメッセージ
 * @param e axiosエラー情報
 */
const alertErrorMessage = (e: AxiosError<unknown, any>): void => {
  if (e.response?.data) {
    alert(e.response?.data);
  } else {
    alert(e.message);
  }
};

// --------------------------------
// 以降モック時の関数定義
// --------------------------------
/**
 * 通信処理本体(モック用)
 * @param options axios設定情報
 * @param callback コールバック関数
 * @param mockData モックレスポンスデータ
 */
const mockCall = (
  options: AxiosRequestConfig,
  callback: (res: AxiosResponse) => void,
  mockData: any = ''
): void => {
  console.log(options);
  // モックのレスポンス設定
  const dummyRes: AxiosResponse = createDummyRes(mockData);
  // リクエストをモック化
  mockRequest(dummyRes)
    .then((res: AxiosResponse) => {
      callback(res);
    })
    .catch((e: AxiosError) => {
      console.log(e);
      if (isUnauthorized(e)) {
        // TODO:ログイン画面表示
      } else {
        alertErrorMessage(e);
      }
    });
};

/**
 * モック通信時のレスポンス返却処理
 * @param dummyRes モックレスポンス
 * @returns axios実行時と同じPromiseを返却
 */
const mockRequest = (dummyRes: AxiosResponse): Promise<AxiosResponse<any>> => {
  const res: Promise<AxiosResponse<any>> = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (dummyRes.status >= 200 && dummyRes.status < 300) {
        resolve(dummyRes);
      } else {
        const e: AxiosError = {
          isAxiosError: true,
          response: dummyRes,
          toJSON: () => {
            return {};
          },
          name: 'mock name',
          message: 'mock error message',
        };
        reject(e);
      }
    }, 1000);
  });

  res.catch((e: AxiosError) => {
    if (isUnauthorized(e)) {
      // TODO:ログイン画面表示
    }
  });

  return res;
};

/**
 * モックレスポンスデータ作成処理
 * @param data モックレスポンスデータ
 * @returns axios実行時と同じAxiosResponseを生成後返却
 */
const createDummyRes = (data: any): AxiosResponse => {
  const response: AxiosResponse = {
    status: 200,
    statusText: 'dummy status text',
    headers: {},
    config: { headers: new AxiosHeaders() },
    data,
  };
  return response;
};
