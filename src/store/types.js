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
export const GET_LOADING_SCREEN_STATE = 'App/GetLoadingScreenState';

// Mutations
export const DISCONNECT = 'App/DisconnectByResettingStoreAndLocalStorage';
export const RESET_APP = 'App/Reset';
export const TOGGLE_SIDE_MENU = 'App/ToggleSideMenu';
export const CLOSE_SIDE_MENU = 'App/CloseSideMenu';
export const OPEN_SIDE_MENU = 'App/OpenSideMenu';
export const SHOW_LOADING_SCREEN = 'App/ShowLoadingScreen';
export const HIDE_LOADING_SCREEN = 'App/HideLoadingScreen';

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
export const SET_USER_PROP = 'User/SetUserProp';

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
export const SWITCH_FLAT = 'Flat/SwitchFlat';


/*
 * Notifications
 */
// Mutations
export const RESET_NOTIFICATIONS = 'Notifications/Reset';
export const SET_NOTIFICATIONS = 'Notifications/SetNotifications';


/*
 * Events
 */
// Getters
export const GET_EVENT = 'Events/getEvent'; // Get event for given ID
export const GET_EVENTS_FOR_TMSTPM = 'Events/getEventsForTimestamp'; // Get all events for that day
export const GET_EVENTS_CATS = 'Events/getEventsCategories';
export const GET_CONFIRMATIONS = 'Events/GetConfirmationsForIsoDate';

// Mutations
export const RESET_EVENTS = 'Events/Reset';
export const ORDER_CALENDAR = 'Events/OrderEventsForCalendar';
export const SET_EVENTS_CATS = 'Events/SetEventsCategories';
export const SET_NEW_EVENT = 'Events/SetNewEvent';
export const REMOVE_EVENT = 'Events/RemoveEvent';
export const SET_CONFIRMATIONS = 'Events/SetConfirmationsForIsoDate';

// Actions
export const FETCH_AND_ASSOCIATE_EVENTS = 'Events/fetchAndAssociateEvents';
export const FETCH_EVENTS_CATS = 'Events/fetchEventsCategories';
export const SAVE_EVENT = 'Events/SaveEvent';
export const DELETE_EVENT = 'Events/DeleteEvent';
export const FETCH_CONFIRMATIONS = 'Events/FetchEventConfirmations';
export const SAVE_CONFIRMATION = 'Events/SaveEventConfirmation';
