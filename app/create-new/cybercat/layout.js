export default function CreateArtLayout(props) {
  return <div className="flex w-full h-full flex-grow items-center m-2">
                <div className="flex h-full w-full flex-grow border-4 bg-indigo-800 bg-opacity-30 border-black m-2">
                    {props.interview}
                </div>
                <div className="flex h-full max-w-[33%] flex-grow border-4 border-black m-2">
                    {props.imageslot}
                </div>
         </div>
}