import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const filmUrls = req.query.films;
  const filmsArray = Array.isArray(filmUrls) ? filmUrls : [filmUrls];

  try {
    const filmResponses = await Promise.all(
      filmsArray.map((url: any) => fetch(url).then((res) => res.json()))
    );

    const filmTitles = filmResponses.map((film) =>
      filmUrls?.includes("starships") ? film.name : film.title
    );
    res.status(200).json({ titles: filmTitles });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Failed to fetch films", error: error.message });
  }
}
