import { AddRounded } from "@mui/icons-material"
import Link from "next/link"

interface NoItemProps {
    title: string,
    margin?: boolean,
    href?: string,
    buttonTitle?: string
}

const NoItemUserPanel = ({ title, margin = true, href, buttonTitle }: NoItemProps) => {
    return (
        <div className={`py-12 flex-center bg-blue-600/10 rounded-2xl flex-col gap-y-3 ${margin ? 'mt-5 md:mt-6' : ''}`} >
            <p className='text-sm text-amber-500/80'>{title}</p>
            {href && (
                <div className="flex text-sm bg-green-500/60 rounded-xl py-1.5 px-4 gap-x-1">
                    <Link href={`${href}`}>
                        <p className="text-gray-100 text-sm">{buttonTitle}</p>
                    </Link>
                </div>
            )}
        </div >
    )
}

export default NoItemUserPanel