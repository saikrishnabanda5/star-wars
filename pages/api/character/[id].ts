import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const response = await fetch(`https://swapi.dev/api/people/${id}/`);
    if (!response.ok) {
      throw new Error("Failed to fetch planet data");
    }
    const data = await response.json();

    res.status(200).json(data);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
