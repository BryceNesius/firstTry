import * as React from 'react';
import { RenderWithNavbar } from './components/routing/render_with/a.navbar';

export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <RenderWithNavbar/>
  );
}
