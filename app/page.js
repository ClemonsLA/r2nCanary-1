import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <main className="grid grid-cols-4 grid-rows-4 w-[100vw] h-[100vh]">
      <div className="w-full items-center">
      </div>

      <div></div>
      <div></div>
      <div></div>

      <div className="col-span-4 row-span-2">
            <div className='h-[50vh] relative filter invert opacity-40'>
              <Image
                src="/c2n.svg"
                alt="c2n.js Logo"
                layout="fill"
                objectFit="cover"
              />
            </div>
      </div>

      <div></div>
      <div></div>
      <div></div>

      <div className="text-center justify-center items-center flex pl-20">
        <Link
          href="/create-new"
          className="justify-center items-center flex rounded-lg border border-transparent"
        >
          <h2 className="text-2xl font-semibold">
            CREATE
          </h2>
        </Link>
      </div>

    </main>
  )
}
