'use server'

import { revalidatePath } from 'next/cache'
import { sql } from '@vercel/postgres'
import { z } from 'zod'

export async function createPersonSME(prevState: any, formData: FormData){
    const schema = z.object({
    cert: z.string().min(1),
    })
    const parse = schema.safeParse({
    cert: formData.get('cert'),
    })

    if (!parse.success) {
    return { message: 'Failed to parse person' }
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