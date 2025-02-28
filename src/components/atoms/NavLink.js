export default function NavLink({onClick, label}) {
    return (
        <button
            onClick={onClick}
            className="px-3 py-1 text-sm text-agencyBlack bg-agencyBackgroundDarker rounded-full hover:text-agencyBackground hover:bg-agencyBlack uppercase transition-all"
        >
            {label}
        </button>
    )
}
