import React from 'react';

const UserContext = React.createContext({
    email: "ilyas@gmail.com",
    fullName:"Ilyas Zhuanyshev",
    auth: false,
    jwtToken: ""
});

export default UserContext;