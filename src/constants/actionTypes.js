/* For dispatching after user details have been received */
export const RECEIVED_USER_DETAILS = 'RECEIVED_USER_DETAILS';

/* For dispatching before making an API request to github */
export const FETCH_USER_DETAILS = 'FETCH_USER_DETAILS';

/* For dispatching after user followers have been received */
export const RECEIVED_USER_FOLLOWERS = 'RECEIVED_USER_FOLLOWERS';

/* For dispatching before making an API request to github for fetching the followers */
export const FETCH_USER_FOLLOWERS = 'FETCH_USER_FOLLOWERS';

/* For dispatching after following people have been received */
export const RECEIVED_USER_FOLLOWING = 'RECEIVED_USER_FOLLOWING';

/* For dispatching before making an API request to github for fetching the following */
export const FETCH_USER_FOLLOWING = 'FETCH_USER_FOLLOWING';

/* For clearing the cache (i.e. data in the store) */
export const INVALIDATE_CACHE = 'INVALIDATE_CACHE';
