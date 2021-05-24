/**
 * @jest-environment jsdom
 */

import { pushToHistory } from '../scripts/router.js';

describe('pushToHistory tests', () => {
    test('Checks if pushToHistory sets setting state correctly', () => {
        expect(pushToHistory('settings', '').state.page).toBe('settings');
        expect(history.length).toBe(2);
    });

    test('Checks if pushToHistory sets entry state correctly', () => {
        expect(pushToHistory('entry', 6).state.page).toBe('entry6');
        expect(history.length).toBe(3);
    });

    test('Checks if pushToHistory sets default state correctly', () => {
        expect(pushToHistory('', '').state.page).toBe(undefined);
        expect(history.length).toBe(4);
    });
});
