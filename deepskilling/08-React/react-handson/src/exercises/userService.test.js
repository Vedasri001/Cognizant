import { describe, it, expect, vi, afterEach } from 'vitest';
import { fetchUserName } from './userService';

// Exercise 19: Mocking - isolate the unit under test from the real network call
describe('fetchUserName', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns the user name from the mocked API response', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve({ name: 'Mocked User' }),
    });

    const name = await fetchUserName(1);

    expect(name).toBe('Mocked User');
    expect(global.fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users/1'
    );
    expect(global.fetch).toHaveBeenCalledTimes(1); // no real network call was made
  });
});
