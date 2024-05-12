import { getProductsByTagHref } from "@/actions/product.action"
import { getPopularTags } from "@/actions/tag.action";
import FilterSection from "@/components/shared/FilterSection";
import PageTitle from "@/components/shared/PageTitle";
import PopularTagSection from "@/components/shared/PopularTagSection";
import SearchSection from "@/components/shared/SearchSection";
import SourceContainer from "@/components/shared/SourceContainer";
import SourceItem from "@/components/shared/SourceItem";
import { IProduct } from "@/types/product";
import { ITag } from "@/types/tag";
import { notFound } from "next/navigation";

interface tagProps {
    params: { tagHref: string },
    searchParams: { filter: string }
}

const page = async ({ params: { tagHref }, searchParams: { filter = '' } }: tagProps) => {

    const details = await getProductsByTagHref(tagHref, filter) as ITag;
    const tags = await getPopularTags() as ITag[];
    if (!details) return notFound();

    return (
        <div className="container">
            <PageTitle title={details.title} titleEn={details.titleEn} />
            <FilterSection productCount={details.products.length} />
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
            <PopularTagSection tags={tags} />
        </div>
    )
}

export default page