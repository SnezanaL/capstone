import { initializeTimes, availableTimesReducer } from './BookingPage.js';

test('initializeTimes returns expected initial state', () => {
    const initialState = initializeTimes();
    expect(initialState).toEqual([
        '12:00 PM', '1:00 PM', '2:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
    ]);
})

test('updateTimes returns the same state provided', () => {
    const initialState = [
        '12:00 PM', '1:00 PM', '2:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
    ];
    const nextState = availableTimesReducer(initialState, { type: 'UPDATE_TIMES', date: '2022-12-01' });
    expect(nextState).toEqual(initialState);
})