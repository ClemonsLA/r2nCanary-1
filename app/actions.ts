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
    
    /*const path = join('/', "imageData.png");
    const buffer = Buffer.from(image.data[0]["b64_json"], "base64");
    await writeFile(path, buffer);*/
    
    /*const taintedArrayBuffer = await fetch(image.data[0]["url"], {cache: 'no-cache'})
    .then(res => res.arrayBuffer())
    
    const newBlobFromArray = new Blob([taintedArrayBuffer], {type: "image"})
    console.log(typeof taintedArrayBuffer);
    
    const blob = await put("myFirstBlob", newBlobFromArray, {
    access: 'public',
  });
 
  return NextResponse.json(blob);*/
    
    //change URL?
    
   /*const newURL = URL.createObjectURL(taintedArrayBuffer);
   const newImage = new Image;
   newImage.src = newURL;
   const cleanedBlob = newImage.baseURI;
   
   console.log(typeof cleanedBlob)*/
    
    
    /*const dalleImageBlob = await dalleImage.blob();
    
    const imageURL = URL.createObjectURL(dalleImageBlob);*/
    
    /*const response = await fetch(
            "/api/imageGenerator/upload?filename=newURL",
            {
              method: 'POST',
              body: newBlobFromArray,
            },
          );
    const newBlob = (await response.json()) as PutBlobResult;*/
   
    
    revalidatePath('/')
    /*return { message: `${imageURL}` }*/
    return { message: `${image.data[0]["url"]}` }
  } catch (e) {
    return { message: `failed to create image: ${e}`}
  }
}
