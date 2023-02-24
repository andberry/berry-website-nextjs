interface ISkillsGroup {
    title: string;
    skills: string[];
}

export const SkillsGroup = ({ title, skills }: ISkillsGroup) => {
    return (
        <div className="mb-12">
            <h3 className="text-3xl font-extrabold mb-3 font-exo2">{title}</h3>
            <ul>
                {skills.map((item, index) => (
                    <li className="py-2 font-extralight" key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
