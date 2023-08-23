const UserPermissions = [
    'CREATE_POST', 
    'EDIT_POST',
    'READ_POST',
    'DELETE_POST',
];

function createPost(postData) {
    if (!UserPermissions.includes('CREATE_POST')) {
        return 402; // You might want to use a more descriptive error code or message here.
    } else {
        // Assuming you want to return the postData if the permission is granted.
        return postData;
    }
}


