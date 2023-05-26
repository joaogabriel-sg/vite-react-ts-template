import { rest } from 'msw';

export const handlers = [
  rest.get('/mock', (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
