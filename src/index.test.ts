import { app, store } from './index';
import { request } from 'http';

describe('server', () => {
    it('is running', () => {
        request('http://localhost:4000', response => {
            expect(response.statusCode).toBe(200);
        });
    });
});

// describe('store', () => {
//     it('is connected', () => {
        
//         expect(store).toBeTruthy()
//     })
// })

