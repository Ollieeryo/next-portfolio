'use client';

const skillsList = [
  { title: 'JavaScript' },
  { title: 'TypeScript' },
  { title: 'HTML' },
  { title: 'CSS' },
  { title: 'SCSS' },
  { title: 'Tailwind CSS' },
  { title: 'React.js' },
  { title: 'Redux' },
  { title: 'Next.js' },
  { title: 'Node.js' },
  { title: 'Express.js' },
  { title: 'Restful API' },
  { title: 'MySQL' },
  { title: 'Linux' },
  { title: 'Docker' },
];

const SkillsList = () => {
  return (
    <>
      {skillsList.map((skill) => (
        <div
          key={skill.title}
          className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
        >
          {skill.title}
        </div>
      ))}
    </>
  );
};

export default SkillsList;
