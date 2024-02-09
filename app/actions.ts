'use server'

import { revalidatePath } from 'next/cache'
import { sql } from '@vercel/postgres'
import { z } from 'zod'
import OpenAI from "openai";
import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function createPersonSME(prevState: any, formData: FormData){
    const schema = z.object({
    cert: z.string().min(1),
    })
    const parse = schema.safeParse({
    cert: formData.get('cert'),
    })

    if (!parse.success) {
    return { message: 'Failed to parse cert' }
    }

    const data = parse.data
    
    console.log(data.cert);
    
    try {
    await sql`
    INSERT INTO personsme (text)
    VALUES (${data.cert})
  `

    revalidatePath('/')
    return { message: `Added todo ${data.cert}` }
  } catch (e) {
    return { message: 'Failed to create cert' }
  }
}

export async function createImage(prevState: any, formData: FormData){
  const openai = new OpenAI({ apiKey: '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' });
  
  try {
    const image = await openai.images.generate({ 
      model: "dall-e-3", 
      prompt: "A realistic standard poodle with human-like behavior, an IQ of 180 and black sunglasses, piloting a blue Boeing 737 from with a female japanese flight attendant", 
      style: "vivid",
      response_format: "url"
    });
    
   
    console.log(image.data);
    console.log(typeof image.data[0]["url"])
    revalidatePath('/')

    return { message: `${image.data[0]["url"]}` }
  } catch (e) {
    return { message: `failed to create image: ${e}`}
  }
}

export const getUserName = async (
  previousState: string | undefined | null,
  formData: FormData,
) => {
  //the previousState variable contains the last recorded value of the user's input
  console.log("previous recorded state ", previousState);
  //use the formData variable to get values:
  const userName = formData.get("userName");

  return userName?.toString();
};