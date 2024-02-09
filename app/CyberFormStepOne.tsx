


export function CyberStepOne(){
    return (
        <div className='flex h-85% flex-col flex-wrap justify-center content-center px-4'>
        <div className='flex flex-wrap flex-col justify-center content-center p-2 mb-2 rounded-md'>
            <label className='text-center'>How many years of Cyber Security Experience do you have?</label>
            <input className="flex w-[15%] flex-wrap self-center m-1" type="number" min="0" max="30"></input>    
        </div>
        <div className='flex flex-wrap justify-center content-center p-2 rounded-md mb-2'>
            <fieldset className="flex flex-wrap flex-row justify-between">
                <legend className='text-center'>If you have a clearance, what kind? If not, select 'N/A':</legend>
                <div>
                    <input type="radio" id="nA" name="Clearance Level" value="nA" defaultChecked/>
                    <label>N/A</label>
                </div>
                <div>
                    <input type="radio" id="publicTrust" name="Clearance Level" value="publicTrust"/>
                    <label>Public Trust</label>
                </div>

                <div>
                    <input type="radio" id="secret" name="Clearance Level" value="secret" />
                    <label>Secret</label>
                </div>

                <div>
                    <input type="radio" id="tS" name="Clearance Level" value="tS" />
                    <label>Top Secret</label>
                </div>
            </fieldset>
        </div>
        <div className='flex flex-wrap justify-center content-center p-2 rounded-md mb-2'>
            <label className="mx-1">Team Preference:</label>
            <select name="team" id="team">
                <option value="blue">Blue</option>
                <option value="red">Red</option>
            </select>
        </div>
    </div>
    )
}
