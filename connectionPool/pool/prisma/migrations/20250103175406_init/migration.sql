-- CreateTable
CREATE TABLE "log" (
    "id" SERIAL NOT NULL,
    "level" TEXT NOT NULL,
    "messages" TEXT NOT NULL,
    "meta" JSONB NOT NULL,

    CONSTRAINT "log_pkey" PRIMARY KEY ("id")
);
