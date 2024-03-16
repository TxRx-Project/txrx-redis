import { Redis } from 'ioredis';

/**
 * A collection of `ioredis` Redis instances, namespaced by string.
 */
export type RedisConnection = {
    [key: string]: Redis;
};

/**
 * A proxy symbol for the for {@link RedisConnection}.
 */
export const RedisConnection = Symbol('RedisConnection');
