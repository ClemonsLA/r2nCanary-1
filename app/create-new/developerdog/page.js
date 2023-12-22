'use client'

import OpenAI from "openai"
import { useState } from 'react';
import Image from 'next/image'

export default function createDogArt() {
    
    const [dimageString, setDimageString] = useState({});

    async function GrabPicture(){
        const openai = new OpenAI({ apiKey: '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', dangerouslyAllowBrowser: true });
        const imageURLd3 = await openai.images.generate({ 
            model: "dall-e-3", 
            prompt: "A realistic standard poodle with human-like behavior, an IQ of 180 and black sunglasses, piloting a blue Boeing 737 from with a female japanese flight attendant", 
            style: "vivid",
            response_format: "url"
            })
        console.log(imageURLd3.data);
        console.log("imageURLd3 is a: ",typeof imageURLd3.data[0]["url"])
        setDimageString(imageURLd3.data[0]["url"]);
        console.log("DimageString is a: ", typeof dimageString);
        return { message: `${imageURLd3.data[0]["url"]}` }
    };
    
    function DalleImageDiv(){

        return <div className="grid grid-rows-2 grid-cols-2 grid-flow-col place-items-center h-[100%] w-full box-border">
                <div className="row-span-2 w-[95%] max-w-[88%] h-[88vh] box-border relative">
                    <Image
                        src={dimageString}
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
                <button onClick={GrabPicture}>
                    Generate Image
                </button>
        </div>
    }



return <DalleImageDiv />
}