import { rest } from "msw";
import { API_URL } from '../../app/constants';
import { mockResponse, mockResponseBartSimpson } from '../mocks/mock';

export const handlers = [
  rest.get(`${API_URL}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockResponse));
  }),
  rest.get(`${API_URL}?character=Bart Simpson`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockResponseBartSimpson));
  }),
  rest.get(`${API_URL}?character=123`, (req, res, ctx) => {
    return res(ctx.status(400), ctx.text('El nombre debe ser un texto'));
  }),
];
