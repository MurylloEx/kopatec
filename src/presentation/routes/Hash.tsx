import React, { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'src/presentation/pages';

export interface HashRoutesProps { }
 
export const HashRoutes: FunctionComponent<HashRoutesProps> = () => {
  return (
    <Routes>
      <Route path="/" element={ <HomePage /> } />
    </Routes>
  );
}