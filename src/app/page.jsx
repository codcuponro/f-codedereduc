import { getHomPage } from "@/services"


export default async function Home() {

  const page = await getHomPage()

  return (
    <>
      {JSON.stringify(page, null, 2)}
    </>
  );
}
