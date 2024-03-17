import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./userActions";
import { User } from "./userActions";
import { Dispatch } from "@reduxjs/toolkit";
import { D } from "./userActions";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

class UsersContainer extends React.Component<Props> {
  componentDidMount(): void {
    this.props.fetchUsers();
  }

  render(): React.ReactNode {
    const { userData } = this.props;
    return userData.loading ? (
      <h2>Loading</h2>
    ) : userData.error ? (
      <h2>{userData.error}</h2>
    ) : (
      <div>
        <h2>Users List</h2>
        <div>
          {userData &&
            userData.users &&
            userData.users.map((user: User) => <p>{user.name}</p>)}
        </div>
      </div>
    );
  }
}

type State = {
  user: {
    loading: boolean;
    users: User[];
    error?: string;
  };
};

const mapStateToProps = (state: State) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
