class PermissionHelper {
  static isPermitted = (role) => {
    return JSON.parse(localStorage.getItem('roles')).includes(role);
  };

  static isAdmin = () => {
    return PermissionHelper.isPermitted('ROLE_ADMIN') || PermissionHelper.isPermitted('ROLE_SUPER_ADMIN');
  };
}

export default PermissionHelper;
