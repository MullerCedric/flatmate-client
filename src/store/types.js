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
// Getters
export const GET_SIDE_MENU_STATE = 'App/GetSideMenuState';

// Mutations
export const DISCONNECT = 'App/DisconnectByResettingStoreAndLocalStorage';
export const RESET_APP = 'App/Reset';
export const TOGGLE_SIDE_MENU = 'App/ToggleSideMenu';
export const CLOSE_SIDE_MENU = 'App/CloseSideMenu';
export const OPEN_SIDE_MENU = 'App/OpenSideMenu';

// Actions
export const HYDRATE_APP = 'App/HydrateAppData';


/*
 * User
 */
// Getters
export const GET_USER = 'User/GetCurrentUser';

// Mutations
export const RESET_USER = 'User/Reset';
export const SET_USER = 'User/SetUser';

// Actions
export const CONNECT = 'User/Connect';

/*
 * Discussions & messages
 */
// Getters
export const GET_DISCUSSIONS = 'Discussions/GetDiscussionsWithLastMessageAndParticipants';
export const GET_DISCUSSION = 'Discussions/GetDiscussionWithMessages';

// Mutations
export const RESET_DISCUSSIONS = 'Discussions/Reset';
export const SET_DISCUSSIONS = 'Discussions/SetDiscussionsWithLastMessageAndParticipants';
export const SET_MESSAGES = 'Discussions/SetMessagesForDiscussion';
export const SET_NEW_DISCUSSION = 'Discussions/SetNewDiscussion';
export const SET_NEW_MESSAGE = 'Discussions/SetNewMessageForDiscussion';

// Actions
export const FETCH_DISCUSSIONS = 'Discussions/FetchDiscussionsWithLastMessageAndParticipants';
export const FETCH_MESSAGES = 'Discussions/FetchMessagesForDiscussion';
export const SAVE_DISCUSSION = 'Discussions/SaveNewDiscussion';
export const SAVE_MESSAGE = 'Discussions/SaveMessageForDiscussion';


/*
 * Flat
 */
// Getters
export const GET_FLATS = 'Flat/GetFlatsWithUsers';
export const GET_FLAT = 'Flat/GetFlatWithUsers';
export const GET_FLAT_USERS = 'Flat/GetFlatUsers';

// Mutations
export const RESET_FLATS = 'Flat/Reset';
export const SET_FLAT = 'Flat/SetFlatWithUsers';
export const SET_FLATS = 'Flat/SetFlatsWithUsers';

// Actions
export const FETCH_FLATS = 'Flat/FetchFlatsWithUsers';


/*
 * Notifications
 */
// Mutations
export const RESET_NOTIFICATIONS = 'Notifications/Reset';
export const SET_NOTIFICATIONS = 'Notifications/SetNotifications';


/*
 * Calendar
 */
// Getters
export const GET_EVENTS_FOR_TMSTPM = 'Calendar/getEventsForTimestamp';
export const GET_EVENTS_CATS = 'Calendar/getEventsCategories';

// Mutations
export const RESET_CALENDAR = 'Calendar/Reset';
export const ORDER_CALENDAR = 'Calendar/OrderCalendar';
export const SET_EVENTS_CATS = 'Calendar/SetEventsCategories';
export const SET_NEW_EVENT = 'Calendar/SetNewEvent';

// Actions
export const FETCH_AND_ASSOCIATE_EVENTS = 'Calendar/fetchAndAssociateEvents';
export const FETCH_EVENTS_CATS = 'Calendar/fetchEventsCategories';
export const SAVE_EVENT = 'Calendar/SaveEvent';
