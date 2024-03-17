import React from "react";
import { connect } from "react-redux";
import { Dispatch } from 'redux'

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class Component extends React.Component<Props> {
  render() {
    const {state, increment} = this.props;
    return <div onClick={() => increment(1)}>{state}</div>
  }  
}

// // 関数の場合
// const Component: React.FC<Props, State> = ({ state: State, dispatch }) => {
//   return <div onClick={() => dispatch("some")}>{state}</div>
// };

const mapStateToProps = (state: number) => {
  return {
    state: state
  };
};

const mapDispatchToProps = (dispatch: Dispatch<{type: "INCREMENT", payload: number}>) => {
  return {
    increment: (state: number) => {
      dispatch({ type: "INCREMENT", payload: state})
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);