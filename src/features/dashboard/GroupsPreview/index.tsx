import Card from "../../../components/ui/Card";

const groups = [
  { team: "🇧🇷 Brasil", points: 6 },
  { team: "🇫🇷 França", points: 4 },
  { team: "🇯🇵 Japão", points: 3 },
  { team: "🇲🇽 México", points: 1 },
];

const GroupsPreview = () => {
  return (
    <Card>
      <h2 className="mb-4 text-xl font-bold">
        Grupo A
      </h2>

      <div className="space-y-3">
        {groups.map((team, index) => (
          <div
            key={team.team}
            className="flex items-center justify-between border-b border-slate-800 pb-2"
          >
            <span>
              {index + 1}. {team.team}
            </span>

            <span className="font-bold">
              {team.points}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default GroupsPreview;