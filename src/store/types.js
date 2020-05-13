/*
 * Commonly used key-words :
 * SET (mutation): set the store data to given payload
 * SET (action): set the store data to given payload, without AJAX
 * SAVE (action): save the data with AJAX into the DB, then eventually update the store (set)
 * FETCH (action): fetch some data with AJAX, then set the store (to save it)
 * GET (getter): get specific sub-data from the store OR computed value stored in the state for Two-Way-Binding
 */

/*
 * Calendar
 */
// Getters
export const GET_EVENTS_FOR_TMSTPM = 'Calendar/getEventsForTimestamp';

// Mutations
export const ORDER_CALENDAR = 'Calendar/OrderCalendar';

// Actions
export const FETCH_AND_ASSOCIATE_EVENTS = 'Calendar/fetchAndAssociateEvents';
