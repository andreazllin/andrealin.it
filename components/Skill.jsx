export default function Skill({name, color, textColor}) {
    return (
        <span className="text-sm py-1 px-2" style={{ backgroundColor: color, color: textColor }}>
            {name}
        </span>
    );
}
