import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class CakeContainer extends React.Component<Props> {
  render() {
  return (
    <div>
      <h2>Number of cakes - {this.props.numOfCakes} </h2>
      <button onClick={this.props.buyCake}>Buy Cake</button>
    </div>
  )
  }
}

// Action Types
export const BUY_CAKE = 'BUY_CAKE';

// Actions
export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number
  }
}

// Reducer
const initialState = {
  numOfCakes: 10
}

type ActionType =
  { type: typeof BUY_CAKE; payload: number };

export const cakeReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - action.payload
    }

    default: return state
  }
}

// connect
const mapStateToProps = (state: { numOfCakes: number }) => {
  return {
    numOfCakes: state.numOfCakes
  }
}

const mapDispatchToProps = (dispatch: Dispatch<{type: string, payload: number}>) => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainer)