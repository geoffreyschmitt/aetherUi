import type { Config } from 'jest';
import nextJest from 'next/jest.js';

import { getPackageAliases } from '@storybook/nextjs/export-mocks';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.tsx'],
  maxWorkers: 1,
  moduleNameMapper: {
    ...getPackageAliases(), // 👈 Add the utility as mapped module names
  },
};

export default createJestConfig(config);
