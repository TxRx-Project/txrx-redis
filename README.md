# txrx-redis

A simple `Redis` connection pool implementation.

## Synopsis

The pool is structured as a `category`, `url` tuple.

Where the category is an arbitrary string and the url is a valid Redis URL connection string.

```typescript
// local redis instance for streaming purposes
const streamingRedis = RedisConnector.get('streaming').get('redis://localhost');
// external redis instance for streaming purposes
const streamingExternalRedis = RedisConnector.get('streaming').get('redis://external');
// local redis instance for general purposes
const generalRedis = RedisConnector.get('general').get('redis://localhost');
// this won't create a new instance
const streamingRedis2 = RedisConnector.get('streaming').get('redis://localhost');
```

## Devel

Dev container is recommended, to run the `devel` container:

```
make build
make install
```
