import { LetsScribble } from "@/components/brand/LetsScribble";

export function LetsConnectHeader() {

  return (
   <div className="relative min-h-[100svh] flex justify-center items-center " >
        <LetsScribble/>
        <h3 className="absolute text-primary text-8xl bottom-[37%]">Connect</h3>  
    </div>
  );
}