import { BsFacebook, BsInstagram } from "react-icons/bs"

export default function Footer() {
    return (
        <>
            <footer aria-label="Site Footer" className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-md">
                        <strong
                            className="block text-center text-xl font-bold text-gray-900 sm:text-3xl"
                        >
                            Want us to email you with the latest fishing updates?
                        </strong>

                        <form className="mt-4">
                            <div className="relative max-w-lg">
                                <label className="sr-only" for="email"> Email </label>

                                <input
                                    className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                                    id="email"
                                    type="email"
                                    placeholder="john@doe.com"
                                />

                                <button
                                    className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-yellow-400 px-5 py-3 text-sm font-medium text-[#252525] hover:bg-yellow-500"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
                        <div className="mx-auto max-w-sm lg:max-w-none">
                            <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg">
                                Our collection of premium lures is meticulously crafted using cutting-edge technology and the finest materials, ensuring superior performance and durability.
                            </p>

                            <div className="mt-4 flex justify-center gap-4 lg:justify-start">
                                <a
                                    className="text-gray-700 transition hover:text-gray-700/75 hover:underline"
                                    href=""
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <BsFacebook size={24} />
                                </a>

                                <a
                                    className="text-gray-700 transition hover:text-gray-700/75 hover:underline"
                                    href=""
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <BsInstagram size={24} />
                                </a>

                            </div>
                        </div>

                        <div
                            className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left"
                        >
                            <div>
                                <strong className="font-medium text-gray-900 underline underline-offset-2"> Brands </strong>

                                <nav className="mt-4 flex flex-col space-y-1">
                                    <a className="text-gray-700 transition hover:text-gray-700/75 hover:underline" href="/">
                                        SureCatch
                                    </a>
                                    <a className="text-gray-700 transition hover:text-gray-700/75 hover:underline" href="/">
                                        ATC
                                    </a>
                                    <a className="text-gray-700 transition hover:text-gray-700/75 hover:underline" href="/">
                                        BONE Fishing World
                                    </a>
                                    <a className="text-gray-700 transition hover:text-gray-700/75 hover:underline" href="/">
                                        FishArt
                                    </a>
                                </nav>
                            </div>

                            <div>
                                <strong className="font-medium text-gray-900 underline underline-offset-2"> About </strong>

                                <nav
                                    aria-label="Footer About Nav"
                                    className="mt-4 flex flex-col space-y-1"
                                >
                                    <a className="text-gray-700 transition hover:text-gray-700/75 hover:underline" href="/">
                                        About
                                    </a>
                                    <a className="text-gray-700 transition hover:text-gray-700/75 hover:underline" href="/">
                                        Careers
                                    </a>
                                    <a className="text-gray-700 transition hover:text-gray-700/75 hover:underline" href="/">
                                        History
                                    </a>
                                    <a className="text-gray-700 transition hover:text-gray-700/75 hover:underline" href="/">
                                        Our Team
                                    </a>
                                </nav>
                            </div>

                            <div>
                                <strong className="font-medium text-gray-900 underline underline-offset-2"> Support </strong>

                                <nav className="mt-4 flex flex-col space-y-1">
                                    <a className="text-gray-700 transition hover:text-gray-700/75 hover:underline" href="/">
                                        FAQs
                                    </a>

                                    <a className="text-gray-700 transition hover:text-gray-700/75 hover:underline" href="/">
                                        Contact
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 border-t border-gray-100 pt-8">
                        <p className="text-center text-xs/relaxed text-gray-500">
                            © Zerek 2023. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer >
        </>
    )
}