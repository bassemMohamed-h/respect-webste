import { Five } from "@/components/brand/Five";

export function FiveValues() {
    return (
        <section className="five-values min-h-[100svh]  relative">
                <Five />
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/8 z-1 w-full mx-auto px-4 py-16 text-primary ">
                    <h2 className="text-9xl font-bold mb-12 text-center">Values</h2>
                    <p className="text-2xl leading-relaxed w-full container-80">
                        At Respect, we are guided by five core values that shape our culture and drive our mission to create a more inclusive and respectful world. These values are the foundation of everything we do, from our products and services to our interactions with customers and communities.
                    </p>
                </div>
        </section>
    )
}