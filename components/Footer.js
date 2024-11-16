import Link from "next/link";
const d = new Date();
let year = d.getFullYear();

export function Footer (){
    return(
        <footer >
            <ul className="flex lg:justify-between bg-white py-4 md:py-6 px-2 md:px-8 lg:px-16 lg:px-16">
                <li className="text-xs text-gray-600 lg:block">&copy; {year} Early-Care Limited. All rights reserved.</li>
                <li className="text-xs text-gray-600 hidden lg:block"><Link href="#">Contact</Link></li>
                <li className="text-xs text-gray-600 hidden lg:block"><Link href="#">Privacy Policy | Terms of Condition</Link></li>
            </ul>

        </footer>
    )
}