


export function CyberStepTwo(){
    return (
        <div className='flex h-85% flex-col flex-wrap justify-center content-center px-4'>
        <div className='flex flex-wrap flex-col justify-center content-center p-2 mb-2 rounded-md'>
            <label className='text-center'>How many years of general IT experience do you have?</label>
            <input className="flex w-[15%] flex-wrap self-center m-1" type="number" min="0" max="30"></input>    
        </div>
        <div className='flex flex-wrap justify-center content-center p-2 rounded-md mb-2'>
            <fieldset className="flex flex-wrap flex-row justify-between">
                <legend className='text-center'>Which of the following programming languages are you strongest in:</legend>
                <div>
                    <input type="radio" id="python" name="Language" value="python" defaultChecked/>
                    <label>Python</label>
                </div>
                <div>
                    <input type="radio" id="js" name="Language" value="js"/>
                    <label>JavaScript</label>
                </div>
                <div>
                    <input type="radio" id="dotNet" name="Language" value="dotNet" />
                    <label>C++/C#</label>
                </div>

                <div>
                    <input type="radio" id="nA" name="Language" value="nA" />
                    <label>None of the these</label>
                </div>
            </fieldset>
        </div>
        <div className='flex flex-wrap justify-center content-center p-2 rounded-md mb-2'>
            <label className="mx-1">Preferred Operating System:</label>
            <select name="oS" id="oS">
                <option value="blue">Linux</option>
                <option value="red">Windows</option>
            </select>
        </div>
    </div>
    )
}
