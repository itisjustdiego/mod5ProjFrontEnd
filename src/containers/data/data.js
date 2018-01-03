const TOTAL_COUNT = 1;

export const NYC = { lat: 40.730610, lng: -73.935242 };

//ar result = fetch(`http://localhost:3001/api/v1/users`).then(res => res.json())
//console.log(result)
export const markersData = [...Array(TOTAL_COUNT)] // fill(0) for loose mode
  .map((__, index) => ({
    id: index,
    lat: NYC.lat,
      // 0.01 * index *
      // Math.sin(30 * Math.PI * index / 180) *
      // Math.cos(50 * Math.PI * index / 180) + Math.sin(5 * index / 180),

    lng: NYC.lng
      // 0.01 * index *
      // Math.cos(70 + 23 * Math.PI * index / 180) *
      // Math.cos(50 * Math.PI * index / 180) + Math.sin(5 * index / 180),
  }));
