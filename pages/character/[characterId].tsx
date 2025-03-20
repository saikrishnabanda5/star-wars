import { CharacterDetails } from "@/components/CharacterDetails";
import { GetServerSideProps } from "next";

function CharacterDetailsPage({ character }: any) {
  return (
    <div className="p-4 border rounded">
      <CharacterDetails character={character} />
    </div>
  );
}

export default CharacterDetailsPage;

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: any) => {
  if (!params?.characterId) return { notFound: true };
  const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/character/${params.characterId}`;

  const res = await fetch(apiUrl);
  if (!res.ok) return { notFound: true };

  const character = await res.json();
  return { props: { character } };
};
