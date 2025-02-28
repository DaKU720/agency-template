export default function NavLink({onClick, label}) {
    return (
        <button
            onClick={onClick}
            className="px-3 py-1 text-sm text-blackPrimary bg-buttonHover rounded-full hover:text-primary hover:bg-blackPrimary uppercase transition-all"
        >
            {label}
        </button>
    )
}
