import jwt from 'jsonwebtoken';

export namespace Jwt {
  const jwtRegExp = /([\w_=])+.([\w_=])+.([\w\-_=+]*)/;

  export function isValid(token: string): boolean {
    if (!jwtRegExp.test(token)) return false;

    try {
      const payload = jwt.decode(token);
      if (payload === null || typeof payload === 'string' || payload.exp === undefined) return false;
      return payload.exp < Date.now();
    } catch (error) {
      return false;
    }
  }
}
