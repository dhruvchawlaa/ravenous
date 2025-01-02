import "./App.css";
import BusinessList from "./components/BusinessList/BusinessList";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const businesses = [
    {
      imageSrc:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/3b/ac/a6/light-filled-and-open.jpg?w=600&h=-1&s=1",
      name: "Restaurant One",
      address: "123 Main St",
      city: "City A",
      state: "State A",
      zipcode: "12345",
      category: "Italian",
      rating: 4.5,
      reviewCount: 120,
    },
    {
      imageSrc:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/3b/ac/a6/light-filled-and-open.jpg?w=600&h=-1&s=1",
      name: "Restaurant Two",
      address: "456 Elm St",
      city: "City B",
      state: "State B",
      zipcode: "67890",
      category: "Mexican",
      rating: 4.0,
      reviewCount: 85,
    },
    {
      imageSrc:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/3b/ac/a6/light-filled-and-open.jpg?w=600&h=-1&s=1",
      name: "Restaurant Three",
      address: "789 Oak St",
      city: "City C",
      state: "State C",
      zipcode: "11223",
      category: "Chinese",
      rating: 3.8,
      reviewCount: 200,
    },
  ];

  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
