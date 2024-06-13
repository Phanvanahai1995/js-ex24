export const DefaultLayout = () => {
  return `
        <div class="container max-w-[800px] mx-auto">
            <header class="text-5xl font-bold uppercase bg-gray-500 text-white w-full py-3">Header</header>
            <div class="grid grid-cols-2">
                <div>
                    <div class="mt-6">
                        <h2 class="text-3xl font-bold uppercase">Main Menu</h2>
                        <aside class="mt-6 px-3">
                            <ul class="flex flex-col justify-center gap-3">
                                <li class="nav-item">
                                    <a href="/" class="bg-yellow-400 px-4 py-1.5 w-32 inline-block hover:opacity-80 transition-opacity duration-300" data-navigo>Home</a>
                                </li>
                                <li class="nav-item">
                                    <a href="/about" class="bg-yellow-400 px-4 py-1.5 w-32 inline-block hover:opacity-80 transition-opacity duration-300" data-navigo>About</a>
                                </li>
                                <li class="nav-item">
                                    <a href="/products" class="bg-yellow-400 px-4 py-1.5 w-32 inline-block hover:opacity-80 transition-opacity duration-300" data-navigo>Products</a>
                                </li>
                               
                            </ul>
                        </aside>
                    </div>
                   
                </div>
                <main class="main max-w-screen-2xl mx-auto flex items-center justify-center" id="main"></main>
           </div>
            <footer class="text-5xl font-bold uppercase text-white bg-gray-500 w-full mt-6 py-3">Footer</footer>
        </div>
    `;
};
