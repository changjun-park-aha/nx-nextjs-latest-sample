export default async function Index({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const { id } = await searchParams;
  return <div>Index: {id}</div>;
}
