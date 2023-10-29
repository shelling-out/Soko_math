export let Default = [
        {
            url:'/',
            icon:'newsfeed',
            name:'newsfeed',
            container:'News',
        },
        {
            url:'/chat',
            icon:'chat',
            name:'chat',
            container:'More pages'
        }
];
export let Group = [
    
        {
            url:`/group/${document.documentURI.split('group/')[1]}/users?status=members`,
            icon:'Members',
            name:'Members',
            container:'Group'
        },
        {
            url:`/group/${document.documentURI.split('group/')[1]}/user?status=join`,
            icon:'Join Requests',
            name:'join Requests',
            container:'Group'
        }
];

export let Relations = [
    
    {
        url:'/relations?status=myFriends',
        icon:'myFriends',
        name:'Friends',
        container:'Relations',
    },
    {
        url:'/relations?status=mySentRequests',
        icon:'mySentRequests',
        name:'Sent Requests',
        container:'Relations',
    },
    {
        url:'/relations?status=myReceivedRequests',
        icon:'myReceivedRequests',
        name:'Received Requests',
        container:'Relations',
    },
    {
        url:'/relations?status=myBlockedList',
        icon:'BlockedList',
        name:'Blocked People',
        container:'Relations',
    }
    // ,
    // {
    //     url:'/relations?status=whoBlockedMeList',
    //     icon:'whoBlockedMeList',
    //     name:'People Blocked Me',
    //     container:'relations',
    // }
];
 
