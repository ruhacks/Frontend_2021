/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/*                                  registerActions.js
Description:    Initialize action strings, action functions that returns action objects to the reducer (redux/reducers/register.js) and action functions that actually does the work needed to handle registrations.
                Notable things that happen here:
                    -   Dispatch various action functions that dispatches actions that get sent to the reducer which changes 

                     
*/
import { myFirebase } from '../../db/index';

// Action strings
export const REGISTER_REQUEST = 'REGISTER REQUEST';
export const REGISTRATION_SUCCESSFUL = 'REGISTRATION_SUCCESSFUL';

export const REGISTER_ERROR = 'REGISTER_ERROR';

export const VERIFICATION_REQUEST = 'VERIFIACTION_REQUEST';
export const VERIFICATION_SUCCESSFULLY_SENT = 'VERIFICATION_SUCCESSFULLY_SENT';

//action functions that returns action objects to the reducer (redux/reducers/auth.js) so the reducer knows how to adjust the variables
export const requestRegister = () => {
    return {
        type: REGISTER_REQUEST,
    };
};

export const registerError = () => {
    return {
        type: REGISTER_ERROR,
    };
};

export const registerSuccess = (user) => {
    return {
        type: REGISTRATION_SUCCESSFUL,
        user,
    };
};

export const requestSendVerification = () => {
    return {
        type: VERIFICATION_REQUEST,
    };
};

export const verificationSent = (user) => {
    return {
        type: VERIFICATION_SUCCESSFULLY_SENT,
        user,
    };
};

// The functions that do the work when called upon and the ones that dispatches actions to the reducer at various stages

//Attempts to register and send verification to user
export const registerUser = (email, password) => (dispatch) => {
    dispatch(requestRegister()); //Dispatches REGISTER_REQUEST event to the reducer to change redux store state variables
    myFirebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
            dispatch(registerSuccess()); //Dispatches REGISTER_SUCCESS event to the reducer to change redux store state variables
            dispatch(requestSendVerification()); //Disaptches VERIFICATION_REQUEST event to the reducer to change redux store state variables
            user.user
                .sendEmailVerification()
                .then(() => {
                    dispatch(verificationSent(user)); //Dispatches VERIFICATION_SUCCESSFULLY_SENT event to the reducer to change redux store state variables
                })
                .catch((error) => {
                    console.log(error);
                    dispatch(registerError);
                });
        })
        .catch((error) => {
            console.log(error);
            dispatch(registerError());
        });
};
