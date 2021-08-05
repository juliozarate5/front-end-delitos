import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import NoAuthorized from '../ui/NoAuthorized';

export default function Delitos() {

    const {isAdmin } = useContext(AuthContext);

    return (
        <>
        {isAdmin &&
        (<div>
            delitos!<br/>
            delitos!<br/>
            delitos!<br/>
            delitos!<br/>
            delitos!<br/>
            delitos!<br/>
        </div>)
        }
        {
          !isAdmin && (
              <NoAuthorized />
          )  
        }
        </>
    )
}
