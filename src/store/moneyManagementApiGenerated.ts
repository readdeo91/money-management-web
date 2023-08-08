import { moneyManagementPlaceHolderApi as api } from "./moneyManagementApi";
export const addTagTypes = [
  "account-po-entity-controller",
  "account-po-search-controller",
  "category-po-entity-controller",
  "category-po-search-controller",
  "profile-controller",
  "role-entity-controller",
  "role-search-controller",
  "user-entity-controller",
  "user-search-controller",
  "user-property-reference-controller",
  "transactions",
  "category",
  "account",
  "auth",
  "user",
] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getAccountPOes: build.query<
        GetAccountPOesApiResponse,
        GetAccountPOesApiArg
      >({
        query: (queryArg) => ({
          url: `/accountPOes`,
          params: {
            page: queryArg.page,
            size: queryArg.size,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["account-po-entity-controller"],
      }),
      postAccountPOes: build.mutation<
        PostAccountPOesApiResponse,
        PostAccountPOesApiArg
      >({
        query: (queryArg) => ({
          url: `/accountPOes`,
          method: "POST",
          body: queryArg.accountPoRequestBody,
        }),
        invalidatesTags: ["account-po-entity-controller"],
      }),
      getAccountPOesSearchDeleteByUserAndId: build.query<
        GetAccountPOesSearchDeleteByUserAndIdApiResponse,
        GetAccountPOesSearchDeleteByUserAndIdApiArg
      >({
        query: (queryArg) => ({
          url: `/accountPOes/search/deleteByUserAndId`,
          params: { user: queryArg.user, id: queryArg.id },
        }),
        providesTags: ["account-po-search-controller"],
      }),
      getAccountPOesSearchExistsByUserAndId: build.query<
        GetAccountPOesSearchExistsByUserAndIdApiResponse,
        GetAccountPOesSearchExistsByUserAndIdApiArg
      >({
        query: (queryArg) => ({
          url: `/accountPOes/search/existsByUserAndId`,
          params: { user: queryArg.user, id: queryArg.id },
        }),
        providesTags: ["account-po-search-controller"],
      }),
      getAccountPOesSearchFindByUser: build.query<
        GetAccountPOesSearchFindByUserApiResponse,
        GetAccountPOesSearchFindByUserApiArg
      >({
        query: (queryArg) => ({
          url: `/accountPOes/search/findByUser`,
          params: { user: queryArg.user },
        }),
        providesTags: ["account-po-search-controller"],
      }),
      getAccountPOesSearchFindByUserOrderById: build.query<
        GetAccountPOesSearchFindByUserOrderByIdApiResponse,
        GetAccountPOesSearchFindByUserOrderByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/accountPOes/search/findByUserOrderById`,
          params: {
            user: queryArg.user,
            page: queryArg.page,
            size: queryArg.size,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["account-po-search-controller"],
      }),
      getAccountPOesSearchFindFirstByUserAndId: build.query<
        GetAccountPOesSearchFindFirstByUserAndIdApiResponse,
        GetAccountPOesSearchFindFirstByUserAndIdApiArg
      >({
        query: (queryArg) => ({
          url: `/accountPOes/search/findFirstByUserAndId`,
          params: { user: queryArg.user, id: queryArg.id },
        }),
        providesTags: ["account-po-search-controller"],
      }),
      getAccountPOesById: build.query<
        GetAccountPOesByIdApiResponse,
        GetAccountPOesByIdApiArg
      >({
        query: (queryArg) => ({ url: `/accountPOes/${queryArg.id}` }),
        providesTags: ["account-po-entity-controller"],
      }),
      putAccountPOesById: build.mutation<
        PutAccountPOesByIdApiResponse,
        PutAccountPOesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/accountPOes/${queryArg.id}`,
          method: "PUT",
          body: queryArg.accountPoRequestBody,
        }),
        invalidatesTags: ["account-po-entity-controller"],
      }),
      deleteAccountPOesById: build.mutation<
        DeleteAccountPOesByIdApiResponse,
        DeleteAccountPOesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/accountPOes/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["account-po-entity-controller"],
      }),
      patchAccountPOesById: build.mutation<
        PatchAccountPOesByIdApiResponse,
        PatchAccountPOesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/accountPOes/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.accountPoRequestBody,
        }),
        invalidatesTags: ["account-po-entity-controller"],
      }),
      getCategoryPOes: build.query<
        GetCategoryPOesApiResponse,
        GetCategoryPOesApiArg
      >({
        query: (queryArg) => ({
          url: `/categoryPOes`,
          params: {
            page: queryArg.page,
            size: queryArg.size,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["category-po-entity-controller"],
      }),
      postCategoryPOes: build.mutation<
        PostCategoryPOesApiResponse,
        PostCategoryPOesApiArg
      >({
        query: (queryArg) => ({
          url: `/categoryPOes`,
          method: "POST",
          body: queryArg.categoryPoRequestBody,
        }),
        invalidatesTags: ["category-po-entity-controller"],
      }),
      getCategoryPOesSearchDeleteByUserAndId: build.query<
        GetCategoryPOesSearchDeleteByUserAndIdApiResponse,
        GetCategoryPOesSearchDeleteByUserAndIdApiArg
      >({
        query: (queryArg) => ({
          url: `/categoryPOes/search/deleteByUserAndId`,
          params: { user: queryArg.user, id: queryArg.id },
        }),
        providesTags: ["category-po-search-controller"],
      }),
      getCategoryPOesSearchExistsByUserAndId: build.query<
        GetCategoryPOesSearchExistsByUserAndIdApiResponse,
        GetCategoryPOesSearchExistsByUserAndIdApiArg
      >({
        query: (queryArg) => ({
          url: `/categoryPOes/search/existsByUserAndId`,
          params: { user: queryArg.user, id: queryArg.id },
        }),
        providesTags: ["category-po-search-controller"],
      }),
      getCategoryPOesSearchFindByUser: build.query<
        GetCategoryPOesSearchFindByUserApiResponse,
        GetCategoryPOesSearchFindByUserApiArg
      >({
        query: (queryArg) => ({
          url: `/categoryPOes/search/findByUser`,
          params: { used: queryArg.used },
        }),
        providesTags: ["category-po-search-controller"],
      }),
      getCategoryPOesSearchFindByUserAndId: build.query<
        GetCategoryPOesSearchFindByUserAndIdApiResponse,
        GetCategoryPOesSearchFindByUserAndIdApiArg
      >({
        query: (queryArg) => ({
          url: `/categoryPOes/search/findByUserAndId`,
          params: { used: queryArg.used, id: queryArg.id },
        }),
        providesTags: ["category-po-search-controller"],
      }),
      getCategoryPOesById: build.query<
        GetCategoryPOesByIdApiResponse,
        GetCategoryPOesByIdApiArg
      >({
        query: (queryArg) => ({ url: `/categoryPOes/${queryArg.id}` }),
        providesTags: ["category-po-entity-controller"],
      }),
      putCategoryPOesById: build.mutation<
        PutCategoryPOesByIdApiResponse,
        PutCategoryPOesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/categoryPOes/${queryArg.id}`,
          method: "PUT",
          body: queryArg.categoryPoRequestBody,
        }),
        invalidatesTags: ["category-po-entity-controller"],
      }),
      deleteCategoryPOesById: build.mutation<
        DeleteCategoryPOesByIdApiResponse,
        DeleteCategoryPOesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/categoryPOes/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["category-po-entity-controller"],
      }),
      patchCategoryPOesById: build.mutation<
        PatchCategoryPOesByIdApiResponse,
        PatchCategoryPOesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/categoryPOes/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.categoryPoRequestBody,
        }),
        invalidatesTags: ["category-po-entity-controller"],
      }),
      listAllFormsOfMetadata1: build.query<
        ListAllFormsOfMetadata1ApiResponse,
        ListAllFormsOfMetadata1ApiArg
      >({
        query: () => ({ url: `/profile` }),
        providesTags: ["profile-controller"],
      }),
      descriptor111: build.query<Descriptor111ApiResponse, Descriptor111ApiArg>(
        {
          query: () => ({ url: `/profile/accountPOes` }),
          providesTags: ["profile-controller"],
        }
      ),
      descriptor112: build.query<Descriptor112ApiResponse, Descriptor112ApiArg>(
        {
          query: () => ({ url: `/profile/categoryPOes` }),
          providesTags: ["profile-controller"],
        }
      ),
      descriptor113: build.query<Descriptor113ApiResponse, Descriptor113ApiArg>(
        {
          query: () => ({ url: `/profile/roles` }),
          providesTags: ["profile-controller"],
        }
      ),
      descriptor114: build.query<Descriptor114ApiResponse, Descriptor114ApiArg>(
        {
          query: () => ({ url: `/profile/users` }),
          providesTags: ["profile-controller"],
        }
      ),
      getRoles: build.query<GetRolesApiResponse, GetRolesApiArg>({
        query: (queryArg) => ({
          url: `/roles`,
          params: {
            page: queryArg.page,
            size: queryArg.size,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["role-entity-controller"],
      }),
      postRoles: build.mutation<PostRolesApiResponse, PostRolesApiArg>({
        query: (queryArg) => ({
          url: `/roles`,
          method: "POST",
          body: queryArg.roleRequestBody,
        }),
        invalidatesTags: ["role-entity-controller"],
      }),
      getRolesSearchFindByName: build.query<
        GetRolesSearchFindByNameApiResponse,
        GetRolesSearchFindByNameApiArg
      >({
        query: (queryArg) => ({
          url: `/roles/search/findByName`,
          params: { roleName: queryArg.roleName },
        }),
        providesTags: ["role-search-controller"],
      }),
      getRolesById: build.query<GetRolesByIdApiResponse, GetRolesByIdApiArg>({
        query: (queryArg) => ({ url: `/roles/${queryArg.id}` }),
        providesTags: ["role-entity-controller"],
      }),
      putRolesById: build.mutation<PutRolesByIdApiResponse, PutRolesByIdApiArg>(
        {
          query: (queryArg) => ({
            url: `/roles/${queryArg.id}`,
            method: "PUT",
            body: queryArg.roleRequestBody,
          }),
          invalidatesTags: ["role-entity-controller"],
        }
      ),
      deleteRolesById: build.mutation<
        DeleteRolesByIdApiResponse,
        DeleteRolesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/roles/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["role-entity-controller"],
      }),
      patchRolesById: build.mutation<
        PatchRolesByIdApiResponse,
        PatchRolesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/roles/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.roleRequestBody,
        }),
        invalidatesTags: ["role-entity-controller"],
      }),
      getUsers: build.query<GetUsersApiResponse, GetUsersApiArg>({
        query: (queryArg) => ({
          url: `/users`,
          params: {
            page: queryArg.page,
            size: queryArg.size,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["user-entity-controller"],
      }),
      postUsers: build.mutation<PostUsersApiResponse, PostUsersApiArg>({
        query: (queryArg) => ({
          url: `/users`,
          method: "POST",
          body: queryArg.userRequestBody,
        }),
        invalidatesTags: ["user-entity-controller"],
      }),
      getUsersSearchExistsByEmail: build.query<
        GetUsersSearchExistsByEmailApiResponse,
        GetUsersSearchExistsByEmailApiArg
      >({
        query: (queryArg) => ({
          url: `/users/search/existsByEmail`,
          params: { email: queryArg.email },
        }),
        providesTags: ["user-search-controller"],
      }),
      getUsersSearchExistsByUsername: build.query<
        GetUsersSearchExistsByUsernameApiResponse,
        GetUsersSearchExistsByUsernameApiArg
      >({
        query: (queryArg) => ({
          url: `/users/search/existsByUsername`,
          params: { username: queryArg.username },
        }),
        providesTags: ["user-search-controller"],
      }),
      getUsersSearchFindByEmail: build.query<
        GetUsersSearchFindByEmailApiResponse,
        GetUsersSearchFindByEmailApiArg
      >({
        query: (queryArg) => ({
          url: `/users/search/findByEmail`,
          params: { email: queryArg.email },
        }),
        providesTags: ["user-search-controller"],
      }),
      getUsersSearchFindByUsername: build.query<
        GetUsersSearchFindByUsernameApiResponse,
        GetUsersSearchFindByUsernameApiArg
      >({
        query: (queryArg) => ({
          url: `/users/search/findByUsername`,
          params: { username: queryArg.username },
        }),
        providesTags: ["user-search-controller"],
      }),
      getUsersSearchFindByUsernameOrEmail: build.query<
        GetUsersSearchFindByUsernameOrEmailApiResponse,
        GetUsersSearchFindByUsernameOrEmailApiArg
      >({
        query: (queryArg) => ({
          url: `/users/search/findByUsernameOrEmail`,
          params: { username: queryArg.username, email: queryArg.email },
        }),
        providesTags: ["user-search-controller"],
      }),
      getUsersById: build.query<GetUsersByIdApiResponse, GetUsersByIdApiArg>({
        query: (queryArg) => ({ url: `/users/${queryArg.id}` }),
        providesTags: ["user-entity-controller"],
      }),
      putUsersById: build.mutation<PutUsersByIdApiResponse, PutUsersByIdApiArg>(
        {
          query: (queryArg) => ({
            url: `/users/${queryArg.id}`,
            method: "PUT",
            body: queryArg.userRequestBody,
          }),
          invalidatesTags: ["user-entity-controller"],
        }
      ),
      deleteUsersById: build.mutation<
        DeleteUsersByIdApiResponse,
        DeleteUsersByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/users/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["user-entity-controller"],
      }),
      patchUsersById: build.mutation<
        PatchUsersByIdApiResponse,
        PatchUsersByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/users/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.userRequestBody,
        }),
        invalidatesTags: ["user-entity-controller"],
      }),
      getUsersByIdRoles: build.query<
        GetUsersByIdRolesApiResponse,
        GetUsersByIdRolesApiArg
      >({
        query: (queryArg) => ({ url: `/users/${queryArg.id}/roles` }),
        providesTags: ["user-property-reference-controller"],
      }),
      putUsersByIdRoles: build.mutation<
        PutUsersByIdRolesApiResponse,
        PutUsersByIdRolesApiArg
      >({
        query: (queryArg) => ({
          url: `/users/${queryArg.id}/roles`,
          method: "PUT",
          body: queryArg.collectionModelObject,
        }),
        invalidatesTags: ["user-property-reference-controller"],
      }),
      deleteUsersByIdRoles: build.mutation<
        DeleteUsersByIdRolesApiResponse,
        DeleteUsersByIdRolesApiArg
      >({
        query: (queryArg) => ({
          url: `/users/${queryArg.id}/roles`,
          method: "DELETE",
        }),
        invalidatesTags: ["user-property-reference-controller"],
      }),
      patchUsersByIdRoles: build.mutation<
        PatchUsersByIdRolesApiResponse,
        PatchUsersByIdRolesApiArg
      >({
        query: (queryArg) => ({
          url: `/users/${queryArg.id}/roles`,
          method: "PATCH",
          body: queryArg.collectionModelObject,
        }),
        invalidatesTags: ["user-property-reference-controller"],
      }),
      getUsersByIdRolesAndPropertyId: build.query<
        GetUsersByIdRolesAndPropertyIdApiResponse,
        GetUsersByIdRolesAndPropertyIdApiArg
      >({
        query: (queryArg) => ({
          url: `/users/${queryArg.id}/roles/${queryArg.propertyId}`,
        }),
        providesTags: ["user-property-reference-controller"],
      }),
      deleteUsersByIdRolesAndPropertyId: build.mutation<
        DeleteUsersByIdRolesAndPropertyIdApiResponse,
        DeleteUsersByIdRolesAndPropertyIdApiArg
      >({
        query: (queryArg) => ({
          url: `/users/${queryArg.id}/roles/${queryArg.propertyId}`,
          method: "DELETE",
        }),
        invalidatesTags: ["user-property-reference-controller"],
      }),
      getTransaction: build.query<
        GetTransactionApiResponse,
        GetTransactionApiArg
      >({
        query: (queryArg) => ({ url: `/transactions/${queryArg.id}` }),
        providesTags: ["transactions"],
      }),
      updateTransaction: build.mutation<
        UpdateTransactionApiResponse,
        UpdateTransactionApiArg
      >({
        query: (queryArg) => ({
          url: `/transactions/${queryArg.id}`,
          method: "PUT",
          body: queryArg.transaction,
        }),
        invalidatesTags: ["transactions"],
      }),
      deleteTransaction: build.mutation<
        DeleteTransactionApiResponse,
        DeleteTransactionApiArg
      >({
        query: (queryArg) => ({
          url: `/transactions/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["transactions"],
      }),
      patchTransaction: build.mutation<
        PatchTransactionApiResponse,
        PatchTransactionApiArg
      >({
        query: (queryArg) => ({
          url: `/transactions/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.jsonPatch,
        }),
        invalidatesTags: ["transactions"],
      }),
      getCategory: build.query<GetCategoryApiResponse, GetCategoryApiArg>({
        query: (queryArg) => ({ url: `/categories/${queryArg.id}` }),
        providesTags: ["category"],
      }),
      updateCategory: build.mutation<
        UpdateCategoryApiResponse,
        UpdateCategoryApiArg
      >({
        query: (queryArg) => ({
          url: `/categories/${queryArg.id}`,
          method: "PUT",
          body: queryArg.category,
        }),
        invalidatesTags: ["category"],
      }),
      deleteCategory: build.mutation<
        DeleteCategoryApiResponse,
        DeleteCategoryApiArg
      >({
        query: (queryArg) => ({
          url: `/categories/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["category"],
      }),
      getAccount: build.query<GetAccountApiResponse, GetAccountApiArg>({
        query: (queryArg) => ({ url: `/accounts/${queryArg.id}` }),
        providesTags: ["account"],
      }),
      updateAccount: build.mutation<
        UpdateAccountApiResponse,
        UpdateAccountApiArg
      >({
        query: (queryArg) => ({
          url: `/accounts/${queryArg.id}`,
          method: "PUT",
          body: queryArg.account,
        }),
        invalidatesTags: ["account"],
      }),
      deleteAccount: build.mutation<
        DeleteAccountApiResponse,
        DeleteAccountApiArg
      >({
        query: (queryArg) => ({
          url: `/accounts/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["account"],
      }),
      patchAccount: build.mutation<PatchAccountApiResponse, PatchAccountApiArg>(
        {
          query: (queryArg) => ({
            url: `/accounts/${queryArg.id}`,
            method: "PATCH",
            body: queryArg.jsonPatch,
          }),
          invalidatesTags: ["account"],
        }
      ),
      getTransactionPage: build.query<
        GetTransactionPageApiResponse,
        GetTransactionPageApiArg
      >({
        query: (queryArg) => ({
          url: `/transactions`,
          params: { page: queryArg.page, size: queryArg.size },
        }),
        providesTags: ["transactions"],
      }),
      createTransaction: build.mutation<
        CreateTransactionApiResponse,
        CreateTransactionApiArg
      >({
        query: (queryArg) => ({
          url: `/transactions`,
          method: "POST",
          body: queryArg.transaction,
        }),
        invalidatesTags: ["transactions"],
      }),
      getAllCategories: build.query<
        GetAllCategoriesApiResponse,
        GetAllCategoriesApiArg
      >({
        query: () => ({ url: `/categories` }),
        providesTags: ["category"],
      }),
      createCategory: build.mutation<
        CreateCategoryApiResponse,
        CreateCategoryApiArg
      >({
        query: (queryArg) => ({
          url: `/categories`,
          method: "POST",
          body: queryArg.category,
        }),
        invalidatesTags: ["category"],
      }),
      registerUser: build.mutation<RegisterUserApiResponse, RegisterUserApiArg>(
        {
          query: (queryArg) => ({
            url: `/auth/signup`,
            method: "POST",
            body: queryArg.signUpRequest,
          }),
          invalidatesTags: ["auth"],
        }
      ),
      authenticateUser: build.mutation<
        AuthenticateUserApiResponse,
        AuthenticateUserApiArg
      >({
        query: (queryArg) => ({
          url: `/auth/login`,
          method: "POST",
          body: queryArg.loginRequest,
        }),
        invalidatesTags: ["auth"],
      }),
      getAllAccounts1: build.query<
        GetAllAccounts1ApiResponse,
        GetAllAccounts1ApiArg
      >({
        query: (queryArg) => ({
          url: `/accounts`,
          params: { pageable: queryArg.pageable },
        }),
        providesTags: ["account"],
      }),
      createAccount: build.mutation<
        CreateAccountApiResponse,
        CreateAccountApiArg
      >({
        query: (queryArg) => ({
          url: `/accounts`,
          method: "POST",
          body: queryArg.account,
        }),
        invalidatesTags: ["account"],
      }),
      patch: build.mutation<PatchApiResponse, PatchApiArg>({
        query: () => ({ url: `/transactions/`, method: "PATCH" }),
        invalidatesTags: ["transactions"],
      }),
      patchCategory: build.mutation<
        PatchCategoryApiResponse,
        PatchCategoryApiArg
      >({
        query: () => ({ url: `/categories/`, method: "PATCH" }),
        invalidatesTags: ["category"],
      }),
      getUserProfile: build.query<
        GetUserProfileApiResponse,
        GetUserProfileApiArg
      >({
        query: (queryArg) => ({ url: `/user/${queryArg.username}` }),
        providesTags: ["user"],
      }),
      getCurrentUser: build.query<
        GetCurrentUserApiResponse,
        GetCurrentUserApiArg
      >({
        query: () => ({ url: `/user/me` }),
        providesTags: ["user"],
      }),
      checkUsernameAvailability: build.query<
        CheckUsernameAvailabilityApiResponse,
        CheckUsernameAvailabilityApiArg
      >({
        query: (queryArg) => ({
          url: `/user/checkUsernameAvailability`,
          params: { username: queryArg.username },
        }),
        providesTags: ["user"],
      }),
      checkEmailAvailability: build.query<
        CheckEmailAvailabilityApiResponse,
        CheckEmailAvailabilityApiArg
      >({
        query: (queryArg) => ({
          url: `/user/checkEmailAvailability`,
          params: { email: queryArg.email },
        }),
        providesTags: ["user"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as moneyManagementApi };
export type GetAccountPOesApiResponse =
  /** status 200 OK */ PagedModelEntityModelAccountPo;
export type GetAccountPOesApiArg = {
  /** Zero-based page index (0..N) */
  page?: number;
  /** The size of the page to be returned */
  size?: number;
  /** Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
  sort?: string[];
};
export type PostAccountPOesApiResponse =
  /** status 201 Created */ EntityModelAccountPo;
export type PostAccountPOesApiArg = {
  accountPoRequestBody: AccountPoRequestBody;
};
export type GetAccountPOesSearchDeleteByUserAndIdApiResponse = unknown;
export type GetAccountPOesSearchDeleteByUserAndIdApiArg = {
  user?: User;
  id?: number;
};
export type GetAccountPOesSearchExistsByUserAndIdApiResponse =
  /** status 200 OK */ boolean;
export type GetAccountPOesSearchExistsByUserAndIdApiArg = {
  user?: User;
  id?: number;
};
export type GetAccountPOesSearchFindByUserApiResponse =
  /** status 200 OK */ CollectionModelEntityModelAccountPo;
export type GetAccountPOesSearchFindByUserApiArg = {
  user?: User;
};
export type GetAccountPOesSearchFindByUserOrderByIdApiResponse =
  /** status 200 OK */ PagedModelEntityModelAccountPo;
export type GetAccountPOesSearchFindByUserOrderByIdApiArg = {
  user?: User;
  /** Zero-based page index (0..N) */
  page?: number;
  /** The size of the page to be returned */
  size?: number;
  /** Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
  sort?: string[];
};
export type GetAccountPOesSearchFindFirstByUserAndIdApiResponse =
  /** status 200 OK */ EntityModelAccountPo;
export type GetAccountPOesSearchFindFirstByUserAndIdApiArg = {
  user?: User;
  id?: number;
};
export type GetAccountPOesByIdApiResponse =
  /** status 200 OK */ EntityModelAccountPo;
export type GetAccountPOesByIdApiArg = {
  id: string;
};
export type PutAccountPOesByIdApiResponse = /** status 200 OK */
  | EntityModelAccountPo
  | /** status 201 Created */ EntityModelAccountPo
  | /** status 204 No Content */ undefined;
export type PutAccountPOesByIdApiArg = {
  id: string;
  accountPoRequestBody: AccountPoRequestBody;
};
export type DeleteAccountPOesByIdApiResponse = unknown;
export type DeleteAccountPOesByIdApiArg = {
  id: string;
};
export type PatchAccountPOesByIdApiResponse = /** status 200 OK */
  | EntityModelAccountPo
  | /** status 204 No Content */ undefined;
export type PatchAccountPOesByIdApiArg = {
  id: string;
  accountPoRequestBody: AccountPoRequestBody;
};
export type GetCategoryPOesApiResponse =
  /** status 200 OK */ PagedModelEntityModelCategoryPo;
export type GetCategoryPOesApiArg = {
  /** Zero-based page index (0..N) */
  page?: number;
  /** The size of the page to be returned */
  size?: number;
  /** Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
  sort?: string[];
};
export type PostCategoryPOesApiResponse =
  /** status 201 Created */ EntityModelCategoryPo;
export type PostCategoryPOesApiArg = {
  categoryPoRequestBody: CategoryPoRequestBody;
};
export type GetCategoryPOesSearchDeleteByUserAndIdApiResponse = unknown;
export type GetCategoryPOesSearchDeleteByUserAndIdApiArg = {
  user?: User;
  id?: number;
};
export type GetCategoryPOesSearchExistsByUserAndIdApiResponse =
  /** status 200 OK */ boolean;
export type GetCategoryPOesSearchExistsByUserAndIdApiArg = {
  user?: User;
  id?: number;
};
export type GetCategoryPOesSearchFindByUserApiResponse =
  /** status 200 OK */ CollectionModelEntityModelCategoryPo;
export type GetCategoryPOesSearchFindByUserApiArg = {
  used?: User;
};
export type GetCategoryPOesSearchFindByUserAndIdApiResponse =
  /** status 200 OK */ EntityModelCategoryPo;
export type GetCategoryPOesSearchFindByUserAndIdApiArg = {
  used?: User;
  id?: number;
};
export type GetCategoryPOesByIdApiResponse =
  /** status 200 OK */ EntityModelCategoryPo;
export type GetCategoryPOesByIdApiArg = {
  id: string;
};
export type PutCategoryPOesByIdApiResponse = /** status 200 OK */
  | EntityModelCategoryPo
  | /** status 201 Created */ EntityModelCategoryPo
  | /** status 204 No Content */ undefined;
export type PutCategoryPOesByIdApiArg = {
  id: string;
  categoryPoRequestBody: CategoryPoRequestBody;
};
export type DeleteCategoryPOesByIdApiResponse = unknown;
export type DeleteCategoryPOesByIdApiArg = {
  id: string;
};
export type PatchCategoryPOesByIdApiResponse = /** status 200 OK */
  | EntityModelCategoryPo
  | /** status 204 No Content */ undefined;
export type PatchCategoryPOesByIdApiArg = {
  id: string;
  categoryPoRequestBody: CategoryPoRequestBody;
};
export type ListAllFormsOfMetadata1ApiResponse =
  /** status 200 OK */ RepresentationModelObject;
export type ListAllFormsOfMetadata1ApiArg = void;
export type Descriptor111ApiResponse = /** status 200 OK */ string;
export type Descriptor111ApiArg = void;
export type Descriptor112ApiResponse = /** status 200 OK */ string;
export type Descriptor112ApiArg = void;
export type Descriptor113ApiResponse = /** status 200 OK */ string;
export type Descriptor113ApiArg = void;
export type Descriptor114ApiResponse = /** status 200 OK */ string;
export type Descriptor114ApiArg = void;
export type GetRolesApiResponse =
  /** status 200 OK */ PagedModelEntityModelRole;
export type GetRolesApiArg = {
  /** Zero-based page index (0..N) */
  page?: number;
  /** The size of the page to be returned */
  size?: number;
  /** Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
  sort?: string[];
};
export type PostRolesApiResponse = /** status 201 Created */ EntityModelRole;
export type PostRolesApiArg = {
  roleRequestBody: RoleRequestBody;
};
export type GetRolesSearchFindByNameApiResponse =
  /** status 200 OK */ EntityModelRole;
export type GetRolesSearchFindByNameApiArg = {
  roleName?: "ROLE_USER" | "ROLE_ADMIN" | "ROLE_DEV";
};
export type GetRolesByIdApiResponse = /** status 200 OK */ EntityModelRole;
export type GetRolesByIdApiArg = {
  id: string;
};
export type PutRolesByIdApiResponse = /** status 200 OK */
  | EntityModelRole
  | /** status 201 Created */ EntityModelRole
  | /** status 204 No Content */ undefined;
export type PutRolesByIdApiArg = {
  id: string;
  roleRequestBody: RoleRequestBody;
};
export type DeleteRolesByIdApiResponse = unknown;
export type DeleteRolesByIdApiArg = {
  id: string;
};
export type PatchRolesByIdApiResponse = /** status 200 OK */
  | EntityModelRole
  | /** status 204 No Content */ undefined;
export type PatchRolesByIdApiArg = {
  id: string;
  roleRequestBody: RoleRequestBody;
};
export type GetUsersApiResponse =
  /** status 200 OK */ PagedModelEntityModelUser;
export type GetUsersApiArg = {
  /** Zero-based page index (0..N) */
  page?: number;
  /** The size of the page to be returned */
  size?: number;
  /** Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
  sort?: string[];
};
export type PostUsersApiResponse = /** status 201 Created */ EntityModelUser;
export type PostUsersApiArg = {
  userRequestBody: UserRequestBody;
};
export type GetUsersSearchExistsByEmailApiResponse =
  /** status 200 OK */ boolean;
export type GetUsersSearchExistsByEmailApiArg = {
  email?: string;
};
export type GetUsersSearchExistsByUsernameApiResponse =
  /** status 200 OK */ boolean;
export type GetUsersSearchExistsByUsernameApiArg = {
  username?: string;
};
export type GetUsersSearchFindByEmailApiResponse =
  /** status 200 OK */ EntityModelUser;
export type GetUsersSearchFindByEmailApiArg = {
  email?: string;
};
export type GetUsersSearchFindByUsernameApiResponse =
  /** status 200 OK */ EntityModelUser;
export type GetUsersSearchFindByUsernameApiArg = {
  username?: string;
};
export type GetUsersSearchFindByUsernameOrEmailApiResponse =
  /** status 200 OK */ EntityModelUser;
export type GetUsersSearchFindByUsernameOrEmailApiArg = {
  username?: string;
  email?: string;
};
export type GetUsersByIdApiResponse = /** status 200 OK */ EntityModelUser;
export type GetUsersByIdApiArg = {
  id: string;
};
export type PutUsersByIdApiResponse = /** status 200 OK */
  | EntityModelUser
  | /** status 201 Created */ EntityModelUser
  | /** status 204 No Content */ undefined;
export type PutUsersByIdApiArg = {
  id: string;
  userRequestBody: UserRequestBody;
};
export type DeleteUsersByIdApiResponse = unknown;
export type DeleteUsersByIdApiArg = {
  id: string;
};
export type PatchUsersByIdApiResponse = /** status 200 OK */
  | EntityModelUser
  | /** status 204 No Content */ undefined;
export type PatchUsersByIdApiArg = {
  id: string;
  userRequestBody: UserRequestBody;
};
export type GetUsersByIdRolesApiResponse =
  /** status 200 OK */ CollectionModelRole;
export type GetUsersByIdRolesApiArg = {
  id: string;
};
export type PutUsersByIdRolesApiResponse = /** status 200 OK */
  | CollectionModelRole
  | /** status 201 Created */ CollectionModelRole
  | /** status 204 No Content */ undefined;
export type PutUsersByIdRolesApiArg = {
  id: string;
  collectionModelObject: CollectionModelObject;
};
export type DeleteUsersByIdRolesApiResponse = unknown;
export type DeleteUsersByIdRolesApiArg = {
  id: string;
};
export type PatchUsersByIdRolesApiResponse = /** status 200 OK */
  | CollectionModelRole
  | /** status 204 No Content */ undefined;
export type PatchUsersByIdRolesApiArg = {
  id: string;
  collectionModelObject: CollectionModelObject;
};
export type GetUsersByIdRolesAndPropertyIdApiResponse =
  /** status 200 OK */ CollectionModelRole;
export type GetUsersByIdRolesAndPropertyIdApiArg = {
  id: string;
  propertyId: string;
};
export type DeleteUsersByIdRolesAndPropertyIdApiResponse = unknown;
export type DeleteUsersByIdRolesAndPropertyIdApiArg = {
  id: string;
  propertyId: string;
};
export type GetTransactionApiResponse =
  /** status 200 OK */ EntityModelTransaction;
export type GetTransactionApiArg = {
  id: number;
};
export type UpdateTransactionApiResponse =
  /** status 200 OK */ EntityModelTransaction;
export type UpdateTransactionApiArg = {
  id: number;
  transaction: Transaction;
};
export type DeleteTransactionApiResponse = /** status 200 OK */ object;
export type DeleteTransactionApiArg = {
  id: number;
};
export type PatchTransactionApiResponse =
  /** status 200 OK */ EntityModelTransaction;
export type PatchTransactionApiArg = {
  id: number;
  jsonPatch: JsonPatch;
};
export type GetCategoryApiResponse = /** status 200 OK */ EntityModelCategory;
export type GetCategoryApiArg = {
  id: number;
};
export type UpdateCategoryApiResponse =
  /** status 200 OK */ EntityModelCategory;
export type UpdateCategoryApiArg = {
  id: number;
  category: Category;
};
export type DeleteCategoryApiResponse = /** status 200 OK */ object;
export type DeleteCategoryApiArg = {
  id: number;
};
export type GetAccountApiResponse = /** status 200 OK */ EntityModelAccount;
export type GetAccountApiArg = {
  id: number;
};
export type UpdateAccountApiResponse = /** status 200 OK */ EntityModelAccount;
export type UpdateAccountApiArg = {
  id: number;
  account: Account;
};
export type DeleteAccountApiResponse = /** status 200 OK */ object;
export type DeleteAccountApiArg = {
  id: number;
};
export type PatchAccountApiResponse = /** status 200 OK */ EntityModelAccount;
export type PatchAccountApiArg = {
  id: number;
  jsonPatch: JsonPatch;
};
export type GetTransactionPageApiResponse =
  /** status 200 OK */ PagedModelEntityModelTransaction;
export type GetTransactionPageApiArg = {
  page?: number;
  size?: number;
};
export type CreateTransactionApiResponse =
  /** status 200 OK */ EntityModelTransaction;
export type CreateTransactionApiArg = {
  transaction: Transaction;
};
export type GetAllCategoriesApiResponse =
  /** status 200 OK */ CollectionModelEntityModelCategory;
export type GetAllCategoriesApiArg = void;
export type CreateCategoryApiResponse =
  /** status 200 OK */ EntityModelCategory;
export type CreateCategoryApiArg = {
  category: Category;
};
export type RegisterUserApiResponse = /** status 200 OK */ object;
export type RegisterUserApiArg = {
  signUpRequest: SignUpRequest;
};
export type AuthenticateUserApiResponse = /** status 200 OK */ object;
export type AuthenticateUserApiArg = {
  loginRequest: LoginRequest;
};
export type GetAllAccounts1ApiResponse =
  /** status 200 OK */ CollectionModelEntityModelAccount;
export type GetAllAccounts1ApiArg = {
  pageable: Pageable;
};
export type CreateAccountApiResponse = /** status 200 OK */ EntityModelAccount;
export type CreateAccountApiArg = {
  account: Account;
};
export type PatchApiResponse = unknown;
export type PatchApiArg = void;
export type PatchCategoryApiResponse = unknown;
export type PatchCategoryApiArg = void;
export type GetUserProfileApiResponse = /** status 200 OK */ User;
export type GetUserProfileApiArg = {
  username: string;
};
export type GetCurrentUserApiResponse = /** status 200 OK */ UserSummary;
export type GetCurrentUserApiArg = void;
export type CheckUsernameAvailabilityApiResponse =
  /** status 200 OK */ UserIdentityAvailability;
export type CheckUsernameAvailabilityApiArg = {
  username: string;
};
export type CheckEmailAvailabilityApiResponse =
  /** status 200 OK */ UserIdentityAvailability;
export type CheckEmailAvailabilityApiArg = {
  email: string;
};
export type Link = {
  href?: string;
  hreflang?: string;
  title?: string;
  type?: string;
  deprecation?: string;
  profile?: string;
  name?: string;
  templated?: boolean;
};
export type Links = {
  [key: string]: Link;
};
export type EntityModelAccountPo = {
  id?: number;
  name?: string;
  description?: string;
  currency: string;
  initialCredit?: number;
  credit?: boolean;
  _links?: Links;
};
export type PageMetadata = {
  size?: number;
  totalElements?: number;
  totalPages?: number;
  number?: number;
};
export type PagedModelEntityModelAccountPo = {
  _embedded?: {
    accountPOes?: EntityModelAccountPo[];
  };
  _links?: Links;
  page?: PageMetadata;
};
export type AccountPoRequestBody = {
  id?: number;
  name?: string;
  description?: string;
  currency: string;
  initialCredit?: number;
  credit?: boolean;
};
export type Role = {
  id?: number;
  name?: "ROLE_USER" | "ROLE_ADMIN" | "ROLE_DEV";
};
export type GrantedAuthority = {
  authority?: string;
};
export type User = {
  id?: number;
  name: string;
  username: string;
  roles?: Role[];
  authorities?: GrantedAuthority[];
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  credentialsNonExpired?: boolean;
  enabled?: boolean;
};
export type CollectionModelEntityModelAccountPo = {
  _embedded?: {
    accountPOes?: EntityModelAccountPo[];
  };
  _links?: Links;
};
export type EntityModelCategoryPo = {
  id?: number;
  name?: string;
  parentId?: number;
  color?: string;
  mainCategory?: boolean;
  _links?: Links;
};
export type PagedModelEntityModelCategoryPo = {
  _embedded?: {
    categoryPOes?: EntityModelCategoryPo[];
  };
  _links?: Links;
  page?: PageMetadata;
};
export type CategoryPoRequestBody = {
  id?: number;
  name?: string;
  parentId?: number;
  color?: string;
  mainCategory?: boolean;
};
export type CollectionModelEntityModelCategoryPo = {
  _embedded?: {
    categoryPOes?: EntityModelCategoryPo[];
  };
  _links?: Links;
};
export type RepresentationModelObject = {
  _links?: Links;
};
export type EntityModelRole = {
  name?: "ROLE_USER" | "ROLE_ADMIN" | "ROLE_DEV";
  _links?: Links;
};
export type PagedModelEntityModelRole = {
  _embedded?: {
    roles?: EntityModelRole[];
  };
  _links?: Links;
  page?: PageMetadata;
};
export type RoleRequestBody = {
  id?: number;
  name?: "ROLE_USER" | "ROLE_ADMIN" | "ROLE_DEV";
};
export type EntityModelUser = {
  name: string;
  username: string;
  authorities?: GrantedAuthority[];
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  credentialsNonExpired?: boolean;
  enabled?: boolean;
  _links?: Links;
};
export type PagedModelEntityModelUser = {
  _embedded?: {
    users?: EntityModelUser[];
  };
  _links?: Links;
  page?: PageMetadata;
};
export type UserRequestBody = {
  id?: number;
  name: string;
  username: string;
  roles?: string[];
  authorities?: GrantedAuthority[];
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  credentialsNonExpired?: boolean;
  enabled?: boolean;
};
export type RoleResponse = {
  name?: "ROLE_USER" | "ROLE_ADMIN" | "ROLE_DEV";
};
export type CollectionModelRole = {
  _embedded?: {
    roles?: RoleResponse[];
  };
  _links?: Links;
};
export type CollectionModelObject = {
  _embedded?: {
    objects?: object[];
  };
  _links?: Links;
};
export type EntityModelTransaction = {
  id?: number;
  amount: number;
  dateTime: string;
  description?: string;
  sourceAccount: number;
  destinationAccount?: number;
  mainCategory: number;
  subCategory?: number;
  _links?: Links;
};
export type Transaction = {
  id?: number;
  amount: number;
  dateTime: string;
  description?: string;
  sourceAccount: number;
  destinationAccount?: number;
  mainCategory: number;
  subCategory?: number;
};
export type JsonPatch = object;
export type EntityModelCategory = {
  id?: number;
  name: string;
  parentId?: number;
  color?: string;
  mainCategory?: boolean;
  _links?: Links;
};
export type Category = {
  id?: number;
  name: string;
  parentId?: number;
  color?: string;
  mainCategory?: boolean;
};
export type EntityModelAccount = {
  id?: number;
  name: string;
  description?: string;
  currency: string;
  initialCredit?: number;
  balance?: number;
  credit?: boolean;
  _links?: Links;
};
export type Account = {
  id?: number;
  name: string;
  description?: string;
  currency: string;
  initialCredit?: number;
  balance?: number;
  credit?: boolean;
};
export type PagedModelEntityModelTransaction = {
  _embedded?: {
    transactions?: EntityModelTransaction[];
  };
  _links?: Links;
  page?: PageMetadata;
};
export type CollectionModelEntityModelCategory = {
  _embedded?: {
    categories?: EntityModelCategory[];
  };
  _links?: Links;
};
export type SignUpRequest = {
  name: string;
  username: string;
  email: string;
  password: string;
};
export type LoginRequest = {
  usernameOrEmail: string;
  password: string;
};
export type CollectionModelEntityModelAccount = {
  _embedded?: {
    accounts?: EntityModelAccount[];
  };
  _links?: Links;
};
export type Pageable = {
  page?: number;
  size?: number;
  sort?: string[];
};
export type UserSummary = {
  id?: number;
  username?: string;
  name?: string;
};
export type UserIdentityAvailability = {
  available?: boolean;
};
export const {
  useGetAccountPOesQuery,
  usePostAccountPOesMutation,
  useGetAccountPOesSearchDeleteByUserAndIdQuery,
  useGetAccountPOesSearchExistsByUserAndIdQuery,
  useGetAccountPOesSearchFindByUserQuery,
  useGetAccountPOesSearchFindByUserOrderByIdQuery,
  useGetAccountPOesSearchFindFirstByUserAndIdQuery,
  useGetAccountPOesByIdQuery,
  usePutAccountPOesByIdMutation,
  useDeleteAccountPOesByIdMutation,
  usePatchAccountPOesByIdMutation,
  useGetCategoryPOesQuery,
  usePostCategoryPOesMutation,
  useGetCategoryPOesSearchDeleteByUserAndIdQuery,
  useGetCategoryPOesSearchExistsByUserAndIdQuery,
  useGetCategoryPOesSearchFindByUserQuery,
  useGetCategoryPOesSearchFindByUserAndIdQuery,
  useGetCategoryPOesByIdQuery,
  usePutCategoryPOesByIdMutation,
  useDeleteCategoryPOesByIdMutation,
  usePatchCategoryPOesByIdMutation,
  useListAllFormsOfMetadata1Query,
  useDescriptor111Query,
  useDescriptor112Query,
  useDescriptor113Query,
  useDescriptor114Query,
  useGetRolesQuery,
  usePostRolesMutation,
  useGetRolesSearchFindByNameQuery,
  useGetRolesByIdQuery,
  usePutRolesByIdMutation,
  useDeleteRolesByIdMutation,
  usePatchRolesByIdMutation,
  useGetUsersQuery,
  usePostUsersMutation,
  useGetUsersSearchExistsByEmailQuery,
  useGetUsersSearchExistsByUsernameQuery,
  useGetUsersSearchFindByEmailQuery,
  useGetUsersSearchFindByUsernameQuery,
  useGetUsersSearchFindByUsernameOrEmailQuery,
  useGetUsersByIdQuery,
  usePutUsersByIdMutation,
  useDeleteUsersByIdMutation,
  usePatchUsersByIdMutation,
  useGetUsersByIdRolesQuery,
  usePutUsersByIdRolesMutation,
  useDeleteUsersByIdRolesMutation,
  usePatchUsersByIdRolesMutation,
  useGetUsersByIdRolesAndPropertyIdQuery,
  useDeleteUsersByIdRolesAndPropertyIdMutation,
  useGetTransactionQuery,
  useUpdateTransactionMutation,
  useDeleteTransactionMutation,
  usePatchTransactionMutation,
  useGetCategoryQuery,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useGetAccountQuery,
  useUpdateAccountMutation,
  useDeleteAccountMutation,
  usePatchAccountMutation,
  useGetTransactionPageQuery,
  useCreateTransactionMutation,
  useGetAllCategoriesQuery,
  useCreateCategoryMutation,
  useRegisterUserMutation,
  useAuthenticateUserMutation,
  useGetAllAccounts1Query,
  useCreateAccountMutation,
  usePatchMutation,
  usePatchCategoryMutation,
  useGetUserProfileQuery,
  useGetCurrentUserQuery,
  useCheckUsernameAvailabilityQuery,
  useCheckEmailAvailabilityQuery,
} = injectedRtkApi;
