import useQuery from "../useQuery";

export default function GuestDetails({ guestId, setGuestId }) {
  const { data: guest, error } = useQuery(`/guests/${guestId}`);
  if (error) return <p>{error}</p>;
  if (!guest) return <p>Loading...</p>;

  return (
    <article className="guestDetails">
      <h1>Guest Details</h1>
      <address>
        {guest.email}
        <br />
        {guest.phone}
      </address>
      <p>{guest.job}</p>
      <p>{guest.bio}</p>

      <button onClick={() => setGuestId(null)}>Close</button>

      {/* Render guest details here */}
    </article>
  );
}
