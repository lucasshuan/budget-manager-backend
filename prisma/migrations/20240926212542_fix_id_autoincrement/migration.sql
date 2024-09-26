-- AlterTable
CREATE SEQUENCE budgets_id_seq;
ALTER TABLE "budgets" ALTER COLUMN "id" SET DEFAULT nextval('budgets_id_seq');
ALTER SEQUENCE budgets_id_seq OWNED BY "budgets"."id";

-- AlterTable
CREATE SEQUENCE components_id_seq;
ALTER TABLE "components" ALTER COLUMN "id" SET DEFAULT nextval('components_id_seq');
ALTER SEQUENCE components_id_seq OWNED BY "components"."id";

-- AlterTable
CREATE SEQUENCE customers_id_seq;
ALTER TABLE "customers" ALTER COLUMN "id" SET DEFAULT nextval('customers_id_seq');
ALTER SEQUENCE customers_id_seq OWNED BY "customers"."id";

-- AlterTable
CREATE SEQUENCE jobs_id_seq;
ALTER TABLE "jobs" ALTER COLUMN "id" SET DEFAULT nextval('jobs_id_seq');
ALTER SEQUENCE jobs_id_seq OWNED BY "jobs"."id";

-- AlterTable
CREATE SEQUENCE users_id_seq;
ALTER TABLE "users" ALTER COLUMN "id" SET DEFAULT nextval('users_id_seq');
ALTER SEQUENCE users_id_seq OWNED BY "users"."id";
