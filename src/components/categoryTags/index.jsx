/* eslint-disable react/prop-types */
const CategoryTags = ({ category, onCategoryChange, selectedCategory }) => {
   return (
      <div className="flex flex-wrap gap-4 items-center justify-center">
         {category?.map((tag) => (
            <div
               key={tag}
               onClick={() => onCategoryChange(tag)}
               className={`cursor-pointer text-lg rounded-md shadow-md py-1 px-2 transition-transform transform duration-300 
               ${selectedCategory === tag ? `bg-blue-400` : `bg-white`}`}>
               {tag}
            </div>
         ))}
      </div>
   );
};
export default CategoryTags;