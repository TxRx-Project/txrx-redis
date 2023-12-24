import * as Index from '../';
import RedisConnector from '../src/redisConnector';

test('index exports', () => {
    expect(Index.RedisConnector).toBe(RedisConnector);
});

test('index scope', () => {
    expect(Object.keys(Index).sort()).toEqual([
        'RedisConnector'
    ].sort())
});
