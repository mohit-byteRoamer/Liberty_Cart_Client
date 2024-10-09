import React from "react";
import { Flex, Tag } from "antd";

const CategoryTags = () => {
   const tagsData = ["Movies", "Books", "Music", "Sports"];
   const [selectedTags, setSelectedTags] = React.useState(["Movies"]);
   const handleChange = (tag, checked) => {
      const nextSelectedTags = checked
         ? [...selectedTags, tag]
         : selectedTags.filter((t) => t !== tag);
      console.log("You are interested in: ", nextSelectedTags);
      setSelectedTags(nextSelectedTags);
   };
   return (
      <Flex gap={4} wrap align="center">
         {tagsData.map((tag) => (
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
