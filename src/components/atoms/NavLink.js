export default function NavLink({ onClick, label, isHighlighted = false }) {
    return (
        <button
            onClick={onClick} // scroll button
            className={`px-4 py-2 text-lg transition ${
                isHighlighted
                    ? 'bg-secondary text-black rounded-lg font-semibold hover:bg-secondary-light hover:scale-105 transition-transform duration-300'
                    : 'hover:text-buttonBg relative after:content-[\'\'] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-buttonBg hover:after:w-full after:transition-all after:duration-300'
            }`}
        >
            {label}
        </button>
    );
}
