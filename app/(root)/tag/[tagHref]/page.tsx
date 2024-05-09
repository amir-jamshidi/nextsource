import { getProductsByTagHref } from "@/actions/product.action"
import FilterSection from "@/components/shared/FilterSection";
import SourceContainer from "@/components/shared/SourceContainer";
import SourceItem from "@/components/shared/SourceItem";
import { IProduct } from "@/types/product";
import { ITag } from "@/types/tag";
import { notFound } from "next/navigation";

interface tagProps {
    params: { tagHref: string }
}

const page = async ({ params: { tagHref } }: tagProps) => {

    const details = await getProductsByTagHref(tagHref) as ITag;
    if (!details) return notFound();

    return (
        <div className="container">
            <div className="pt-14 flex flex-center gap-y-1 flex-col">
                <h1 className="text-gray-200 text-2xl">{details.title}</h1>
                <h2 className="text-gray-400 text-xl">{details.titleEn}</h2>
            </div>
            <FilterSection productCount={details.products.length} isShowSearch={false} />
            <div>
                {details.products.length > 0 ? (
                    <SourceContainer>
                        {details.products.map((product: IProduct) => (
                            <SourceItem key={product._id} product={product} />
                        ))}
                    </SourceContainer>
                ) : (
                    <div className='flex-center justify-center flex-col gap-y-1.5 pt-24 pb-16'>
                        <p className='text-xl text-gray-300'>سورسی پیدا نشد</p>
                        <p className='text-base text-gray-400'>اگه دنبال سورسی هستی که پیداش نمیکنی میتونی درخواست سورس بدی</p>
                    </div>
                )}

            </div>
        </div>
    )
}

export default page