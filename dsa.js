const UserPermisions = [
    'CREATE_POST', 
    'EDIT_POST',
    'READ_POST',
    'DELETE_POST',
];
function createpost(postData) (
    if (!UserPermisions.includes (
        'CREATE_POST')){
            return 402;
        }
        else{
            return postData;
        }
    )
)