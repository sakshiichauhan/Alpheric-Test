import { ChevronUp } from "lucide-react"

const Fab = () => {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            <button
                onClick={handleClick}
                className="fixed bottom-2 right-8 m-3 p-3 bg-white rounded-full hover:bg-black hover:text-white z-50 shadow-2xl">
                <ChevronUp size={40} className="hidden md:block"/>
            </button>
        </>
    )
}
export default Fab;