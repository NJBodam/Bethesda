import { getHomepage } from "@/lib/data";
import HomepageForm from "./HomepageForm";

export default function HomepagePage() {
  const content = getHomepage();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Edit Homepage</h1>
      <p className="text-gray-500 mb-6">
        Update the content displayed on your church homepage.
      </p>
      <div className="bg-white rounded-xl shadow p-6">
        <HomepageForm content={content} />
      </div>
    </div>
  );
}
