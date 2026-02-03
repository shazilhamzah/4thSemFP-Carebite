
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  username: 'username',
  password: 'password',
  dob: 'dob',
  account_created: 'account_created',
  user_type: 'user_type',
  salary: 'salary',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AdmScalarFieldEnum = {
  adm_id: 'adm_id',
  hospital_id: 'hospital_id'
};

exports.Prisma.AttendanceScalarFieldEnum = {
  attendance_id: 'attendance_id',
  hospital_id: 'hospital_id',
  curr_date: 'curr_date',
  status: 'status'
};

exports.Prisma.DonationsScalarFieldEnum = {
  donation_id: 'donation_id',
  donor_id: 'donor_id'
};

exports.Prisma.DonorsScalarFieldEnum = {
  id: 'id',
  entries1: 'entries1',
  entries2: 'entries2',
  donation_id: 'donation_id'
};

exports.Prisma.Gm_coordScalarFieldEnum = {
  gm_coord_id: 'gm_coord_id',
  entries1: 'entries1',
  entries2: 'entries2',
  utensil_requests_id: 'utensil_requests_id',
  grocery_requests_id: 'grocery_requests_id'
};

exports.Prisma.Gm_hospitalScalarFieldEnum = {
  gm_hospital_id: 'gm_hospital_id',
  hospital_id: 'hospital_id',
  work_id: 'work_id'
};

exports.Prisma.Grocery_itemsScalarFieldEnum = {
  grocery_id: 'grocery_id',
  name: 'name'
};

exports.Prisma.Grocery_requestScalarFieldEnum = {
  grocery_request_id: 'grocery_request_id',
  hospital_id: 'hospital_id',
  quantity_requested: 'quantity_requested',
  status_sent: 'status_sent',
  status_recieved: 'status_recieved'
};

exports.Prisma.GsScalarFieldEnum = {
  gs_id: 'gs_id',
  entries1: 'entries1',
  entries2: 'entries2',
  donation_id: 'donation_id'
};

exports.Prisma.Hospital_attendanceScalarFieldEnum = {
  hospital_attendance_id: 'hospital_attendance_id',
  id: 'id',
  hospital_id: 'hospital_id'
};

exports.Prisma.Hospital_food_statusScalarFieldEnum = {
  entries: 'entries',
  menu_id: 'menu_id',
  day: 'day',
  work_id: 'work_id'
};

exports.Prisma.MenuScalarFieldEnum = {
  menu_id: 'menu_id',
  day: 'day',
  breakfast: 'breakfast',
  dinner: 'dinner'
};

exports.Prisma.PaycheckScalarFieldEnum = {
  pay_id: 'pay_id',
  hospital_id: 'hospital_id',
  receive_status: 'receive_status',
  sent_status: 'sent_status'
};

exports.Prisma.StatusScalarFieldEnum = {
  status_id: 'status_id',
  sent_status: 'sent_status',
  recieve_status: 'recieve_status',
  remarks: 'remarks',
  date: 'date'
};

exports.Prisma.SupervisorScalarFieldEnum = {
  supervisor_id: 'supervisor_id',
  hospital_id: 'hospital_id'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  hospital_id: 'hospital_id',
  name: 'name',
  role: 'role',
  password: 'password',
  username: 'username',
  cnic: 'cnic',
  nationality: 'nationality',
  bloodgroup: 'bloodgroup',
  joining_date: 'joining_date',
  address: 'address',
  contact_no: 'contact_no'
};

exports.Prisma.Utensil_requestScalarFieldEnum = {
  utensil_request_id: 'utensil_request_id',
  hospital_id: 'hospital_id',
  quantity_requested: 'quantity_requested',
  status_sent: 'status_sent',
  status_recieved: 'status_recieved'
};

exports.Prisma.UtensilsScalarFieldEnum = {
  utensils_id: 'utensils_id',
  name: 'name'
};

exports.Prisma.Work_statusScalarFieldEnum = {
  work_id: 'work_id',
  hospital_id: 'hospital_id',
  breakfast_status: 'breakfast_status',
  dinner_status: 'dinner_status'
};

exports.Prisma.WorkersScalarFieldEnum = {
  worker_id: 'worker_id',
  hospital_id: 'hospital_id',
  role: 'role'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  adm: 'adm',
  attendance: 'attendance',
  donations: 'donations',
  donors: 'donors',
  gm_coord: 'gm_coord',
  gm_hospital: 'gm_hospital',
  grocery_items: 'grocery_items',
  grocery_request: 'grocery_request',
  gs: 'gs',
  hospital_attendance: 'hospital_attendance',
  hospital_food_status: 'hospital_food_status',
  menu: 'menu',
  paycheck: 'paycheck',
  status: 'status',
  supervisor: 'supervisor',
  users: 'users',
  utensil_request: 'utensil_request',
  utensils: 'utensils',
  work_status: 'work_status',
  workers: 'workers'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Afzaal Hamzah\\OneDrive\\Documents\\Carebite\\backend\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\Afzaal Hamzah\\OneDrive\\Documents\\Carebite\\backend\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel User {\n  id              String   @id @db.Uuid\n  name            String   @db.VarChar(255)\n  username        String   @unique @db.VarChar(255)\n  password        String   @db.VarChar(255)\n  dob             DateTime @default(dbgenerated(\"'1999-12-31 19:00:00+00'::timestamp with time zone\")) @db.Timestamptz(6)\n  account_created DateTime @default(dbgenerated(\"'2025-04-17 10:38:03.159+00'::timestamp with time zone\")) @db.Timestamptz(6)\n  user_type       String   @db.VarChar(255)\n  salary          Int      @default(30000)\n  createdAt       DateTime @db.Timestamptz(6)\n  updatedAt       DateTime @db.Timestamptz(6)\n}\n\nmodel adm {\n  adm_id      Int\n  hospital_id Int\n  users       users @relation(fields: [adm_id, hospital_id], references: [id, hospital_id], onDelete: Cascade, onUpdate: NoAction)\n\n  @@id([adm_id, hospital_id])\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel announcements {\n  id          Int?\n  hospital_id Int?\n  date_added  DateTime? @default(dbgenerated(\"CURRENT_DATE\")) @db.Date\n  title       String    @db.VarChar(50)\n  details     String    @db.VarChar(1000)\n  users       users?    @relation(fields: [id, hospital_id], references: [id, hospital_id], onDelete: NoAction, onUpdate: NoAction)\n\n  @@ignore\n}\n\nmodel attendance {\n  attendance_id Int\n  hospital_id   Int?\n  curr_date     DateTime @default(dbgenerated(\"CURRENT_DATE\")) @db.Date\n  status        String?  @default(\"absent\") @db.VarChar(10)\n  users         users?   @relation(fields: [attendance_id, hospital_id], references: [id, hospital_id], onDelete: Cascade)\n\n  @@id([curr_date, attendance_id])\n}\n\nmodel donations {\n  donation_id Int      @id @default(autoincrement())\n  donor_id    Int?\n  donors      donors[]\n  gs          gs[]\n  status      status?\n}\n\nmodel donors {\n  id                   Int                   @id\n  entries1             Int?\n  entries2             Int?\n  donation_id          Int?\n  donations            donations?            @relation(fields: [donation_id], references: [donation_id], onDelete: Cascade)\n  hospital_attendance  hospital_attendance?  @relation(fields: [entries1], references: [hospital_attendance_id], onDelete: Cascade)\n  hospital_food_status hospital_food_status? @relation(fields: [entries2], references: [entries], onDelete: Cascade)\n}\n\nmodel gm_coord {\n  gm_coord_id          Int                   @id\n  entries1             Int?\n  entries2             Int?\n  utensil_requests_id  Int?\n  grocery_requests_id  Int?\n  hospital_attendance  hospital_attendance?  @relation(fields: [entries1], references: [hospital_attendance_id], onDelete: Cascade)\n  hospital_food_status hospital_food_status? @relation(fields: [entries2], references: [entries], onDelete: Cascade)\n  grocery_request      grocery_request?      @relation(fields: [grocery_requests_id], references: [grocery_request_id], onDelete: Cascade)\n  utensil_request      utensil_request?      @relation(fields: [utensil_requests_id], references: [utensil_request_id], onDelete: Cascade)\n}\n\nmodel gm_hospital {\n  gm_hospital_id Int\n  hospital_id    Int\n  work_id        Int?\n  users          users        @relation(fields: [gm_hospital_id, hospital_id], references: [id, hospital_id], onDelete: Cascade, onUpdate: NoAction)\n  work_status    work_status? @relation(fields: [work_id], references: [work_id], onDelete: Cascade)\n\n  @@id([gm_hospital_id, hospital_id])\n}\n\nmodel grocery_items {\n  grocery_id      Int              @id @default(autoincrement())\n  name            String?          @db.VarChar(30)\n  grocery_request grocery_request?\n}\n\nmodel grocery_request {\n  grocery_request_id Int           @id\n  hospital_id        Int?\n  quantity_requested Int?\n  status_sent        String?       @default(\"No\") @db.VarChar(3)\n  status_recieved    String?       @default(\"No\") @db.VarChar(3)\n  gm_coord           gm_coord[]\n  grocery_items      grocery_items @relation(fields: [grocery_request_id], references: [grocery_id], onDelete: NoAction, onUpdate: NoAction)\n}\n\nmodel gs {\n  gs_id                Int                   @id\n  entries1             Int?\n  entries2             Int?\n  donation_id          Int?\n  donations            donations?            @relation(fields: [donation_id], references: [donation_id], onDelete: Cascade)\n  hospital_attendance  hospital_attendance?  @relation(fields: [entries1], references: [hospital_attendance_id], onDelete: Cascade)\n  hospital_food_status hospital_food_status? @relation(fields: [entries2], references: [entries], onDelete: Cascade)\n}\n\nmodel hospital_attendance {\n  hospital_attendance_id Int        @id @default(autoincrement())\n  id                     Int?\n  hospital_id            Int?\n  donors                 donors[]\n  gm_coord               gm_coord[]\n  gs                     gs[]\n  users                  users?     @relation(fields: [id, hospital_id], references: [id, hospital_id], onDelete: Cascade)\n}\n\nmodel hospital_food_status {\n  entries     Int          @id @default(autoincrement())\n  menu_id     Int?\n  day         String?      @db.VarChar(30)\n  work_id     Int?\n  donors      donors[]\n  gm_coord    gm_coord[]\n  gs          gs[]\n  menu        menu?        @relation(fields: [day, menu_id], references: [day, menu_id], onDelete: Cascade)\n  work_status work_status? @relation(fields: [work_id], references: [work_id], onDelete: Cascade)\n}\n\nmodel menu {\n  menu_id              Int\n  day                  String                 @default(\"Monday\") @db.VarChar(30)\n  breakfast            String?                @db.VarChar(30)\n  dinner               String?                @db.VarChar(30)\n  hospital_food_status hospital_food_status[]\n\n  @@id([day, menu_id])\n}\n\nmodel paycheck {\n  pay_id         Int\n  hospital_id    Int\n  receive_status String? @default(\"No\") @db.VarChar(3)\n  sent_status    String? @default(\"No\") @db.VarChar(3)\n  users          users   @relation(fields: [pay_id, hospital_id], references: [id, hospital_id], onDelete: Cascade)\n\n  @@id([pay_id, hospital_id])\n}\n\nmodel status {\n  status_id      Int       @id\n  sent_status    String?   @default(\"No\") @db.VarChar(3)\n  recieve_status String?   @default(\"No\") @db.VarChar(3)\n  remarks        String?   @default(\"Thank you for your donations\") @db.VarChar(30)\n  date           DateTime? @default(dbgenerated(\"CURRENT_DATE\")) @db.Date\n  donations      donations @relation(fields: [status_id], references: [donation_id], onDelete: Cascade)\n}\n\nmodel supervisor {\n  supervisor_id Int\n  hospital_id   Int\n  users         users @relation(fields: [supervisor_id, hospital_id], references: [id, hospital_id], onDelete: Cascade, onUpdate: NoAction)\n\n  @@id([supervisor_id, hospital_id])\n}\n\nmodel users {\n  id                  Int\n  hospital_id         Int\n  name                String?               @db.VarChar(30)\n  role                String?               @db.VarChar(30)\n  password            String?               @db.VarChar(30)\n  username            String                @unique @db.VarChar(50)\n  cnic                String                @unique @db.VarChar(15)\n  nationality         String                @db.VarChar(15)\n  bloodgroup          String                @db.VarChar(3)\n  joining_date        DateTime?             @default(dbgenerated(\"CURRENT_DATE\")) @db.Date\n  address             String                @db.VarChar(255)\n  contact_no          String                @unique @db.VarChar(20)\n  adm                 adm?\n  announcements       announcements[]       @ignore\n  attendance          attendance[]\n  gm_hospital         gm_hospital?\n  hospital_attendance hospital_attendance[]\n  paycheck            paycheck?\n  supervisor          supervisor?\n  workers             workers?\n\n  @@id([id, hospital_id])\n}\n\nmodel utensil_request {\n  utensil_request_id Int        @id\n  hospital_id        Int?\n  quantity_requested Int?\n  status_sent        String?    @default(\"No\") @db.VarChar(3)\n  status_recieved    String?    @default(\"No\") @db.VarChar(3)\n  gm_coord           gm_coord[]\n  utensils           utensils   @relation(fields: [utensil_request_id], references: [utensils_id], onDelete: NoAction, onUpdate: NoAction)\n}\n\nmodel utensils {\n  utensils_id     Int              @id @default(autoincrement())\n  name            String?          @db.VarChar(30)\n  utensil_request utensil_request?\n}\n\nmodel work_status {\n  work_id              Int                    @id\n  hospital_id          Int?\n  breakfast_status     String?                @default(\"Not delivered Yet\") @db.VarChar(30)\n  dinner_status        String?                @default(\"Not delivered Yet\") @db.VarChar(30)\n  gm_hospital          gm_hospital[]\n  hospital_food_status hospital_food_status[]\n}\n\nmodel workers {\n  worker_id   Int\n  hospital_id Int\n  role        String? @db.VarChar(50)\n  users       users   @relation(fields: [worker_id, hospital_id], references: [id, hospital_id], onDelete: Cascade, onUpdate: NoAction)\n\n  @@id([worker_id, hospital_id])\n}\n",
  "inlineSchemaHash": "54d4149bac28865b799854455e5a78932590d9e73643476ab65a75def575c54a",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dob\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"6\"]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"'1999-12-31 19:00:00+00'::timestamp with time zone\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account_created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"6\"]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"'2025-04-17 10:38:03.159+00'::timestamp with time zone\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"salary\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":30000,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"adm\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"adm_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hospital_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"nativeType\":null,\"relationName\":\"admTousers\",\"relationFromFields\":[\"adm_id\",\"hospital_id\"],\"relationToFields\":[\"id\",\"hospital_id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"adm_id\",\"hospital_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"attendance\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"attendance_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hospital_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"curr_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"CURRENT_DATE\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"default\":\"absent\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"nativeType\":null,\"relationName\":\"attendanceTousers\",\"relationFromFields\":[\"attendance_id\",\"hospital_id\"],\"relationToFields\":[\"id\",\"hospital_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"curr_date\",\"attendance_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"donations\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"donation_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"donor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"donors\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"donors\",\"nativeType\":null,\"relationName\":\"donationsTodonors\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"gs\",\"nativeType\":null,\"relationName\":\"donationsTogs\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"status\",\"nativeType\":null,\"relationName\":\"donationsTostatus\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"donors\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entries1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entries2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"donation_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"donations\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"donations\",\"nativeType\":null,\"relationName\":\"donationsTodonors\",\"relationFromFields\":[\"donation_id\"],\"relationToFields\":[\"donation_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hospital_attendance\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"hospital_attendance\",\"nativeType\":null,\"relationName\":\"donorsTohospital_attendance\",\"relationFromFields\":[\"entries1\"],\"relationToFields\":[\"hospital_attendance_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hospital_food_status\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"hospital_food_status\",\"nativeType\":null,\"relationName\":\"donorsTohospital_food_status\",\"relationFromFields\":[\"entries2\"],\"relationToFields\":[\"entries\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"gm_coord\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"gm_coord_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entries1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entries2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"utensil_requests_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"grocery_requests_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hospital_attendance\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"hospital_attendance\",\"nativeType\":null,\"relationName\":\"gm_coordTohospital_attendance\",\"relationFromFields\":[\"entries1\"],\"relationToFields\":[\"hospital_attendance_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hospital_food_status\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"hospital_food_status\",\"nativeType\":null,\"relationName\":\"gm_coordTohospital_food_status\",\"relationFromFields\":[\"entries2\"],\"relationToFields\":[\"entries\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"grocery_request\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"grocery_request\",\"nativeType\":null,\"relationName\":\"gm_coordTogrocery_request\",\"relationFromFields\":[\"grocery_requests_id\"],\"relationToFields\":[\"grocery_request_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"utensil_request\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"utensil_request\",\"nativeType\":null,\"relationName\":\"gm_coordToutensil_request\",\"relationFromFields\":[\"utensil_requests_id\"],\"relationToFields\":[\"utensil_request_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"gm_hospital\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"gm_hospital_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hospital_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"work_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"nativeType\":null,\"relationName\":\"gm_hospitalTousers\",\"relationFromFields\":[\"gm_hospital_id\",\"hospital_id\"],\"relationToFields\":[\"id\",\"hospital_id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"work_status\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"work_status\",\"nativeType\":null,\"relationName\":\"gm_hospitalTowork_status\",\"relationFromFields\":[\"work_id\"],\"relationToFields\":[\"work_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"gm_hospital_id\",\"hospital_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"grocery_items\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"grocery_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"grocery_request\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"grocery_request\",\"nativeType\":null,\"relationName\":\"grocery_itemsTogrocery_request\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"grocery_request\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"grocery_request_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hospital_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity_requested\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_sent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"3\"]],\"default\":\"No\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_recieved\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"3\"]],\"default\":\"No\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gm_coord\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"gm_coord\",\"nativeType\":null,\"relationName\":\"gm_coordTogrocery_request\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"grocery_items\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"grocery_items\",\"nativeType\":null,\"relationName\":\"grocery_itemsTogrocery_request\",\"relationFromFields\":[\"grocery_request_id\"],\"relationToFields\":[\"grocery_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"gs\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"gs_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entries1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entries2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"donation_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"donations\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"donations\",\"nativeType\":null,\"relationName\":\"donationsTogs\",\"relationFromFields\":[\"donation_id\"],\"relationToFields\":[\"donation_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hospital_attendance\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"hospital_attendance\",\"nativeType\":null,\"relationName\":\"gsTohospital_attendance\",\"relationFromFields\":[\"entries1\"],\"relationToFields\":[\"hospital_attendance_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hospital_food_status\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"hospital_food_status\",\"nativeType\":null,\"relationName\":\"gsTohospital_food_status\",\"relationFromFields\":[\"entries2\"],\"relationToFields\":[\"entries\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"hospital_attendance\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"hospital_attendance_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hospital_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"donors\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"donors\",\"nativeType\":null,\"relationName\":\"donorsTohospital_attendance\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gm_coord\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"gm_coord\",\"nativeType\":null,\"relationName\":\"gm_coordTohospital_attendance\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"gs\",\"nativeType\":null,\"relationName\":\"gsTohospital_attendance\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"nativeType\":null,\"relationName\":\"hospital_attendanceTousers\",\"relationFromFields\":[\"id\",\"hospital_id\"],\"relationToFields\":[\"id\",\"hospital_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"hospital_food_status\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"entries\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menu_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"day\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"work_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"donors\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"donors\",\"nativeType\":null,\"relationName\":\"donorsTohospital_food_status\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gm_coord\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"gm_coord\",\"nativeType\":null,\"relationName\":\"gm_coordTohospital_food_status\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"gs\",\"nativeType\":null,\"relationName\":\"gsTohospital_food_status\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menu\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"menu\",\"nativeType\":null,\"relationName\":\"hospital_food_statusTomenu\",\"relationFromFields\":[\"day\",\"menu_id\"],\"relationToFields\":[\"day\",\"menu_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"work_status\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"work_status\",\"nativeType\":null,\"relationName\":\"hospital_food_statusTowork_status\",\"relationFromFields\":[\"work_id\"],\"relationToFields\":[\"work_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"menu\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"menu_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"day\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"default\":\"Monday\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"breakfast\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dinner\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hospital_food_status\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"hospital_food_status\",\"nativeType\":null,\"relationName\":\"hospital_food_statusTomenu\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"day\",\"menu_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"paycheck\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"pay_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hospital_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"receive_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"3\"]],\"default\":\"No\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sent_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"3\"]],\"default\":\"No\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"nativeType\":null,\"relationName\":\"paycheckTousers\",\"relationFromFields\":[\"pay_id\",\"hospital_id\"],\"relationToFields\":[\"id\",\"hospital_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"pay_id\",\"hospital_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"status\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"status_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sent_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"3\"]],\"default\":\"No\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recieve_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"3\"]],\"default\":\"No\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remarks\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"default\":\"Thank you for your donations\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"CURRENT_DATE\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"donations\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"donations\",\"nativeType\":null,\"relationName\":\"donationsTostatus\",\"relationFromFields\":[\"status_id\"],\"relationToFields\":[\"donation_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"supervisor\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"supervisor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hospital_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"nativeType\":null,\"relationName\":\"supervisorTousers\",\"relationFromFields\":[\"supervisor_id\",\"hospital_id\"],\"relationToFields\":[\"id\",\"hospital_id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"supervisor_id\",\"hospital_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"users\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hospital_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"15\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nationality\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"15\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bloodgroup\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"3\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"joining_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"CURRENT_DATE\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contact_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"adm\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"adm\",\"nativeType\":null,\"relationName\":\"admTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attendance\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"attendance\",\"nativeType\":null,\"relationName\":\"attendanceTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gm_hospital\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"gm_hospital\",\"nativeType\":null,\"relationName\":\"gm_hospitalTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hospital_attendance\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"hospital_attendance\",\"nativeType\":null,\"relationName\":\"hospital_attendanceTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paycheck\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"paycheck\",\"nativeType\":null,\"relationName\":\"paycheckTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"supervisor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"supervisor\",\"nativeType\":null,\"relationName\":\"supervisorTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"workers\",\"nativeType\":null,\"relationName\":\"usersToworkers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"id\",\"hospital_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"utensil_request\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"utensil_request_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hospital_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity_requested\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_sent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"3\"]],\"default\":\"No\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_recieved\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"3\"]],\"default\":\"No\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gm_coord\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"gm_coord\",\"nativeType\":null,\"relationName\":\"gm_coordToutensil_request\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"utensils\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"utensils\",\"nativeType\":null,\"relationName\":\"utensil_requestToutensils\",\"relationFromFields\":[\"utensil_request_id\"],\"relationToFields\":[\"utensils_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"utensils\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"utensils_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"utensil_request\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"utensil_request\",\"nativeType\":null,\"relationName\":\"utensil_requestToutensils\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"work_status\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"work_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hospital_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"breakfast_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"default\":\"Not delivered Yet\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dinner_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"default\":\"Not delivered Yet\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gm_hospital\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"gm_hospital\",\"nativeType\":null,\"relationName\":\"gm_hospitalTowork_status\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hospital_food_status\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"hospital_food_status\",\"nativeType\":null,\"relationName\":\"hospital_food_statusTowork_status\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"workers\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"worker_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hospital_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"nativeType\":null,\"relationName\":\"usersToworkers\",\"relationFromFields\":[\"worker_id\",\"hospital_id\"],\"relationToFields\":[\"id\",\"hospital_id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"worker_id\",\"hospital_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

