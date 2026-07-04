import React from "react";

interface ListProps<T extends { id: React.Key }> {
  array: T[];
  children: (item: T) => React.ReactNode;
}

const List = <T extends { id: React.Key }>({ array, children }: ListProps<T>) => {
  return (
    <>
      {array.map(item => (
        <React.Fragment key={item.id}>{children(item)}</React.Fragment>
      ))}
    </>
  );
};

export default List;
