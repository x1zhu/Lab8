/**
 * @jest-environment jsdom
 */

 import { pushToHistory } from '../scripts/router.js';

 describe('Testing pushToHistory', () => {
     test('Testing settings', () => {
         pushToHistory('settings');
         expect(history.state.page).toBe('settings');
     })

     test('Testing entry', () => {
         const entryNum = 0;
         pushToHistory('entry', entryNum);
         expect(history.state.page).toBe(`entry${entryNum}`);
     })

     test('Testing default', () => {
         pushToHistory('default');
         expect(history.state.page).toBe(undefined);
     })
 })