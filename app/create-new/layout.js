export default function CreateArtLayout({ children }) {
  return <main className="flex min-w-full h-screen max-h-screen items-center p-8">
          <div className="flex items-center h-full w-full border-8 p-8 border-solid border-black"> 
                {children}
          </div>
         </main>
}