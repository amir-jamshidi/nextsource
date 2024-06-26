import { getProductsByTagHref } from "@/actions/product.action"
import { getPopularTags, getTagTitleByHref } from "@/actions/tag.action";
import FilterSection from "@/components/shared/FilterSection";
import NoItemSection from "@/components/shared/NoItemSection";
import PageTitle from "@/components/shared/PageTitle";
import PopularTagSection from "@/components/shared/PopularTagSection";
import SourceContainer from "@/components/shared/SourceContainer";
import SourceItem from "@/components/shared/SourceItem";
import { IProduct } from "@/types/product";
import { ITag } from "@/types/tag";
import { notFound } from "next/navigation";

interface tagProps {
    params: { tagHref: string },
    searchParams: { filter: string }
}

export const generateMetadata = async ({ params }: { params: { tagHref: string } }) => {
    const tagTitle = await getTagTitleByHref(params.tagHref);
    return {
        title: `نکست سورس | تگ ${tagTitle}`
    }
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
                    <NoItemSection />
                )}

            </div>
            <PopularTagSection tags={tags} />
        </div>
    )
}

export default page