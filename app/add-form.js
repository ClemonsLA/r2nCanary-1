'use client'

import {useFormStatus} from 'react-dom';
import {useFormState} from 'react-dom';
import {createPersonSME, createImage} from '@/app/actions.ts';
import Image from 'next/image'
import Suspense from 'react';

const initialState = {};

function SubmitButton(){
    const { pending } = useFormStatus();
    
    return <button type="submit" aria-disabled={pending}>Submit
           </button>
}

export function AddInterviewForm(){
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

export function AddImageGeneratorForm(){
    const [state, formAction] = useFormState(createImage, initialState)
    return <form action={formAction}>
                <label>Image Generation</label>
                <SubmitButton />
                <p aria-live="polite" role="status">
                    {state?.message}
                </p>
           </form>
};

export function AddanotherImageGeneratorForm(){
    const [state, formAction] = useFormState(createImage, initialState)
    return <form action={formAction}>
                <label>Image Generation</label>
                <SubmitButton />
                <Image
                    src={state?.message}
                    width={1024}
                    height={1024}
                    alt="Picture of the author">
                </Image>
           </form>
}        

/*export function AddDalleImage(){
    const [state, formAction] = useFormState(createImage, initialState)
    return  <form action={formAction}>
                <label>Image Generation</label>
                <SubmitButton />
                <Suspense fallback={<Image>Ur shit outta luck</Image>}>
                    <Image
                        placeholder='none'
                        src={state?.message}
                        width={1024}
                        height={1024}
                        alt="Picture of the author"
                    />
                </Suspense>
           </form>
    
 }*/
 

/*
oaidalleapiprodscus.blob.core.windows.net
*/