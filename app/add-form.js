'use client'

import {useFormStatus} from 'react-dom';
import {useFormState} from 'react-dom';
import {createPersonSME, createImage} from '@/app/actions.ts';
import Image from 'next/image'
import Suspense from 'react';

const initialState = {};

function SubmitButton(){
    const { pending } = useFormStatus();
    
    return <button type="submit" aria-disabled={pending}>Generate
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
    return <form action={formAction} className="grid grid-rows-2">
                <label>Image Generation</label>
                <SubmitButton />
                <p aria-live="polite" role="status">
                    {state?.message}
                </p>
           </form>
};

export function AddanotherImageGeneratorForm(){
    const [state, formAction] = useFormState(createImage, initialState)
    return <form action={formAction} className="grid grid-rows-2 grid-cols-2 grid-flow-col place-items-center h-[100%] w-full box-border">
                <label>Poodle and FA Image Generation</label>
                <SubmitButton />
                <div className="row-span-2 w-[95%] max-w-[88%] h-[88vh] box-border relative">
                    <Image
                        src={state?.message}
                        width={1024}
                        height={1024}
                        alt="Generated Image"
                        style={{
                            objectFit: "contain",
                            width: '100%',
                            height: 'auto',
                                    }}
                        sizes="100vw">
                    </Image>
                </div>
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