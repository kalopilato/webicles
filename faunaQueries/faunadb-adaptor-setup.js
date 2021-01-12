/**
 * Following are the commands to run on your Fauna DB to set up the required collections/indexes for the faunadb-adaptor fore next-auth
 */

CreateCollection({ name: "account" });
CreateCollection({ name: "session" });
CreateCollection({ name: "user" });
CreateCollection({ name: "verification_request" });

CreateIndex({
  name: "user_by_email",
  source: Collection("user"),
  unique: true,
  terms: [{ field: ["data", "email"] }],
});
CreateIndex({
  name: "account_by_provider_account_id",
  source: Collection("account"),
  unique: true,
  terms: [
    { field: ["data", "providerId"] },
    { field: ["data", "providerAccountId"] },
  ],
});
CreateIndex({
  name: "verification_request_by_token",
  source: Collection("verification_request"),
  unique: true,
  terms: [{ field: ["data", "token"] }],
});
CreateIndex({
  name: "session_by_token",
  source: Collection("session"),
  unique: true,
  terms: [{ field: ["data", "sessionToken"] }],
});
