import * as Index from '../index';
import RedisConnector from '../src/redisConnector';
import * as Types from '../types/redis.types';

test('index exports', () => {
    expect(Index.RedisConnector).toBe(RedisConnector);
    expect(Types.RedisConnection).toBe(Index.RedisConnection);
});

test('index scope', () => {
    expect(Object.keys(Index).sort()).toEqual([
        'RedisConnector',
        'RedisConnection',
    ].sort())
});
