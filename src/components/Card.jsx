import React from 'react'

function Card({props}) {
  return (
    <article className="overflow-hidden rounded-lg shadow-lg w-5/6">
        <a href="https://google.com" target="_blank">
            <img alt="Placeholder" className="block h-96 w-full" src="https://picsum.photos/600/400/?random" />
        </a>

        <header className="flex items-center justify-center leading-tight px-2 pt-2 md:px-4">
            <h1 className="text-lg">
                <a className="no-underline hover:underline text-black text-2xl font-medium" href="#">
                    Article Title
                </a>
            </h1>
        </header>

        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
            <a className="flex items-center no-underline hover:underline text-black" href="#">
                <p className="ml-2 text-sm text-center" >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae ducimus tempora dolor dicta alias, nobis illo voluptas vitae? Soluta, temporibus atque? Corporis odit minima fugit tempora temporibus aut laudantium, libero voluptatem illo.
                </p>
            </a>
        </footer>

    </article>
  )
}

export default Card