import useQuery from "./useQuery";

/** Users can add and remove them. */
export default function App() {
  /*
    We destructure the return object from useQuery,
    which has three keys: data, loading, and error.
    BUT since I'm in my recipes app, I want a more specific
    variable name than just "data" so I'm going to rename
    that data variable to `recipes
   */
  const { data: guests, loading, error } = useQuery("/details");

  if (loading) return <p>Loading...</p>;
  if (error || !guests) return <p>{error}</p>;

  return (
    <>
      <h1>Guest List</h1>
      <GuestList guests={guests} />
    </>
  );
}

function GuestCollection({ guests }) {
  return (
    <article className="guests">
      {guests.map((guests) => (
        <GuestCard key={guest.id} guest={guest} />
      ))}
    </article>
  );
}

function GuestCard({ guest }) {
  return (
    <article className="guest">
      <h2>
        {guest.name} #{guest.id}
      </h2>
      <figure>
        <img alt={guest.name} src={guest.imageUrl} />
      </figure>
      <p>{guest.description}</p>
    </article>
  );
}
