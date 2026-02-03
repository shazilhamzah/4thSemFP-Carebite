
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
