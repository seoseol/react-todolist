import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ data, setData }) => {
  return (
    <div>
      {data
        .filter((item) => item.bookmark_status == "N")
        .map((item) => (
          <TodoItem dataItem={item} dataList={data} setData={setData} />
        ))}
    </div>
  );
};

export default TodoList;
