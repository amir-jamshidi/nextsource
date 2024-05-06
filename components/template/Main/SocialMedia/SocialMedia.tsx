import SectionTitle from "@/components/shared/SectionTitle"
import SocialMediaItem from "@/components/shared/SocialMediaItem"
import { socailMediaData } from "@/constants/socialMediaData"

const SocialMedia = () => {
    return (
        <section className="mt-16">
            <SectionTitle title="شبکه های اجتماعی" />
            <div className="grid grid-cols-1 md:grid-cols-3 mt-16 gap-2">
                {socailMediaData.map(socailMedia => (
                    <SocialMediaItem key={socailMedia.id} href={socailMedia.href} title={socailMedia.title} src={socailMedia.src} />
                ))}
            </div>
        </section>
    )
}

export default SocialMedia