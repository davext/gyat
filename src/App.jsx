import { useState } from "react";
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
  const [numberOfPosts, setNumberOfPosts] = useState(20);

  return (
    <div className="relative w-full">
      <div className="columns-2 md:columns-3 lg:columns-4 p-1">
        {[...Array(numberOfPosts)].map((_, index) => (
          <div
            key={index}
            className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-40 before:hover:bg-opacity-60"
          >
            <img
              className="w-full rounded-md"
              src={`https://source.unsplash.com/random/${index + 1}`}
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
          <DialogContent className="bg-white p-4 rounded-md  h-screen md:h-[90vh] md:max-h-[80vh]">
            {/* <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader> */}
            <iframe
              src="https://backend.lnkdr.com/widget/survey/Bjp6SLVvqLrXnLF9ZJsr"
              style={{
                border: "none",
                width: "100%",
                height: "100%",
              }}
              scrolling="no"
              id="Bjp6SLVvqLrXnLF9ZJsr"
              title="Get A Tattoo"
            ></iframe>
            <script src="https://backend.lnkdr.com/js/form_embed.js"></script>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default App;
