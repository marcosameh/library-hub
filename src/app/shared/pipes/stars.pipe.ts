import { Pipe, PipeTransform } from '@angular/core';

/**
 * Turns a 0–5 rating into 5 star characters.
 *   3.5 → '★★★½☆'   4.3 → '★★★★☆'   null → '☆☆☆☆☆'
 * Pure (the default): only re-runs when the input value changes.
 */
@Pipe({
  name: 'stars',
})
export class StarsPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    // keep it between 0 and 5, treat null/undefined as 0
    const rating = Math.min(5, Math.max(0, value ?? 0));

    const full = Math.floor(rating);
    const half = rating - full >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;

    return '★'.repeat(full) + '½'.repeat(half) + '☆'.repeat(empty);
  }
}
