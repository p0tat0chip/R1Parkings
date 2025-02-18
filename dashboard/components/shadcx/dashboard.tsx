import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ParkingCircle } from "lucide-react";

const gridSize = 6;
const grid = Array(gridSize)
  .fill(null)
  .map((_, rowIndex) =>
    Array(gridSize)
      .fill(null)
      .map((_, colIndex) => ({
        id: `${rowIndex + 1}${String.fromCharCode(65 + colIndex)}`,
        color: Math.random() > 0.5 ? "red" : "green",
      })),
  );

const items = [
  { id: 1, title: "Parking 1", description: "address" },
  { id: 2, title: "Parking 2", description: "address" },
  { id: 3, title: "Parking 3", description: "address" },
  { id: 4, title: "Parking 4", description: "address" },
];

export const DashCX = () => {
  return (
    <div className="flex flex-col bg-[#262626] border border-[#393939]">
      <div className="grid grid-cols-2 p-4 gap-4 h-[600px]">
        <Card className="bg-[#161616]">
          <CardContent className="p-2 h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1718900000000!5m2!1sen!2suk"
              className="w-full h-full rounded-lg border-0"
              allowFullScreen
              loading="lazy"
              aria-label="New York City Map"
            />
          </CardContent>
        </Card>
        <Card className="bg-[#161616]">
          <CardHeader>
            <CardTitle className="text-[#f4f4f4]">Parking Lot List</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex items-center space-x-4">
                  <ParkingCircle className="w-12 h-12 text-[#f4f4f4]" />
                  <div>
                    <h3 className="text-[#f4f4f4] text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-[#c6c6c6]">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className="p-4">
        <Card className="overflow-hidden rounded-xl bg-[#262626] border border-[#393939]">
          <CardHeader className="border-b border-[#393939]">
            <CardTitle className="text-[#f4f4f4]">Status Grid</CardTitle>
            <CardDescription className="text-[#c6c6c6]">
              Color-coded Parking Availability Status
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 md:p-6">
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
              {grid.flat().map((cell) => (
                <div
                  key={cell.id}
                  className={`aspect-square rounded-lg flex items-center justify-center
                    ${
                      cell.color === "red"
                        ? "bg-[#da1e28]/20"
                        : "bg-[#24a148]/20"
                    }
                    text-xs sm:text-sm text-[#f4f4f4]`}
                >
                  <span>{cell.id}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
