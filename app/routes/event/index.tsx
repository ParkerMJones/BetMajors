import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
  const response = await fetch(
    "https://golf-leaderboard-data.p.rapidapi.com/leaderboard/396",
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.APIKey!,
        "X-RapidAPI-Host": "golf-leaderboard-data.p.rapidapi.com",
      },
    }
  ).then((response) => response.json());
  return json(response);
};

function Event() {
  const data = useLoaderData();
  console.log(data);

  return (
    <>
      <h1 className="pb-4 text-3xl">{data.results.tournament.name}</h1>
      {data.results.leaderboard.map((player: any) => (
        <div key={player.player_id}>
          {player.first_name} {player.last_name}{" "}
          {player.total_to_par > 0 && <span>+</span>}
          {player.total_to_par}
        </div>
      ))}
    </>
  );
}

export default Event;
