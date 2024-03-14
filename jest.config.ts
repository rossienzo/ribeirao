
import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  clearMocks: true,
  coverageProvider: "v8",
  testMatch: ['<rootDir>/tests/**/*.spec.ts']
};

export default config;
