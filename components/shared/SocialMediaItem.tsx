import Image from 'next/image'
import Link from 'next/link'
interface SocailMediaItemProps {
    src: string,
    title: string,
    href: string
}

const SocialMediaItem = ({ src, title, href }: SocailMediaItemProps) => {
    return (
        <a target='_blank' href={href}>
            <div className="h-32 rounded-xl bg-blue flex-center flex-col gap-0.5 shadow-sm dark:shadow-none">
                <Image src={src} alt="" width={50} height={50} />
                <p className="text-700-300">{title}</p>
            </div>
        </a>
    )
}

export default SocialMediaItem