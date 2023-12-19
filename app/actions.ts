'use server'

import { revalidatePath } from 'next/cache'
import { sql } from '@vercel/postgres'
import { z } from 'zod'
import OpenAI from "openai";

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
    });
    
   
    console.log(image.data);
    
    console.log(typeof image);
    
    console.log(Object.keys(image));
    
    console.log(typeof image.data);
    
    console.log(Object.keys(image.data[0]));
    
    console.log(typeof image.data[0]);
    
    console.log(typeof image.data[0]["url"]);
    
    //const imageURL = image.data[0]["url"];
   
    /*const imageArray = Object.keys(image.data);*/
    /*const imageURL = imageArray[1]; */
    revalidatePath('/')
    return { message: 'hello for now' }
  } catch (e) {
    return { message: 'failed to create image'}
  }
 
  
}