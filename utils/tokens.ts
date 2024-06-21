type TokenData = {
  key1: string;
  key2: number;
};

export function createToken(data: TokenData): string {
  const jsonData = JSON.stringify(data);
  const base64Data = btoa(jsonData);
  return base64Data;
}

export function extractToken(token: string): TokenData | null {
  try {
    const jsonData = atob(token);
    const data = JSON.parse(jsonData);
    return data;
  } catch (error) {
    console.error('Error al decodificar el token:', error);
    return null;
  }
}