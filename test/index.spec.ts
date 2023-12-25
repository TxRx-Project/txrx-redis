import * as Index from '../index';
import RedisConnector from '../src/redisConnector';

test('index exports', () => {
    expect(typeof Index.RedisConnector).toBe(typeof RedisConnector);
});

test('index scope', () => {
    expect(Object.keys(Index).sort()).toEqual([
        'RedisConnector'
    ].sort())
});
