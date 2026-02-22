import { RespectBrand } from "@/components/brand/RespectBrand";

export function Story(){
    return(
        <section className="Story min-h-[100svh] bg-primary text-third flex items-center justify-center ">
            <div className="flex items-center justify-center container-80  gap-4 ">
                <div className="brand flex-1">
                    <RespectBrand/>
                </div>
                <div className="desc flex-1 text-2xl">
                    <p>started from a simple belief: Most brands don’t fail because of execution, but because of lack of</p>
                    <span className="text-end block text-secondary mr-2 text-3xl">clarity..</span>
                </div>
            </div>
        </section>
    )
}