import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pascalCase',
})
export class PascalCasePipe implements PipeTransform {
  transform(str: string): string {
    const palavras = str.toLowerCase().split(' ');
    const resultado = palavras
      .map((palavra) => palavra.replace(palavra[0], palavra[0].toUpperCase()))
      .join(' ');

    return resultado;
  }
}
