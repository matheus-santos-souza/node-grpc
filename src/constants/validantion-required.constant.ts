
export default function validationRequired<T>(object: T): string[] {
    const camposFaltando: string[] = [];
    
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        const valor = object[key as keyof T];
        if (!valor) {
          camposFaltando.push(key);
        }
      }
    }
    
    return camposFaltando;
  }