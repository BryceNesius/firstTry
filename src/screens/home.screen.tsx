import * as React from 'react';

export interface IHomeScreenProps {
}

export interface IHomeScreenState {
}

export default class HomeScreen extends React.Component<IHomeScreenProps, IHomeScreenState> {
  constructor(props: IHomeScreenProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <>
      <h1>Hello World!</h1>
      </>
    );
  }
}
