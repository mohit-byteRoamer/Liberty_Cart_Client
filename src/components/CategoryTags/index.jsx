/* eslint-disable react/prop-types */
import React from "react";
import { Flex, Tag } from "antd";

const CategoryTags = ({ category, onCategoryChange }) => {
   const [selectedTags, setSelectedTags] = React.useState([]);
   const handleChange = (tag, checked) => {
      const nextSelectedTags = checked
         ? [...selectedTags, tag]
         : selectedTags.filter((t) => t !== tag);
      setSelectedTags(nextSelectedTags);
      onCategoryChange(nextSelectedTags);
   };
   return (
      <Flex gap={4} wrap align="center">
         {category?.map((tag) => (
            <Tag.CheckableTag
               key={tag}
               checked={selectedTags.includes(tag)}
               onChange={(checked) => handleChange(tag, checked)}
               className="text-lg shadow-md py-1 px-2">
               {tag}
            </Tag.CheckableTag>
         ))}
      </Flex>
   );
};
export default CategoryTags;
