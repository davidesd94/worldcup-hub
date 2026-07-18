import { useEffect, useState } from "react";
import { getFixtures } from "../../services/fixtures";

const response = await getFixtures();

console.log(response);

const TestApi = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const response = await getFixtures();
      console.log(response);
      setData(response);
    }

    load();
  }, []);

  return (
    <div className="p-8">
      <h1 className="mb-6 text-3xl font-bold">
        Teste da API
      </h1>

      <pre className="overflow-auto rounded-xl bg-slate-900 p-6 text-sm">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default TestApi;