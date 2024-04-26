import Link from 'next/link'

interface LinkButtonProps {
    href: string,
    color: 'blue' | 'green',
    text: string,
    extraClasses? : string
}

const LinkButton = ({ href, color, text , extraClasses}: LinkButtonProps) => {
    return (
        <Link href={href} className={`${color === 'blue' ? 'bg-blue' : 'bg-button'} px-4 py-2.5 rounded-full text-gray-200 text-sm ${extraClasses}`}>{text}</Link>
    )
}

export default LinkButton