import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DeleteStadiums from '../../components/manage_stadiums/ManageStadiums';

const DeleteStadiumsPage = () => {
  const { user } = useSelector((state) => state.users);

  useEffect(() => {
    if (user.token === undefined) {
      window.location.href = '/login';
    }
  }, [user]);

  return (
    <div>
      <DeleteStadiums />
    </div>
  );
};

export default DeleteStadiumsPage;
