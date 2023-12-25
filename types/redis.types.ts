import { Redis } from 'ioredis';

/**
 * A collection of `ioredis` Redis instances, namespaced by string.
 */
export type RedisConnection = {
    [key: string]: Redis;
};
