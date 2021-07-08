import React from 'react';
import PageData from '../Data/PageData';
import Missing from '../404/Missing';
const Page = (props) => {
  let page = props.match.params.name;
  if (props.match.path === '/'){
    page = PageData.home;
    return <h1>{page.header}</h1>
  } else if(PageData[page] === undefined){
    return <Missing />
  } else {
    return (
      <div>
        <h1>{PageData[page].header}</h1>
      </div>
    );
  }
}
export default Page;
