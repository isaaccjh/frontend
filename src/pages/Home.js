import { useState, useContext, useEffect } from "react";
import LureContext from "../contexts/LureContext";

export default function Home() {
    const [lures, setLures] = useState([]);
    const [variants, setVariants] = useState([])
    const context = useContext(LureContext);

    useEffect(() => {
        const getAllLures = async () => {
            const lures = await context.getAllLures();
            setLures(lures);
        }
        getAllLures();
    }, [context])

    useEffect(() => {
        const getAllVariants = async () => {
            const variants = await context.getAllVariants();
            setVariants(variants);
            console.log(variants);
        }
        getAllVariants();
    }, [])


    return (<>
        <section className="bg-transparent ">
            <div
                className="mx-auto home-page-bg sm:h-full border-box max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
            >
                <div className="mx-auto max-w-xl text-center bg-transparent ">
                    <h1 className="text-3xl font-extrabold sm:text-5xl bg-transparent text-white">
                        Hook your next big catch!
                        <strong className="font-extrabold text-gray-100 sm:block bg-transparent mt-9">
                            Discover the perfect lures for your fishing adventure. Shop now and reel in success.
                        </strong>
                    </h1>

                    <div className="mt-8 flex flex-wrap justify-center gap-4 bg-transparent">
                        <a
                            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-[#252525] shadow hover:bg-indigo-200 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                            href="/get-started"
                        >
                            Start Shopping!
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8 bg-transparent">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch bg-transparent">
                    <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8 bg-transparent">
                        <div className="max-w-md mx-auto text-center lg:text-left bg-transparent ">
                            <header>
                                <h2 className="text-xl bg-transparent font-bold text-gray-900 sm:text-3xl">Lures</h2>

                                <p className="mt-4 text-gray-500 bg-transparent">
                                    Powerful lures designed to conquer the mightiest fish. Unleash your angling prowess with our unstoppable collection!
                                </p>
                            </header>

                            <a
                                href="/products"
                                className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-yellow-400 hover:bg-yellow-500 rounded hover:shadow focus:outline-none focus:ring"
                            >
                                Shop All
                            </a>
                        </div>
                    </div>

                    {variants && variants.length > 0 ? <div className="lg:col-span-2 lg:py-8">
                        <ul className="grid grid-cols-2 gap-4">
                            <li>
                                <a href={`/products/${variants[0].lure_id}`} className="block group">
                                    <img
                                        src={variants[0].image_url}
                                        alt=""
                                        className="object-contain w-full rounded aspect-square bg-gray-200"
                                    />

                                    <div className="mt-3">
                                        <h3
                                            className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                        >
                                            {variants[0].lure.name}
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-700">Colour: {variants[0].colour.name}</p>
                                        <p className="mt-1 text-sm text-gray-700">${(variants[0].cost) / 100}</p>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href={`/products/${variants[11].lure_id}`} className="block group">
                                    <img
                                        src={variants[11].image_url}
                                        alt=""
                                        className="object-contain w-full rounded aspect-square bg-gray-200"
                                    />

                                    <div className="mt-3">
                                        <h3
                                            className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                        >
                                            {variants[1].lure.name}
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-700">Colour: {variants[1].colour.name}</p>
                                        <p className="mt-1 text-sm text-gray-700">${(variants[1].cost) / 100}</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div> : <h1>Loading...</h1>}
                </div>
            </div>
        </section >

    </>)
}