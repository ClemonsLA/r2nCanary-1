'use client'

import {useFormStatus} from 'react-dom';
import {useFormState} from 'react-dom';
import {createPersonSME, createImage} from '@/app/actions.ts';

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

function AddImageGeneratorForm(){
    const [state, formAction] = useFormState(createImage, initialState)
    return <form action={formAction}>
                <label>Image Generation</label>
                <SubmitButton />
                <p aria-live="polite" role="status">
                    {state?.message}
                </p>
           </form>
};

export {AddInterviewForm, AddImageGeneratorForm};