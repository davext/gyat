import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function App() {
  const [numberOfPosts, setNumberOfPosts] = useState(18);
  const [shuffledIndices, setShuffledIndices] = useState([]);
  const [randomHeights, setRandomHeights] = useState([]);

  useEffect(() => {
    // Load the lnkdr embed script
    const script = document.createElement("script");
    script.src = "https://backend.lnkdr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Create and shuffle array of indices
    const indices = Array.from({ length: numberOfPosts }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    // Generate random heights between 200 and 600
    const heights = Array.from({ length: numberOfPosts }, () =>
      Math.floor(Math.random() * (600 - 200) + 200)
    );

    setShuffledIndices(indices);
    setRandomHeights(heights);
  }, []);

  return (
    <div className="relative w-full">
      <div className="columns-2 md:columns-3 lg:columns-4 p-1">
        {shuffledIndices.map((index, i) => (
          <div
            key={index}
            className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-40 before:hover:bg-opacity-60"
          >
            <img
              className="w-full rounded-md object-cover"
              style={{ height: `${randomHeights[i]}px` }}
              src={`https://bucket.gyatinc.com/images/${String(
                index + 1
              ).padStart(3, "0")}.jpg`}
            />
            <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
              <div className="relative">{/* Text if needed */}</div>
              <div className="mt-auto">{/* Labels if needed */}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="overlay fixed inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white p-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 font-cooper italic inline-block">
          GYAT Inc.
        </h1>
        <p className="mb-4 font-normal">info@gyatinc.com</p>
        <Dialog>
          <DialogTrigger>
            <Button className="bg-slate-50 hover:bg-slate-400 text-black">
              Book Appointment
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white p-4 rounded-md overflow-y-auto md:max-h-[90vh]">
            <iframe
              src="https://backend.lnkdr.com/widget/survey/Bjp6SLVvqLrXnLF9ZJsr"
              style={{
                border: "none",
                width: "100%",
              }}
              scrolling="no"
              id="Bjp6SLVvqLrXnLF9ZJsr"
              title="Get A Tattoo"
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default App;
