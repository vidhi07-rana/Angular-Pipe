import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short',
  standalone: true,
  pure: false
})
export class ShortPipe implements PipeTransform {

  transform(value: string[] | number[], direction: 'asc' | 'desc' = 'asc') {
    const sorted = [...value];

    sorted.sort((a, b) => {
      if (typeof a === 'number' && typeof b === 'number') {
        return direction === 'asc' ? a - b : b - a;
      } else if (typeof a === 'string' && typeof b === 'string') {
        return direction === 'asc' ? a.localeCompare(b) : b.localeCompare(a);
      } else {
        return 0; // This case shouldn't occur if the array is homogenous (all strings or all numbers)
      }
    });

    return sorted;
  }
}
