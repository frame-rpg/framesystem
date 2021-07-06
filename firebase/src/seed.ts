import * as admin from "firebase-admin";

const app = admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://framesystem-v2-default-rtdb.firebaseio.com",
  projectId: "framesystem-v2",
});

const users: { claims: any; user: admin.auth.CreateRequest }[] = [
  {
    user: {
      displayName: "Test GM",
      email: "testgm@framesystem.org",
      emailVerified: true,
      password: "password",
    },
    claims: {
      premium: true,
    },
  },
  {
    user: {
      displayName: "Test Player",
      email: "testplayer@framesystem.org",
      emailVerified: true,
      password: "password",
    },
    claims: {
      premium: false,
    },
  },
];

const campaign = {
  id: "seed",
  name: "Seed Campaign",
  description: "some text here",
};

app
  .firestore()
  .doc("/campaigns/seed")
  .set(campaign)
  .then(() =>
    Promise.all(
      users.map(({ user, claims }) =>
        app
          .auth()
          .createUser(user)
          .then((record) =>
            app
              .auth()
              .setCustomUserClaims(record.uid, claims)
              .then(() => {
                const access = {
                  read: true,
                  write: false,
                };
                if (user.displayName === "Test GM") {
                  access.write = true;
                }
                return app
                  .firestore()
                  .doc(`/campaigns/seed/acl/${record.uid}`)
                  .set(access);
              })
          )
      )
    )
  )
  .then(() => {
    return app
      .firestore()
      .doc("/campaigns/seed/acl/public")
      .set({ read: true, write: false });
  });
