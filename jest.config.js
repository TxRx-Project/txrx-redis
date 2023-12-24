module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    testMatch: ['**/*.spec.ts'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.ts', 'index.ts'],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
};
