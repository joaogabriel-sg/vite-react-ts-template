import { afterAll, afterEach, beforeAll } from 'vitest';

import { server } from '../mocks/server.js';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
