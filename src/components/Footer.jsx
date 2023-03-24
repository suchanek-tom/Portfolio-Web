
const Footer = () =>{
    return(
        <footer>
            <div class="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-300 sm:text-center dark:text-gray-400">
                    © 2023 <a href="https://flowbite.com/" class="hover:underline">Portfolio</a>. Tomáš Suchanek
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-300 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="https://www.instagram.com/tsuchanek_/" class="mr-4 hover:underline md:mr-6 ">Instagram</a>
                    </li>
                    <li>
                        <a href="https://github.com/suchanek-tom" class="mr-4 hover:underline md:mr-6">GitHub</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-suchanek/" class="mr-4 hover:underline md:mr-6">LinkedIn</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Resume</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer