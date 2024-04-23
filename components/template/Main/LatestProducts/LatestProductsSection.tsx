import SctionTitle from "@/components/shared/SctionTitle"
import SourceItem from "@/components/shared/SourceItem"



const LatestProductsSection = () => {
  return (
    <div className="mb-20">
      <SctionTitle title="جدیدترین سورس ها" />
      <div className="grid grid-cols-4 pt-12 gap-y-10 gap-x-2">
        <SourceItem />
        <SourceItem />
        <SourceItem />
        <SourceItem />
        <SourceItem />
        <SourceItem />
        <SourceItem />
        <SourceItem />
      </div>
    </div>
  )
}

export default LatestProductsSection