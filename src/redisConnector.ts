import Redis from 'ioredis';
import { RedisConnection } from '../types/redis.types';

/**
 * A Redis connection pool manager.
 */
export default class RedisConnector {
    private static instances: { [key:string]: RedisConnector } = {};
    private pool: RedisConnection = {};

    private constructor() {}

    /**
     * Instantiates a RedisConnector instance by category.
     *
     * @param category - an arbitrary string to namespace the pool
     * @returns the {@link RedisConnector} instance associated to the `category`
     */
    public static get(category: string): RedisConnector {
        if (typeof RedisConnector.instances[category] === 'undefined') {
            RedisConnector.instances[category] = new RedisConnector();
        }

        return RedisConnector.instances[category]; 
    }

    /**
     *
     * @param url - a Redis connection string
     * @returns a `ioredis` Redis instance associated to the `url`
     */
    public get(url: string): Redis {
        if (!this.pool[url]) {
            this.pool[url] = new Redis(url);
        }

        return this.pool[url];
    }
}