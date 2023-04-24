import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray',
  pure: true,
})
export class FiltroArrayPipe implements PipeTransform {
  transform(array: any[], arg: any): any[] {
    if (array.length === 0 || arg === undefined) return array;

    const filtro: string = arg.toLowerCase();

    return array.filter((item) => item.toLowerCase().includes(filtro));
  }
}
