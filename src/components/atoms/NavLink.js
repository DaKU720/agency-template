export default function NavLink({onClick, label, isNavButton = false}) {
    return (
        <button
            onClick={onClick}
            className={`px-3 py-1 text-sm transition-all ${
                isNavButton
                    ? 'text-[2rem] font-semibold'
                    : 'text-agencyBlack uppercase bg-agencyBackgroundDarker rounded-full hover:text-agencyBackground hover:bg-agencyBlack'
            }`}
        >
            {label}
        </button>
    )
}
