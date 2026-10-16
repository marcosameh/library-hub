import { StarsPipe } from './stars.pipe';

describe('StarsPipe', () => {
  const pipe = new StarsPipe();

  it('shows 5 empty stars for 0', () => {
    expect(pipe.transform(0)).toBe('☆☆☆☆☆');
  });

  it('shows a half star for 3.5', () => {
    expect(pipe.transform(3.5)).toBe('★★★½☆');
  });

  it('shows 5 full stars for 5', () => {
    expect(pipe.transform(5)).toBe('★★★★★');
  });

  it('rounds down to the nearest half', () => {
    expect(pipe.transform(4.3)).toBe('★★★★☆');
    expect(pipe.transform(4.7)).toBe('★★★★½');
  });

  it('treats null/undefined as 0 and clamps out-of-range values', () => {
    expect(pipe.transform(null)).toBe('☆☆☆☆☆');
    expect(pipe.transform(undefined)).toBe('☆☆☆☆☆');
    expect(pipe.transform(7)).toBe('★★★★★');
    expect(pipe.transform(-1)).toBe('☆☆☆☆☆');
  });
});
