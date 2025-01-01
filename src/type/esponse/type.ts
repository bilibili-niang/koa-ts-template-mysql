// 返回体的格式的接口类型
export interface ResponseType {
  code: number;
  data: any;
  success: boolean;
  msg: string;
}