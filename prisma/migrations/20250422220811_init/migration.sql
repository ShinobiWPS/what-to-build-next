-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userKnownStacks" JSONB NOT NULL DEFAULT [],
    "followJobMarketSkillsDemand" BOOLEAN NOT NULL DEFAULT false,
    "learnNewTech" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "priority" TEXT,
    CONSTRAINT "Project_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TechnologiesPreferences" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "FeaturePreferences" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ProjectListOrderQuery" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "priority" TEXT NOT NULL,
    "featureWannaBuild" TEXT NOT NULL,
    "followJobMarketSkillsDemand" BOOLEAN NOT NULL,
    "learnNewTech" BOOLEAN NOT NULL,
    "userKnownStacks" JSONB NOT NULL DEFAULT [],
    "techPreferences" JSONB NOT NULL DEFAULT [],
    "userId" TEXT NOT NULL,
    CONSTRAINT "ProjectListOrderQuery_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserSharing" (
    "userId" TEXT NOT NULL,
    "gaveAccessTo" TEXT NOT NULL,
    "gotAccessTo" TEXT NOT NULL,

    PRIMARY KEY ("userId", "gaveAccessTo", "gotAccessTo"),
    CONSTRAINT "UserSharing_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserSharing_gaveAccessTo_fkey" FOREIGN KEY ("gaveAccessTo") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserSharing_gotAccessTo_fkey" FOREIGN KEY ("gotAccessTo") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
