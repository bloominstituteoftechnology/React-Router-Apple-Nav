import React from 'react';
import PageData from '../Data/PageData';
const Page = (props) => {
  console.log(PageData.home);
  console.log(props);
  return (
    <h1>{props.match.params.name}</h1>
  );
}
export default Page;
