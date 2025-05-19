import { useState } from "react";
import GuestDetails from "./components/guestDetails";
import GuestList from "./components/guestList";

export default function App() {
  const [guestId, setGuestId] = useState(null);

  // An event handler runs a function when an event happens.
  // useEffect runs the function when any of its dependencies rerender or change.
  // NO DEPENDENCY = run the function any time the component rerenders for any reason
  // [] = empty array = run the function ONCE on the initial render
  // [foo, bar] = run the function any time any of the STATE variables change
  // NEVER use the setter of a dependency in the useEffect because you will get
  // caught in an infinite loop
  // The setup function CANNOT be async, so if you want to do async stuff,
  // you have to define the async function either inside or outside of it.
  //   useEffect(() => {
  //     const getGuests = async () => {
  //       try {
  //         const response = await fetch(API);
  //         if (!response.ok) throw Error(":(");
  //         const result = await response.json();
  //         setGuests(result.data);
  //       } catch (e) {
  //         console.error(e);
  //       }
  //     };
  //     getGuests();
  //   }, []);

  return (
    <>
      {guestId ? (
        <GuestDetails guestId={guestId} setGuestId={setGuestId} />
      ) : (
        <GuestList setGuestId={setGuestId} />
      )}
    </>
  );
}
