import Link from 'next/link'
import Image from 'next/image'

export default function Page() {
  return <div className="flex flex-grow flex-col w-full h-full items-center min-w-full">
                    <div className="p-4">
                        <h1>What&apos;s your job character?</h1>
                    </div>
                    <div className="flex flex-grow h-full items-center justify-between p-4">
                        <Link className="grid h-[90%] grid-rows-3 bg-blue-800 bg-opacity-25 w-1/3 p-2 m-4" href="/create-new/cybercat">
                            <div className="row-span-2 grid h-full w-full">
                                <Image
                                    className="place-self-end"
                                    src="https://res.cloudinary.com/dd7mi7bpp/image/upload/v1690665596/cld-sample-4.jpg"
                                    alt="cybercat pic"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                    sizes="100vw"
                                    width={1870}
                                    height={1250}
                                >
                                </Image>
                            </div>
                            <h1 className="place-self-center">Cyber Cat</h1>
                        </Link>
                        <Link className="grid h-[90%] grid-rows-3 bg-indigo-800 bg-opacity-25 w-1/3 p-2 m-4" href="/create-new/developerdog">
                            <div className="row-span-2 grid h-full w-full">
                                <Image
                                    className="place-self-end"
                                    src="https://res.cloudinary.com/dd7mi7bpp/image/upload/v1690665596/cld-sample-4.jpg"
                                    alt="developerdog pic"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                    sizes="100vw"
                                    width={1870}
                                    height={1250}
                                >
                                </Image>
                            </div>
                            <h1 className="place-self-center">Developer Dog</h1>
                        </Link>
                        <Link className="grid h-[90%] grid-rows-3 bg-purple-800 bg-opacity-25 w-1/3 p-2 m-4" href="/create-new/administratorlizard">
                            <div className="row-span-2 grid h-full w-full">
                                <Image
                                    className="place-self-end"
                                    src="https://res.cloudinary.com/dd7mi7bpp/image/upload/v1690665596/cld-sample-4.jpg"
                                    alt="cybercat pic"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                    sizes="100vw"
                                    width={1870}
                                    height={1250}
                                >
                                </Image>
                            </div>
                            <h1 className="place-self-center">Administrator Lizard</h1>
                        </Link>
                    </div>
            </div>
}