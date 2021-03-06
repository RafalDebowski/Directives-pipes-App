import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'snakeCase'
})
export class SnakeCasePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    const search = new RegExp(/-/g);
    const target = '_';
    return value.replace(search, target);
  }
}
