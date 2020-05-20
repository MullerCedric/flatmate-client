/*
 * Commonly used key-words :
 * SAVE (action): save the data with AJAX into the DB, then eventually update the store (set)
 * FETCH (action): fetch some data with AJAX, then set the store (to save it)
 * SET (mutation): set the store data to given payload
 * GET (getter): get specific sub-data from the store OR computed value stored in the state for Two-Way-Binding
 */

/*
 * App
 */
// Actions
export const HYDRATE_APP = 'App/HydrateAppData';


/*
 * User
 */
// Getters
export const GET_USER = 'User/GetCurrentUser';


/*
 * Flat
 */
// Getters
export const GET_FLAT = 'Flat/GetFlatWithUsers';
export const GET_FLAT_USERS = 'Flat/GetFlatUsers';

// Mutations
export const SET_FLAT = 'Flat/SetFlatWithUsers';


/*
 * Notifications
 */
// Mutations
export const SET_NOTIFICATIONS = 'Notifications/SetNotifications';


/*
 * Calendar
 */
// Getters
export const GET_EVENTS_FOR_TMSTPM = 'Calendar/getEventsForTimestamp';
export const GET_EVENTS_CATS = 'Calendar/getEventsCategories';

// Mutations
export const ORDER_CALENDAR = 'Calendar/OrderCalendar';
export const SET_EVENTS_CATS = 'Calendar/SetEventsCategories';
export const SET_NEW_EVENT = 'Calendar/SetNewEvent';

// Actions
export const FETCH_AND_ASSOCIATE_EVENTS = 'Calendar/fetchAndAssociateEvents';
export const FETCH_EVENTS_CATS = 'Calendar/fetchEventsCategories';
export const SAVE_EVENT = 'Calendar/SaveEvent';
