import CardFront from "@/components/card-front";
export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white shadow-md rounded-lg p-4 text-center">
        <CardFront category="Birthday" name="Happy Birthday" />
      </div>
    </div>
  );
}
