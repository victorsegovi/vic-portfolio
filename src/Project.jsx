export default function Project({place, hidden, duration, show}) {

  return (
    <article className={`w-[600px] h-[400px] transition-all ease-in-out ${duration} overflow-hidden border flex bg-green-500 ${show? `absolute ${place}`: `absolute ${hidden}`}`}>
    </article>
  );
}
