import { useState } from 'react';

export default function ProgressWrapper({ icon, color, title, data }) {
    return (
        <div>
            <div className="flex flex-row">
                {icon}
                <h1 className="text-xl font-regular">{title}</h1>
            </div>

            {data.map((section, index) => (
                <SkillProgress section={section} key={index} />
            ))}
        </div>
    );
}

const SkillProgress = ({ section }) => {
    const [element, setElement] = useState(section[0]);
    return (
        <div className="my-2">
            <div className="flex mb-1 gap-1 flex-wrap" mb={1}>
                {section.map((skill, index) => (
                    <button className="bg-gray-100 font-regular text-sm px-2 py-1" style={{ backgroundColor: skill.color, color: skill.textColor }} key={index} onClick={() => setElement(skill)}>
                        {skill.name}
                    </button>
                ))}
            </div>

            <div>
                <div className="flex flex-col">
                    <p className="text-white w-max px-2 py-1 transition-all font-regular" style={{ backgroundColor: element.color, color: element.textColor }}>
                        {element.name} - {element.perc.padStart(2, 0)}%
                    </p>
                    <div className="bg-gray-200">
                        <div className="h-1 text-center text-white transition-all" style={{ width: `${element.perc}%`, backgroundColor: element.color }}>
                            {/* &nbsp; */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
