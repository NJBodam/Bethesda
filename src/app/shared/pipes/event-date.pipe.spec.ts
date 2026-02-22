import { EventDatePipe } from './event-date.pipe';

describe('EventDatePipe', () => {
  let pipe: EventDatePipe;

  beforeEach(() => {
    pipe = new EventDatePipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format a date string to a readable date', () => {
    const result = pipe.transform('2026-03-01');
    expect(result).toContain('2026');
    expect(result).toContain('March');
    expect(result).toContain('1');
  });

  it('should include the weekday in the formatted date', () => {
    const result = pipe.transform('2026-03-01');
    expect(result).toContain('Sunday');
  });
});
