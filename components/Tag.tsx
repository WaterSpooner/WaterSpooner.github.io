import React from 'react';

export function Tag(props:any) {
    return (
      <div className = " flex-row flex-wrap bg-sky-900 px-2 mr-1 rounded-xl my-1 pb-1">{props.children}</div>
    );
  }