import SectionTopBar from "../SectionTopBar";
import { ArrowBtn } from "../Buttons/ArrowBtn";
import CategoryCard from "./CategoryCard";

function BrowseByCategory() {
   return (
      <section className="px-5 py-16">
         {/* 1st section */}
         <SectionTopBar text="Categories" />
         {/* 2nd section */}
         <div className="flex flex-col gap-y-10">
            <div className="flex items-center justify-between py-5">
               {/* Title and Timer */}
               <div className="flex gap-x-14 items-end">
                  <h1 className="text-3xl font-bold">Browse By Category</h1>
               </div>
               {/* Arrow Button */}
               <div>
                  <ArrowBtn />
               </div>
            </div>
            {/* 3rd section */}
            <div>
               <CategoryCard />
            </div>
         </div>
      </section>
   );
}

export default BrowseByCategory;
