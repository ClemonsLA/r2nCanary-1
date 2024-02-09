'use client'
import {useFormStatus} from 'react-dom';
import {useFormState, useState } from 'react-dom';
import {createPersonSME, createImage} from '@/app/actions.ts';
import Image from 'next/image'
import Suspense from 'react';
import { useMultiStepForm } from './useMultiStepForm';
import { CyberStepOne } from './CyberFormStepOne';
import { CyberStepTwo } from './CyberFormStepTwo';

const initialState = {};

function SubmitButton(){
    const { pending } = useFormStatus();
    
    return <div className='flex h-6 w-24 flex-wrap justify-center content-center p-4 border-2 rounded-md'>
                <button type="submit" aria-disabled={pending}>Generate</button>
            </div>

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

    const { steps, currentStepIndex, step, isFirstStep, isLastStep, next, back } = useMultiStepForm([
    { 0: <CyberStepOne /> },
    { 1: <CyberStepTwo /> },
    { 2: <div>3rd Set</div> },
    { 3: <div>4th Set</div> },
    { 5: <div>5th Set</div> },
    ])
    return <form action={formAction} className="grid grid-rows-4 grid-cols-2 grid-flow-col place-items-center min-h-[90vh] w-full box-border">
                <div className="flex flex-col min-h-full w-full row-span-3 justify-between justify-center content-center">
                    <div>
                        <div className='flex flex-wrap justify-center content-center p-2 rounded-md'>Interview header</div>
                    </div>
                    <div className='flex flex-wrap justify-center content-center p-2 rounded-md'>{step}</div>
                    <div className='flex flex-wrap justify-center content-center p-2 rounded-md justify-between'>
                            <div className='flex h-6 w-24 flex-wrap justify-center content-center p-4 rounded-md mx-8'>
                                {!isFirstStep && <button type='button' onClick={back} >Back</button>}
                            </div>
                            <div>{currentStepIndex + 1 }/{steps.length}</div>
                            <div className='flex h-6 w-24 flex-wrap justify-center content-center p-4 rounded-md mx-8'>
                                {!isLastStep && <button type='button' onClick={next}>Next</button>}
                            </div>
                    </div>
                </div>
                <div className="flex min-h-full min-w-full flex-wrap justify-center content-center">              
                    {isLastStep && <SubmitButton/>}
                </div>
                <div className="row-span-4 w-[95%] max-w-[88%] min-h-[100%] box-border relative">
                    <Image
                        src={state?.message}
                        width={1024}
                        height={1024}
                        alt="Dalle Generated Image"
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