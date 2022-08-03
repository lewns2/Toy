import { setupServer } from 'msw/node';
import { handlers } from './handlers';

/* mocking server 셍성 */
export const server = setupServer(...handlers);
