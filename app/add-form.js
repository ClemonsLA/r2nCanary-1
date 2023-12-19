'use client'

import {useFormStatus} from 'react-dom';
import {useFormState} from 'react-dom';
import {createPersonSME} from '@/app/actions.ts';

const initialState = {};

function SubmitButton(){
    const { pending } = useFormStatus();
    
    return <button type="submit" aria-disabled={pending}>Submit
           </button>
}

function AddInterviewForm(){
    const [state, formAction] = useFormState(createPersonSME, initialState)
    return  <form action={formAction}>
                <label>Cert</label>
                <input id="cert" type="text" name="cert"></input>
                <SubmitButton />
                <p aria-live="polite" role="status">
                    {state?.message}
                </p>
            </form>
};

export {AddInterviewForm};