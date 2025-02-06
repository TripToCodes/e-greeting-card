import CardFront from "@/components/card-front";
import CardInside from "@/components/card-inside";
export default function CardDetails() {
  return (
    <div>
      <div className="flex justify-between p-10 items-center">
        <div className="flex flex-row">
          <CardFront category="Birthday" name="Happy Birthday" />
          <CardInside />
        </div>
        <button>Check Out</button>
      </div>
    </div>
  );
}
