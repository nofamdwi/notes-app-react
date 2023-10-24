import ToggleDarkMode from "./ToggleDarkMode";

export default function NavNote () {
    return (
        <nav className="mx-auto container border-b-2">
            <div className="flex flex-wrap justify-between items-center p-4 mx-auto">    
                <h1 className="font-bold text-4xl text-blue-500">NOTES</h1>
                <ToggleDarkMode />
            </div>
        </nav>
    )
}