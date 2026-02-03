
import { TextAnimate } from "@/registry/magicui/text-animate"

export function MessageSection() {
    return (
        <section className="relative z-10 bg-background">
            <div className="flex h-[50vh] -mt-48 items-center justify-center overflow-hidden">
                <div>
                    <TextAnimate animation="fadeIn" by="word" className="text-5xl text-center font-light italic text-muted-foreground lg:text-7xl">
                        Ningún sufrimiento es insignificante
                    </TextAnimate>
                </div>
            </div>
        </section>
    )
}
