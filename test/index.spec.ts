import * as Index from '../';
import RedisConnector from '../src/redisConnector';

test('index exports', () => {
    expect(Index.RedisConnector).toBe(RedisConnector);
});
