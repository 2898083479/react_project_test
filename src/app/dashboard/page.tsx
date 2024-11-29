import { Suspense } from "react";
import Loading from "./loading";

export default function Page() {
    return (
        <div>
            <div 
            className="flex justify-center text-3xl font-bold bg-black text-pink-400 rounded-lg shadow-lg py-10 px-10 border-2 border-pink-400"
            >
                This is dashboard page
            </div>
            <Suspense fallback={<Loading />}>
                
            </Suspense>
            
            <button className="bg-sky-400 hover:bg-sky-800 focus:bg-pink-200 active:bg-yellow-200 text-black rounded-lg shadow-lg py-2 px-4">
                Go to abc
            </button>
            <br />
            <button className="bg-violet-400 hover:bg-violet-800 focus:bg-pink-200 active:bg-yellow-200 text-black rounded-lg shadow-lg py-2 px-4">
                Savge Change
            </button>
            <br />
            <ul role="list" className="p-6 divide-y divide-slate-200">
                <li className="flex py-4 first:pt-0 last:pb-0">
                    <img className="h-10 w-10 rounded-full" src="../public/pic.jpg" alt="The picture Error" />
                    <div>
                        <p className="text-sm font-medium text-slate-900">Name</p>
                        <p className="text-sm text-slate-500 truncate">Email</p>
                    </div>
                </li>
            </ul>

            <br />
            <table>
                <tbody>
                    <tr className="odd:bg-white even:bg-slate-50">
                        <td>Name</td>
                        <td>Title</td>
                        <td>Email</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}