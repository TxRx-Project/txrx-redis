jest.mock('ioredis', () => require('ioredis-mock'));

import Redis from 'ioredis';

import RedisConnector from "../../src/redisConnector";

describe('RedisConnector', () => {
    let conn1: RedisConnector;
    let conn2: RedisConnector;
    let conn3: RedisConnector;
    let redis1: Redis;
    let redis2: Redis;
    let redis3: Redis;
    let redis4: Redis;

    it('should singleton a RedisConnector object by category', () => {
        conn1 = RedisConnector.get('test1');
        conn2 = RedisConnector.get('test2');
        conn3 = RedisConnector.get('test1');

        expect(conn1).toBeInstanceOf(RedisConnector);
        expect(conn2).toBeInstanceOf(RedisConnector);
        expect(conn3).toBeInstanceOf(RedisConnector);

        expect(conn1).toBe(conn3);
        expect(conn2).not.toBe(conn1);
    });

    it('should singleton a IORedis object by category + url', () => {
        redis1 = conn1.get('redis://localhost:6379');
        redis2 = conn2.get('redis://localhost:6379');
        redis3 = conn3.get('redis://localhost:6379');
        redis4 = conn3.get('redis://localhost:6389');

        expect(redis1).toBeInstanceOf(Redis);
        expect(redis2).toBeInstanceOf(Redis);
        expect(redis3).toBeInstanceOf(Redis);
        expect(redis4).toBeInstanceOf(Redis);

        expect(redis1).toBe(redis3);
        expect(redis2).not.toBe(redis1);
        expect(redis4).not.toBe(redis1);
    });
});