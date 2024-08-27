import SectionTitle from "@/components/shared/SectionTitle"
import SocialMediaItem from "@/components/shared/SocialMediaItem"
import { socailMediaData, socailMediaDataDark } from "@/constants/socialMediaData"

const SocialMedia = () => {
    return (
        <section className="mt-16">
            <SectionTitle isShowMore={false} title="شبکه های اجتماعی" />
            <div className="dark:hidden grid grid-cols-1 md:grid-cols-3 mt-16 gap-1 md:gap-2">
                {socailMediaDataDark.map(socailMedia => (
                    <SocialMediaItem key={socailMedia.id} href={socailMedia.href} title={socailMedia.title} src={socailMedia.src} />
                ))}
            </div>
            <div className="hidden dark:grid grid-cols-1 md:grid-cols-3 mt-16 gap-1 md:gap-2">
                {socailMediaData.map(socailMedia => (
                    <SocialMediaItem key={socailMedia.id} href={socailMedia.href} title={socailMedia.title} src={socailMedia.src} />
                ))}
            </div>
        </section>
    )
}

export default SocialMedia