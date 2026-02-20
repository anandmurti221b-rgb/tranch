type Car = {
  _id: string;
  Name: string;
  Price: number;
};

async function getCars(): Promise<Car[]> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/cars`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch cars");
  }

  return res.json();
}

export default async function Home() {
  const cars = await getCars();

  return (
    <div>
      <h1>Cars Collection</h1>
      <ul>
        {cars.map((car) => (
          <li key={car._id}>
            <strong>{car.Name}</strong> — ₹{car.Price}
          </li>
        ))}
      </ul>
    </div>
  );
}