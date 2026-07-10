import { teams } from "../../../data/teams";

type Props = {
  code: string;
};

const TeamBadge = ({ code }: Props) => {
  const team = teams.find((team) => team.code === code);

  if (!team) {
    return (
      <span className="font-semibold text-red-500">
        Seleção não encontrada
      </span>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-2xl">
        {team.flag}
      </span>

      <span className="font-semibold">
        {team.name}
      </span>
    </div>
  );
};

export default TeamBadge;