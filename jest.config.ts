import type { Config } from 'jest';
import { defaults } from 'jest-config';

const config: Config = {
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ['browser', 'node', 'jest-environment-jsdom'],
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

export default config;
