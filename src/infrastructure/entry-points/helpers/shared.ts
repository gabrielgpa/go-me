export const isObject = (fn: any): fn is object => typeof fn === 'object';

export function validateObjectId(param: any): boolean {
  const regExp = /^[0-9a-fA-F]{24}$/;
  return regExp.test(param);
}

export function map(data: any): any {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { _id, ...rest } = data;
  return { ...rest, id: _id };
}
