export default function Calendar() {
  return (
    <main className="bg-background text-white min-h-screen mt-20">
      <div className="container py-16">
        <h1 className="text-5xl font-bold mb-16 text-center pb-2">Calendar</h1>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=calendar%40hackucf.org&amp;ctz=America%2FNew_York"
          className="w-full h-[800px] border-0"
          title="HackUCF Calendar"
        />
      </div>
    </main>
  );
}
