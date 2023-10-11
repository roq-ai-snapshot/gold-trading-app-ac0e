/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model gold_inventory
 *
 */
export type gold_inventory = $Result.DefaultSelection<Prisma.$gold_inventoryPayload>;
/**
 * Model gold_trade
 *
 */
export type gold_trade = $Result.DefaultSelection<Prisma.$gold_tradePayload>;
/**
 * Model market_analysis
 *
 */
export type market_analysis = $Result.DefaultSelection<Prisma.$market_analysisPayload>;
/**
 * Model owner
 *
 */
export type owner = $Result.DefaultSelection<Prisma.$ownerPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.gold_inventory`: Exposes CRUD operations for the **gold_inventory** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Gold_inventories
   * const gold_inventories = await prisma.gold_inventory.findMany()
   * ```
   */
  get gold_inventory(): Prisma.gold_inventoryDelegate<ExtArgs>;

  /**
   * `prisma.gold_trade`: Exposes CRUD operations for the **gold_trade** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Gold_trades
   * const gold_trades = await prisma.gold_trade.findMany()
   * ```
   */
  get gold_trade(): Prisma.gold_tradeDelegate<ExtArgs>;

  /**
   * `prisma.market_analysis`: Exposes CRUD operations for the **market_analysis** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Market_analyses
   * const market_analyses = await prisma.market_analysis.findMany()
   * ```
   */
  get market_analysis(): Prisma.market_analysisDelegate<ExtArgs>;

  /**
   * `prisma.owner`: Exposes CRUD operations for the **owner** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Owners
   * const owners = await prisma.owner.findMany()
   * ```
   */
  get owner(): Prisma.ownerDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    company: 'company';
    gold_inventory: 'gold_inventory';
    gold_trade: 'gold_trade';
    market_analysis: 'market_analysis';
    owner: 'owner';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'company' | 'gold_inventory' | 'gold_trade' | 'market_analysis' | 'owner' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      gold_inventory: {
        payload: Prisma.$gold_inventoryPayload<ExtArgs>;
        fields: Prisma.gold_inventoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.gold_inventoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gold_inventoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.gold_inventoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gold_inventoryPayload>;
          };
          findFirst: {
            args: Prisma.gold_inventoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gold_inventoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.gold_inventoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gold_inventoryPayload>;
          };
          findMany: {
            args: Prisma.gold_inventoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gold_inventoryPayload>[];
          };
          create: {
            args: Prisma.gold_inventoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gold_inventoryPayload>;
          };
          createMany: {
            args: Prisma.gold_inventoryCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.gold_inventoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gold_inventoryPayload>;
          };
          update: {
            args: Prisma.gold_inventoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gold_inventoryPayload>;
          };
          deleteMany: {
            args: Prisma.gold_inventoryDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.gold_inventoryUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.gold_inventoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gold_inventoryPayload>;
          };
          aggregate: {
            args: Prisma.Gold_inventoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateGold_inventory>;
          };
          groupBy: {
            args: Prisma.gold_inventoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Gold_inventoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.gold_inventoryCountArgs<ExtArgs>;
            result: $Utils.Optional<Gold_inventoryCountAggregateOutputType> | number;
          };
        };
      };
      gold_trade: {
        payload: Prisma.$gold_tradePayload<ExtArgs>;
        fields: Prisma.gold_tradeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.gold_tradeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gold_tradePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.gold_tradeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gold_tradePayload>;
          };
          findFirst: {
            args: Prisma.gold_tradeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gold_tradePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.gold_tradeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gold_tradePayload>;
          };
          findMany: {
            args: Prisma.gold_tradeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gold_tradePayload>[];
          };
          create: {
            args: Prisma.gold_tradeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gold_tradePayload>;
          };
          createMany: {
            args: Prisma.gold_tradeCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.gold_tradeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gold_tradePayload>;
          };
          update: {
            args: Prisma.gold_tradeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gold_tradePayload>;
          };
          deleteMany: {
            args: Prisma.gold_tradeDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.gold_tradeUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.gold_tradeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gold_tradePayload>;
          };
          aggregate: {
            args: Prisma.Gold_tradeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateGold_trade>;
          };
          groupBy: {
            args: Prisma.gold_tradeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Gold_tradeGroupByOutputType>[];
          };
          count: {
            args: Prisma.gold_tradeCountArgs<ExtArgs>;
            result: $Utils.Optional<Gold_tradeCountAggregateOutputType> | number;
          };
        };
      };
      market_analysis: {
        payload: Prisma.$market_analysisPayload<ExtArgs>;
        fields: Prisma.market_analysisFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.market_analysisFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$market_analysisPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.market_analysisFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$market_analysisPayload>;
          };
          findFirst: {
            args: Prisma.market_analysisFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$market_analysisPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.market_analysisFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$market_analysisPayload>;
          };
          findMany: {
            args: Prisma.market_analysisFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$market_analysisPayload>[];
          };
          create: {
            args: Prisma.market_analysisCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$market_analysisPayload>;
          };
          createMany: {
            args: Prisma.market_analysisCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.market_analysisDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$market_analysisPayload>;
          };
          update: {
            args: Prisma.market_analysisUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$market_analysisPayload>;
          };
          deleteMany: {
            args: Prisma.market_analysisDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.market_analysisUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.market_analysisUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$market_analysisPayload>;
          };
          aggregate: {
            args: Prisma.Market_analysisAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMarket_analysis>;
          };
          groupBy: {
            args: Prisma.market_analysisGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Market_analysisGroupByOutputType>[];
          };
          count: {
            args: Prisma.market_analysisCountArgs<ExtArgs>;
            result: $Utils.Optional<Market_analysisCountAggregateOutputType> | number;
          };
        };
      };
      owner: {
        payload: Prisma.$ownerPayload<ExtArgs>;
        fields: Prisma.ownerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ownerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ownerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>;
          };
          findFirst: {
            args: Prisma.ownerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ownerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>;
          };
          findMany: {
            args: Prisma.ownerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>[];
          };
          create: {
            args: Prisma.ownerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>;
          };
          createMany: {
            args: Prisma.ownerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.ownerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>;
          };
          update: {
            args: Prisma.ownerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>;
          };
          deleteMany: {
            args: Prisma.ownerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.ownerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.ownerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>;
          };
          aggregate: {
            args: Prisma.OwnerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOwner>;
          };
          groupBy: {
            args: Prisma.ownerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OwnerGroupByOutputType>[];
          };
          count: {
            args: Prisma.ownerCountArgs<ExtArgs>;
            result: $Utils.Optional<OwnerCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    gold_inventory: number;
    gold_trade: number;
    owner: number;
  };

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gold_inventory?: boolean | CompanyCountOutputTypeCountGold_inventoryArgs;
    gold_trade?: boolean | CompanyCountOutputTypeCountGold_tradeArgs;
    owner?: boolean | CompanyCountOutputTypeCountOwnerArgs;
  };

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountGold_inventoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: gold_inventoryWhereInput;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountGold_tradeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: gold_tradeWhereInput;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountOwnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: ownerWhereInput;
    };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    company: number;
    gold_trade: number;
    market_analysis: number;
    owner: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | UserCountOutputTypeCountCompanyArgs;
    gold_trade?: boolean | UserCountOutputTypeCountGold_tradeArgs;
    market_analysis?: boolean | UserCountOutputTypeCountMarket_analysisArgs;
    owner?: boolean | UserCountOutputTypeCountOwnerArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: companyWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGold_tradeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: gold_tradeWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMarket_analysisArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: market_analysisWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ownerWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    established_at: Date | null;
    country: string | null;
    city: string | null;
    address: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    established_at: Date | null;
    country: string | null;
    city: string | null;
    address: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    established_at: number;
    country: number;
    city: number;
    address: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    established_at?: true;
    country?: true;
    city?: true;
    address?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    established_at?: true;
    country?: true;
    city?: true;
    address?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    established_at?: true;
    country?: true;
    city?: true;
    address?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    established_at: Date | null;
    country: string | null;
    city: string | null;
    address: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      established_at?: boolean;
      country?: boolean;
      city?: boolean;
      address?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
      gold_inventory?: boolean | company$gold_inventoryArgs<ExtArgs>;
      gold_trade?: boolean | company$gold_tradeArgs<ExtArgs>;
      owner?: boolean | company$ownerArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    established_at?: boolean;
    country?: boolean;
    city?: boolean;
    address?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    gold_inventory?: boolean | company$gold_inventoryArgs<ExtArgs>;
    gold_trade?: boolean | company$gold_tradeArgs<ExtArgs>;
    owner?: boolean | company$ownerArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      gold_inventory: Prisma.$gold_inventoryPayload<ExtArgs>[];
      gold_trade: Prisma.$gold_tradePayload<ExtArgs>[];
      owner: Prisma.$ownerPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        established_at: Date | null;
        country: string | null;
        city: string | null;
        address: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    gold_inventory<T extends company$gold_inventoryArgs<ExtArgs> = {}>(
      args?: Subset<T, company$gold_inventoryArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gold_inventoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    gold_trade<T extends company$gold_tradeArgs<ExtArgs> = {}>(
      args?: Subset<T, company$gold_tradeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gold_tradePayload<ExtArgs>, T, 'findMany'> | Null>;

    owner<T extends company$ownerArgs<ExtArgs> = {}>(
      args?: Subset<T, company$ownerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly established_at: FieldRef<'company', 'DateTime'>;
    readonly country: FieldRef<'company', 'String'>;
    readonly city: FieldRef<'company', 'String'>;
    readonly address: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly user_id: FieldRef<'company', 'String'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company.gold_inventory
   */
  export type company$gold_inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gold_inventory
     */
    select?: gold_inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gold_inventoryInclude<ExtArgs> | null;
    where?: gold_inventoryWhereInput;
    orderBy?: gold_inventoryOrderByWithRelationInput | gold_inventoryOrderByWithRelationInput[];
    cursor?: gold_inventoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Gold_inventoryScalarFieldEnum | Gold_inventoryScalarFieldEnum[];
  };

  /**
   * company.gold_trade
   */
  export type company$gold_tradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gold_trade
     */
    select?: gold_tradeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gold_tradeInclude<ExtArgs> | null;
    where?: gold_tradeWhereInput;
    orderBy?: gold_tradeOrderByWithRelationInput | gold_tradeOrderByWithRelationInput[];
    cursor?: gold_tradeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Gold_tradeScalarFieldEnum | Gold_tradeScalarFieldEnum[];
  };

  /**
   * company.owner
   */
  export type company$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    where?: ownerWhereInput;
    orderBy?: ownerOrderByWithRelationInput | ownerOrderByWithRelationInput[];
    cursor?: ownerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[];
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model gold_inventory
   */

  export type AggregateGold_inventory = {
    _count: Gold_inventoryCountAggregateOutputType | null;
    _avg: Gold_inventoryAvgAggregateOutputType | null;
    _sum: Gold_inventorySumAggregateOutputType | null;
    _min: Gold_inventoryMinAggregateOutputType | null;
    _max: Gold_inventoryMaxAggregateOutputType | null;
  };

  export type Gold_inventoryAvgAggregateOutputType = {
    quantity: number | null;
    acquisition_price: number | null;
  };

  export type Gold_inventorySumAggregateOutputType = {
    quantity: number | null;
    acquisition_price: number | null;
  };

  export type Gold_inventoryMinAggregateOutputType = {
    id: string | null;
    company_id: string | null;
    gold_type: string | null;
    quantity: number | null;
    acquisition_date: Date | null;
    acquisition_price: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Gold_inventoryMaxAggregateOutputType = {
    id: string | null;
    company_id: string | null;
    gold_type: string | null;
    quantity: number | null;
    acquisition_date: Date | null;
    acquisition_price: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Gold_inventoryCountAggregateOutputType = {
    id: number;
    company_id: number;
    gold_type: number;
    quantity: number;
    acquisition_date: number;
    acquisition_price: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Gold_inventoryAvgAggregateInputType = {
    quantity?: true;
    acquisition_price?: true;
  };

  export type Gold_inventorySumAggregateInputType = {
    quantity?: true;
    acquisition_price?: true;
  };

  export type Gold_inventoryMinAggregateInputType = {
    id?: true;
    company_id?: true;
    gold_type?: true;
    quantity?: true;
    acquisition_date?: true;
    acquisition_price?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Gold_inventoryMaxAggregateInputType = {
    id?: true;
    company_id?: true;
    gold_type?: true;
    quantity?: true;
    acquisition_date?: true;
    acquisition_price?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Gold_inventoryCountAggregateInputType = {
    id?: true;
    company_id?: true;
    gold_type?: true;
    quantity?: true;
    acquisition_date?: true;
    acquisition_price?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Gold_inventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gold_inventory to aggregate.
     */
    where?: gold_inventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of gold_inventories to fetch.
     */
    orderBy?: gold_inventoryOrderByWithRelationInput | gold_inventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: gold_inventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` gold_inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` gold_inventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned gold_inventories
     **/
    _count?: true | Gold_inventoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Gold_inventoryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Gold_inventorySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Gold_inventoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Gold_inventoryMaxAggregateInputType;
  };

  export type GetGold_inventoryAggregateType<T extends Gold_inventoryAggregateArgs> = {
    [P in keyof T & keyof AggregateGold_inventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGold_inventory[P]>
      : GetScalarType<T[P], AggregateGold_inventory[P]>;
  };

  export type gold_inventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gold_inventoryWhereInput;
    orderBy?: gold_inventoryOrderByWithAggregationInput | gold_inventoryOrderByWithAggregationInput[];
    by: Gold_inventoryScalarFieldEnum[] | Gold_inventoryScalarFieldEnum;
    having?: gold_inventoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Gold_inventoryCountAggregateInputType | true;
    _avg?: Gold_inventoryAvgAggregateInputType;
    _sum?: Gold_inventorySumAggregateInputType;
    _min?: Gold_inventoryMinAggregateInputType;
    _max?: Gold_inventoryMaxAggregateInputType;
  };

  export type Gold_inventoryGroupByOutputType = {
    id: string;
    company_id: string;
    gold_type: string | null;
    quantity: number | null;
    acquisition_date: Date;
    acquisition_price: number | null;
    created_at: Date;
    updated_at: Date;
    _count: Gold_inventoryCountAggregateOutputType | null;
    _avg: Gold_inventoryAvgAggregateOutputType | null;
    _sum: Gold_inventorySumAggregateOutputType | null;
    _min: Gold_inventoryMinAggregateOutputType | null;
    _max: Gold_inventoryMaxAggregateOutputType | null;
  };

  type GetGold_inventoryGroupByPayload<T extends gold_inventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Gold_inventoryGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Gold_inventoryGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Gold_inventoryGroupByOutputType[P]>
          : GetScalarType<T[P], Gold_inventoryGroupByOutputType[P]>;
      }
    >
  >;

  export type gold_inventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        company_id?: boolean;
        gold_type?: boolean;
        quantity?: boolean;
        acquisition_date?: boolean;
        acquisition_price?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        company?: boolean | companyDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['gold_inventory']
    >;

  export type gold_inventorySelectScalar = {
    id?: boolean;
    company_id?: boolean;
    gold_type?: boolean;
    quantity?: boolean;
    acquisition_date?: boolean;
    acquisition_price?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type gold_inventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>;
  };

  export type $gold_inventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'gold_inventory';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        company_id: string;
        gold_type: string | null;
        quantity: number | null;
        acquisition_date: Date;
        acquisition_price: number | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['gold_inventory']
    >;
    composites: {};
  };

  type gold_inventoryGetPayload<S extends boolean | null | undefined | gold_inventoryDefaultArgs> = $Result.GetResult<
    Prisma.$gold_inventoryPayload,
    S
  >;

  type gold_inventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    gold_inventoryFindManyArgs,
    'select' | 'include'
  > & {
    select?: Gold_inventoryCountAggregateInputType | true;
  };

  export interface gold_inventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['gold_inventory']; meta: { name: 'gold_inventory' } };
    /**
     * Find zero or one Gold_inventory that matches the filter.
     * @param {gold_inventoryFindUniqueArgs} args - Arguments to find a Gold_inventory
     * @example
     * // Get one Gold_inventory
     * const gold_inventory = await prisma.gold_inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends gold_inventoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, gold_inventoryFindUniqueArgs<ExtArgs>>,
    ): Prisma__gold_inventoryClient<
      $Result.GetResult<Prisma.$gold_inventoryPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Gold_inventory that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {gold_inventoryFindUniqueOrThrowArgs} args - Arguments to find a Gold_inventory
     * @example
     * // Get one Gold_inventory
     * const gold_inventory = await prisma.gold_inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends gold_inventoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, gold_inventoryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__gold_inventoryClient<
      $Result.GetResult<Prisma.$gold_inventoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Gold_inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gold_inventoryFindFirstArgs} args - Arguments to find a Gold_inventory
     * @example
     * // Get one Gold_inventory
     * const gold_inventory = await prisma.gold_inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends gold_inventoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, gold_inventoryFindFirstArgs<ExtArgs>>,
    ): Prisma__gold_inventoryClient<
      $Result.GetResult<Prisma.$gold_inventoryPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Gold_inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gold_inventoryFindFirstOrThrowArgs} args - Arguments to find a Gold_inventory
     * @example
     * // Get one Gold_inventory
     * const gold_inventory = await prisma.gold_inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends gold_inventoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, gold_inventoryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__gold_inventoryClient<
      $Result.GetResult<Prisma.$gold_inventoryPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Gold_inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gold_inventoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gold_inventories
     * const gold_inventories = await prisma.gold_inventory.findMany()
     *
     * // Get first 10 Gold_inventories
     * const gold_inventories = await prisma.gold_inventory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const gold_inventoryWithIdOnly = await prisma.gold_inventory.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends gold_inventoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, gold_inventoryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gold_inventoryPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Gold_inventory.
     * @param {gold_inventoryCreateArgs} args - Arguments to create a Gold_inventory.
     * @example
     * // Create one Gold_inventory
     * const Gold_inventory = await prisma.gold_inventory.create({
     *   data: {
     *     // ... data to create a Gold_inventory
     *   }
     * })
     *
     **/
    create<T extends gold_inventoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, gold_inventoryCreateArgs<ExtArgs>>,
    ): Prisma__gold_inventoryClient<
      $Result.GetResult<Prisma.$gold_inventoryPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Gold_inventories.
     *     @param {gold_inventoryCreateManyArgs} args - Arguments to create many Gold_inventories.
     *     @example
     *     // Create many Gold_inventories
     *     const gold_inventory = await prisma.gold_inventory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends gold_inventoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, gold_inventoryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Gold_inventory.
     * @param {gold_inventoryDeleteArgs} args - Arguments to delete one Gold_inventory.
     * @example
     * // Delete one Gold_inventory
     * const Gold_inventory = await prisma.gold_inventory.delete({
     *   where: {
     *     // ... filter to delete one Gold_inventory
     *   }
     * })
     *
     **/
    delete<T extends gold_inventoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, gold_inventoryDeleteArgs<ExtArgs>>,
    ): Prisma__gold_inventoryClient<
      $Result.GetResult<Prisma.$gold_inventoryPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Gold_inventory.
     * @param {gold_inventoryUpdateArgs} args - Arguments to update one Gold_inventory.
     * @example
     * // Update one Gold_inventory
     * const gold_inventory = await prisma.gold_inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends gold_inventoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, gold_inventoryUpdateArgs<ExtArgs>>,
    ): Prisma__gold_inventoryClient<
      $Result.GetResult<Prisma.$gold_inventoryPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Gold_inventories.
     * @param {gold_inventoryDeleteManyArgs} args - Arguments to filter Gold_inventories to delete.
     * @example
     * // Delete a few Gold_inventories
     * const { count } = await prisma.gold_inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends gold_inventoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, gold_inventoryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Gold_inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gold_inventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gold_inventories
     * const gold_inventory = await prisma.gold_inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends gold_inventoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, gold_inventoryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Gold_inventory.
     * @param {gold_inventoryUpsertArgs} args - Arguments to update or create a Gold_inventory.
     * @example
     * // Update or create a Gold_inventory
     * const gold_inventory = await prisma.gold_inventory.upsert({
     *   create: {
     *     // ... data to create a Gold_inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gold_inventory we want to update
     *   }
     * })
     **/
    upsert<T extends gold_inventoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, gold_inventoryUpsertArgs<ExtArgs>>,
    ): Prisma__gold_inventoryClient<
      $Result.GetResult<Prisma.$gold_inventoryPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Gold_inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gold_inventoryCountArgs} args - Arguments to filter Gold_inventories to count.
     * @example
     * // Count the number of Gold_inventories
     * const count = await prisma.gold_inventory.count({
     *   where: {
     *     // ... the filter for the Gold_inventories we want to count
     *   }
     * })
     **/
    count<T extends gold_inventoryCountArgs>(
      args?: Subset<T, gold_inventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Gold_inventoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Gold_inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Gold_inventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Gold_inventoryAggregateArgs>(
      args: Subset<T, Gold_inventoryAggregateArgs>,
    ): Prisma.PrismaPromise<GetGold_inventoryAggregateType<T>>;

    /**
     * Group by Gold_inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gold_inventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends gold_inventoryGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gold_inventoryGroupByArgs['orderBy'] }
        : { orderBy?: gold_inventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, gold_inventoryGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetGold_inventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the gold_inventory model
     */
    readonly fields: gold_inventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for gold_inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gold_inventoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the gold_inventory model
   */
  interface gold_inventoryFieldRefs {
    readonly id: FieldRef<'gold_inventory', 'String'>;
    readonly company_id: FieldRef<'gold_inventory', 'String'>;
    readonly gold_type: FieldRef<'gold_inventory', 'String'>;
    readonly quantity: FieldRef<'gold_inventory', 'Int'>;
    readonly acquisition_date: FieldRef<'gold_inventory', 'DateTime'>;
    readonly acquisition_price: FieldRef<'gold_inventory', 'Int'>;
    readonly created_at: FieldRef<'gold_inventory', 'DateTime'>;
    readonly updated_at: FieldRef<'gold_inventory', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * gold_inventory findUnique
   */
  export type gold_inventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gold_inventory
     */
    select?: gold_inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gold_inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which gold_inventory to fetch.
     */
    where: gold_inventoryWhereUniqueInput;
  };

  /**
   * gold_inventory findUniqueOrThrow
   */
  export type gold_inventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the gold_inventory
       */
      select?: gold_inventorySelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: gold_inventoryInclude<ExtArgs> | null;
      /**
       * Filter, which gold_inventory to fetch.
       */
      where: gold_inventoryWhereUniqueInput;
    };

  /**
   * gold_inventory findFirst
   */
  export type gold_inventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gold_inventory
     */
    select?: gold_inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gold_inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which gold_inventory to fetch.
     */
    where?: gold_inventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of gold_inventories to fetch.
     */
    orderBy?: gold_inventoryOrderByWithRelationInput | gold_inventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for gold_inventories.
     */
    cursor?: gold_inventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` gold_inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` gold_inventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of gold_inventories.
     */
    distinct?: Gold_inventoryScalarFieldEnum | Gold_inventoryScalarFieldEnum[];
  };

  /**
   * gold_inventory findFirstOrThrow
   */
  export type gold_inventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gold_inventory
     */
    select?: gold_inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gold_inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which gold_inventory to fetch.
     */
    where?: gold_inventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of gold_inventories to fetch.
     */
    orderBy?: gold_inventoryOrderByWithRelationInput | gold_inventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for gold_inventories.
     */
    cursor?: gold_inventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` gold_inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` gold_inventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of gold_inventories.
     */
    distinct?: Gold_inventoryScalarFieldEnum | Gold_inventoryScalarFieldEnum[];
  };

  /**
   * gold_inventory findMany
   */
  export type gold_inventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gold_inventory
     */
    select?: gold_inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gold_inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which gold_inventories to fetch.
     */
    where?: gold_inventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of gold_inventories to fetch.
     */
    orderBy?: gold_inventoryOrderByWithRelationInput | gold_inventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing gold_inventories.
     */
    cursor?: gold_inventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` gold_inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` gold_inventories.
     */
    skip?: number;
    distinct?: Gold_inventoryScalarFieldEnum | Gold_inventoryScalarFieldEnum[];
  };

  /**
   * gold_inventory create
   */
  export type gold_inventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gold_inventory
     */
    select?: gold_inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gold_inventoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a gold_inventory.
     */
    data: XOR<gold_inventoryCreateInput, gold_inventoryUncheckedCreateInput>;
  };

  /**
   * gold_inventory createMany
   */
  export type gold_inventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many gold_inventories.
     */
    data: gold_inventoryCreateManyInput | gold_inventoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * gold_inventory update
   */
  export type gold_inventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gold_inventory
     */
    select?: gold_inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gold_inventoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a gold_inventory.
     */
    data: XOR<gold_inventoryUpdateInput, gold_inventoryUncheckedUpdateInput>;
    /**
     * Choose, which gold_inventory to update.
     */
    where: gold_inventoryWhereUniqueInput;
  };

  /**
   * gold_inventory updateMany
   */
  export type gold_inventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update gold_inventories.
     */
    data: XOR<gold_inventoryUpdateManyMutationInput, gold_inventoryUncheckedUpdateManyInput>;
    /**
     * Filter which gold_inventories to update
     */
    where?: gold_inventoryWhereInput;
  };

  /**
   * gold_inventory upsert
   */
  export type gold_inventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gold_inventory
     */
    select?: gold_inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gold_inventoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the gold_inventory to update in case it exists.
     */
    where: gold_inventoryWhereUniqueInput;
    /**
     * In case the gold_inventory found by the `where` argument doesn't exist, create a new gold_inventory with this data.
     */
    create: XOR<gold_inventoryCreateInput, gold_inventoryUncheckedCreateInput>;
    /**
     * In case the gold_inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gold_inventoryUpdateInput, gold_inventoryUncheckedUpdateInput>;
  };

  /**
   * gold_inventory delete
   */
  export type gold_inventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gold_inventory
     */
    select?: gold_inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gold_inventoryInclude<ExtArgs> | null;
    /**
     * Filter which gold_inventory to delete.
     */
    where: gold_inventoryWhereUniqueInput;
  };

  /**
   * gold_inventory deleteMany
   */
  export type gold_inventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gold_inventories to delete
     */
    where?: gold_inventoryWhereInput;
  };

  /**
   * gold_inventory without action
   */
  export type gold_inventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gold_inventory
     */
    select?: gold_inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gold_inventoryInclude<ExtArgs> | null;
  };

  /**
   * Model gold_trade
   */

  export type AggregateGold_trade = {
    _count: Gold_tradeCountAggregateOutputType | null;
    _avg: Gold_tradeAvgAggregateOutputType | null;
    _sum: Gold_tradeSumAggregateOutputType | null;
    _min: Gold_tradeMinAggregateOutputType | null;
    _max: Gold_tradeMaxAggregateOutputType | null;
  };

  export type Gold_tradeAvgAggregateOutputType = {
    quantity: number | null;
    trade_price: number | null;
  };

  export type Gold_tradeSumAggregateOutputType = {
    quantity: number | null;
    trade_price: number | null;
  };

  export type Gold_tradeMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    company_id: string | null;
    gold_type: string | null;
    quantity: number | null;
    trade_date: Date | null;
    trade_price: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Gold_tradeMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    company_id: string | null;
    gold_type: string | null;
    quantity: number | null;
    trade_date: Date | null;
    trade_price: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Gold_tradeCountAggregateOutputType = {
    id: number;
    user_id: number;
    company_id: number;
    gold_type: number;
    quantity: number;
    trade_date: number;
    trade_price: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Gold_tradeAvgAggregateInputType = {
    quantity?: true;
    trade_price?: true;
  };

  export type Gold_tradeSumAggregateInputType = {
    quantity?: true;
    trade_price?: true;
  };

  export type Gold_tradeMinAggregateInputType = {
    id?: true;
    user_id?: true;
    company_id?: true;
    gold_type?: true;
    quantity?: true;
    trade_date?: true;
    trade_price?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Gold_tradeMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    company_id?: true;
    gold_type?: true;
    quantity?: true;
    trade_date?: true;
    trade_price?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Gold_tradeCountAggregateInputType = {
    id?: true;
    user_id?: true;
    company_id?: true;
    gold_type?: true;
    quantity?: true;
    trade_date?: true;
    trade_price?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Gold_tradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gold_trade to aggregate.
     */
    where?: gold_tradeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of gold_trades to fetch.
     */
    orderBy?: gold_tradeOrderByWithRelationInput | gold_tradeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: gold_tradeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` gold_trades from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` gold_trades.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned gold_trades
     **/
    _count?: true | Gold_tradeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Gold_tradeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Gold_tradeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Gold_tradeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Gold_tradeMaxAggregateInputType;
  };

  export type GetGold_tradeAggregateType<T extends Gold_tradeAggregateArgs> = {
    [P in keyof T & keyof AggregateGold_trade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGold_trade[P]>
      : GetScalarType<T[P], AggregateGold_trade[P]>;
  };

  export type gold_tradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gold_tradeWhereInput;
    orderBy?: gold_tradeOrderByWithAggregationInput | gold_tradeOrderByWithAggregationInput[];
    by: Gold_tradeScalarFieldEnum[] | Gold_tradeScalarFieldEnum;
    having?: gold_tradeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Gold_tradeCountAggregateInputType | true;
    _avg?: Gold_tradeAvgAggregateInputType;
    _sum?: Gold_tradeSumAggregateInputType;
    _min?: Gold_tradeMinAggregateInputType;
    _max?: Gold_tradeMaxAggregateInputType;
  };

  export type Gold_tradeGroupByOutputType = {
    id: string;
    user_id: string;
    company_id: string;
    gold_type: string | null;
    quantity: number | null;
    trade_date: Date;
    trade_price: number | null;
    created_at: Date;
    updated_at: Date;
    _count: Gold_tradeCountAggregateOutputType | null;
    _avg: Gold_tradeAvgAggregateOutputType | null;
    _sum: Gold_tradeSumAggregateOutputType | null;
    _min: Gold_tradeMinAggregateOutputType | null;
    _max: Gold_tradeMaxAggregateOutputType | null;
  };

  type GetGold_tradeGroupByPayload<T extends gold_tradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Gold_tradeGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Gold_tradeGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Gold_tradeGroupByOutputType[P]>
          : GetScalarType<T[P], Gold_tradeGroupByOutputType[P]>;
      }
    >
  >;

  export type gold_tradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        company_id?: boolean;
        gold_type?: boolean;
        quantity?: boolean;
        trade_date?: boolean;
        trade_price?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        company?: boolean | companyDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['gold_trade']
    >;

  export type gold_tradeSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    company_id?: boolean;
    gold_type?: boolean;
    quantity?: boolean;
    trade_date?: boolean;
    trade_price?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type gold_tradeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $gold_tradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'gold_trade';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        company_id: string;
        gold_type: string | null;
        quantity: number | null;
        trade_date: Date;
        trade_price: number | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['gold_trade']
    >;
    composites: {};
  };

  type gold_tradeGetPayload<S extends boolean | null | undefined | gold_tradeDefaultArgs> = $Result.GetResult<
    Prisma.$gold_tradePayload,
    S
  >;

  type gold_tradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    gold_tradeFindManyArgs,
    'select' | 'include'
  > & {
    select?: Gold_tradeCountAggregateInputType | true;
  };

  export interface gold_tradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['gold_trade']; meta: { name: 'gold_trade' } };
    /**
     * Find zero or one Gold_trade that matches the filter.
     * @param {gold_tradeFindUniqueArgs} args - Arguments to find a Gold_trade
     * @example
     * // Get one Gold_trade
     * const gold_trade = await prisma.gold_trade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends gold_tradeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, gold_tradeFindUniqueArgs<ExtArgs>>,
    ): Prisma__gold_tradeClient<
      $Result.GetResult<Prisma.$gold_tradePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Gold_trade that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {gold_tradeFindUniqueOrThrowArgs} args - Arguments to find a Gold_trade
     * @example
     * // Get one Gold_trade
     * const gold_trade = await prisma.gold_trade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends gold_tradeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, gold_tradeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__gold_tradeClient<
      $Result.GetResult<Prisma.$gold_tradePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Gold_trade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gold_tradeFindFirstArgs} args - Arguments to find a Gold_trade
     * @example
     * // Get one Gold_trade
     * const gold_trade = await prisma.gold_trade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends gold_tradeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, gold_tradeFindFirstArgs<ExtArgs>>,
    ): Prisma__gold_tradeClient<
      $Result.GetResult<Prisma.$gold_tradePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Gold_trade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gold_tradeFindFirstOrThrowArgs} args - Arguments to find a Gold_trade
     * @example
     * // Get one Gold_trade
     * const gold_trade = await prisma.gold_trade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends gold_tradeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, gold_tradeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__gold_tradeClient<
      $Result.GetResult<Prisma.$gold_tradePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Gold_trades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gold_tradeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gold_trades
     * const gold_trades = await prisma.gold_trade.findMany()
     *
     * // Get first 10 Gold_trades
     * const gold_trades = await prisma.gold_trade.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const gold_tradeWithIdOnly = await prisma.gold_trade.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends gold_tradeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, gold_tradeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gold_tradePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Gold_trade.
     * @param {gold_tradeCreateArgs} args - Arguments to create a Gold_trade.
     * @example
     * // Create one Gold_trade
     * const Gold_trade = await prisma.gold_trade.create({
     *   data: {
     *     // ... data to create a Gold_trade
     *   }
     * })
     *
     **/
    create<T extends gold_tradeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, gold_tradeCreateArgs<ExtArgs>>,
    ): Prisma__gold_tradeClient<$Result.GetResult<Prisma.$gold_tradePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Gold_trades.
     *     @param {gold_tradeCreateManyArgs} args - Arguments to create many Gold_trades.
     *     @example
     *     // Create many Gold_trades
     *     const gold_trade = await prisma.gold_trade.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends gold_tradeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, gold_tradeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Gold_trade.
     * @param {gold_tradeDeleteArgs} args - Arguments to delete one Gold_trade.
     * @example
     * // Delete one Gold_trade
     * const Gold_trade = await prisma.gold_trade.delete({
     *   where: {
     *     // ... filter to delete one Gold_trade
     *   }
     * })
     *
     **/
    delete<T extends gold_tradeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, gold_tradeDeleteArgs<ExtArgs>>,
    ): Prisma__gold_tradeClient<$Result.GetResult<Prisma.$gold_tradePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Gold_trade.
     * @param {gold_tradeUpdateArgs} args - Arguments to update one Gold_trade.
     * @example
     * // Update one Gold_trade
     * const gold_trade = await prisma.gold_trade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends gold_tradeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, gold_tradeUpdateArgs<ExtArgs>>,
    ): Prisma__gold_tradeClient<$Result.GetResult<Prisma.$gold_tradePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Gold_trades.
     * @param {gold_tradeDeleteManyArgs} args - Arguments to filter Gold_trades to delete.
     * @example
     * // Delete a few Gold_trades
     * const { count } = await prisma.gold_trade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends gold_tradeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, gold_tradeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Gold_trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gold_tradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gold_trades
     * const gold_trade = await prisma.gold_trade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends gold_tradeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, gold_tradeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Gold_trade.
     * @param {gold_tradeUpsertArgs} args - Arguments to update or create a Gold_trade.
     * @example
     * // Update or create a Gold_trade
     * const gold_trade = await prisma.gold_trade.upsert({
     *   create: {
     *     // ... data to create a Gold_trade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gold_trade we want to update
     *   }
     * })
     **/
    upsert<T extends gold_tradeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, gold_tradeUpsertArgs<ExtArgs>>,
    ): Prisma__gold_tradeClient<$Result.GetResult<Prisma.$gold_tradePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Gold_trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gold_tradeCountArgs} args - Arguments to filter Gold_trades to count.
     * @example
     * // Count the number of Gold_trades
     * const count = await prisma.gold_trade.count({
     *   where: {
     *     // ... the filter for the Gold_trades we want to count
     *   }
     * })
     **/
    count<T extends gold_tradeCountArgs>(
      args?: Subset<T, gold_tradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Gold_tradeCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Gold_trade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Gold_tradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Gold_tradeAggregateArgs>(
      args: Subset<T, Gold_tradeAggregateArgs>,
    ): Prisma.PrismaPromise<GetGold_tradeAggregateType<T>>;

    /**
     * Group by Gold_trade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gold_tradeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends gold_tradeGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gold_tradeGroupByArgs['orderBy'] }
        : { orderBy?: gold_tradeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, gold_tradeGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetGold_tradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the gold_trade model
     */
    readonly fields: gold_tradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for gold_trade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gold_tradeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the gold_trade model
   */
  interface gold_tradeFieldRefs {
    readonly id: FieldRef<'gold_trade', 'String'>;
    readonly user_id: FieldRef<'gold_trade', 'String'>;
    readonly company_id: FieldRef<'gold_trade', 'String'>;
    readonly gold_type: FieldRef<'gold_trade', 'String'>;
    readonly quantity: FieldRef<'gold_trade', 'Int'>;
    readonly trade_date: FieldRef<'gold_trade', 'DateTime'>;
    readonly trade_price: FieldRef<'gold_trade', 'Int'>;
    readonly created_at: FieldRef<'gold_trade', 'DateTime'>;
    readonly updated_at: FieldRef<'gold_trade', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * gold_trade findUnique
   */
  export type gold_tradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gold_trade
     */
    select?: gold_tradeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gold_tradeInclude<ExtArgs> | null;
    /**
     * Filter, which gold_trade to fetch.
     */
    where: gold_tradeWhereUniqueInput;
  };

  /**
   * gold_trade findUniqueOrThrow
   */
  export type gold_tradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gold_trade
     */
    select?: gold_tradeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gold_tradeInclude<ExtArgs> | null;
    /**
     * Filter, which gold_trade to fetch.
     */
    where: gold_tradeWhereUniqueInput;
  };

  /**
   * gold_trade findFirst
   */
  export type gold_tradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gold_trade
     */
    select?: gold_tradeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gold_tradeInclude<ExtArgs> | null;
    /**
     * Filter, which gold_trade to fetch.
     */
    where?: gold_tradeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of gold_trades to fetch.
     */
    orderBy?: gold_tradeOrderByWithRelationInput | gold_tradeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for gold_trades.
     */
    cursor?: gold_tradeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` gold_trades from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` gold_trades.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of gold_trades.
     */
    distinct?: Gold_tradeScalarFieldEnum | Gold_tradeScalarFieldEnum[];
  };

  /**
   * gold_trade findFirstOrThrow
   */
  export type gold_tradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gold_trade
     */
    select?: gold_tradeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gold_tradeInclude<ExtArgs> | null;
    /**
     * Filter, which gold_trade to fetch.
     */
    where?: gold_tradeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of gold_trades to fetch.
     */
    orderBy?: gold_tradeOrderByWithRelationInput | gold_tradeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for gold_trades.
     */
    cursor?: gold_tradeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` gold_trades from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` gold_trades.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of gold_trades.
     */
    distinct?: Gold_tradeScalarFieldEnum | Gold_tradeScalarFieldEnum[];
  };

  /**
   * gold_trade findMany
   */
  export type gold_tradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gold_trade
     */
    select?: gold_tradeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gold_tradeInclude<ExtArgs> | null;
    /**
     * Filter, which gold_trades to fetch.
     */
    where?: gold_tradeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of gold_trades to fetch.
     */
    orderBy?: gold_tradeOrderByWithRelationInput | gold_tradeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing gold_trades.
     */
    cursor?: gold_tradeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` gold_trades from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` gold_trades.
     */
    skip?: number;
    distinct?: Gold_tradeScalarFieldEnum | Gold_tradeScalarFieldEnum[];
  };

  /**
   * gold_trade create
   */
  export type gold_tradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gold_trade
     */
    select?: gold_tradeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gold_tradeInclude<ExtArgs> | null;
    /**
     * The data needed to create a gold_trade.
     */
    data: XOR<gold_tradeCreateInput, gold_tradeUncheckedCreateInput>;
  };

  /**
   * gold_trade createMany
   */
  export type gold_tradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many gold_trades.
     */
    data: gold_tradeCreateManyInput | gold_tradeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * gold_trade update
   */
  export type gold_tradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gold_trade
     */
    select?: gold_tradeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gold_tradeInclude<ExtArgs> | null;
    /**
     * The data needed to update a gold_trade.
     */
    data: XOR<gold_tradeUpdateInput, gold_tradeUncheckedUpdateInput>;
    /**
     * Choose, which gold_trade to update.
     */
    where: gold_tradeWhereUniqueInput;
  };

  /**
   * gold_trade updateMany
   */
  export type gold_tradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update gold_trades.
     */
    data: XOR<gold_tradeUpdateManyMutationInput, gold_tradeUncheckedUpdateManyInput>;
    /**
     * Filter which gold_trades to update
     */
    where?: gold_tradeWhereInput;
  };

  /**
   * gold_trade upsert
   */
  export type gold_tradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gold_trade
     */
    select?: gold_tradeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gold_tradeInclude<ExtArgs> | null;
    /**
     * The filter to search for the gold_trade to update in case it exists.
     */
    where: gold_tradeWhereUniqueInput;
    /**
     * In case the gold_trade found by the `where` argument doesn't exist, create a new gold_trade with this data.
     */
    create: XOR<gold_tradeCreateInput, gold_tradeUncheckedCreateInput>;
    /**
     * In case the gold_trade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gold_tradeUpdateInput, gold_tradeUncheckedUpdateInput>;
  };

  /**
   * gold_trade delete
   */
  export type gold_tradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gold_trade
     */
    select?: gold_tradeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gold_tradeInclude<ExtArgs> | null;
    /**
     * Filter which gold_trade to delete.
     */
    where: gold_tradeWhereUniqueInput;
  };

  /**
   * gold_trade deleteMany
   */
  export type gold_tradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gold_trades to delete
     */
    where?: gold_tradeWhereInput;
  };

  /**
   * gold_trade without action
   */
  export type gold_tradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gold_trade
     */
    select?: gold_tradeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gold_tradeInclude<ExtArgs> | null;
  };

  /**
   * Model market_analysis
   */

  export type AggregateMarket_analysis = {
    _count: Market_analysisCountAggregateOutputType | null;
    _avg: Market_analysisAvgAggregateOutputType | null;
    _sum: Market_analysisSumAggregateOutputType | null;
    _min: Market_analysisMinAggregateOutputType | null;
    _max: Market_analysisMaxAggregateOutputType | null;
  };

  export type Market_analysisAvgAggregateOutputType = {
    predicted_price: number | null;
    actual_price: number | null;
    accuracy: number | null;
  };

  export type Market_analysisSumAggregateOutputType = {
    predicted_price: number | null;
    actual_price: number | null;
    accuracy: number | null;
  };

  export type Market_analysisMinAggregateOutputType = {
    id: string | null;
    analyst_id: string | null;
    gold_type: string | null;
    analysis_date: Date | null;
    predicted_price: number | null;
    actual_price: number | null;
    accuracy: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Market_analysisMaxAggregateOutputType = {
    id: string | null;
    analyst_id: string | null;
    gold_type: string | null;
    analysis_date: Date | null;
    predicted_price: number | null;
    actual_price: number | null;
    accuracy: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Market_analysisCountAggregateOutputType = {
    id: number;
    analyst_id: number;
    gold_type: number;
    analysis_date: number;
    predicted_price: number;
    actual_price: number;
    accuracy: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Market_analysisAvgAggregateInputType = {
    predicted_price?: true;
    actual_price?: true;
    accuracy?: true;
  };

  export type Market_analysisSumAggregateInputType = {
    predicted_price?: true;
    actual_price?: true;
    accuracy?: true;
  };

  export type Market_analysisMinAggregateInputType = {
    id?: true;
    analyst_id?: true;
    gold_type?: true;
    analysis_date?: true;
    predicted_price?: true;
    actual_price?: true;
    accuracy?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Market_analysisMaxAggregateInputType = {
    id?: true;
    analyst_id?: true;
    gold_type?: true;
    analysis_date?: true;
    predicted_price?: true;
    actual_price?: true;
    accuracy?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Market_analysisCountAggregateInputType = {
    id?: true;
    analyst_id?: true;
    gold_type?: true;
    analysis_date?: true;
    predicted_price?: true;
    actual_price?: true;
    accuracy?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Market_analysisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which market_analysis to aggregate.
     */
    where?: market_analysisWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of market_analyses to fetch.
     */
    orderBy?: market_analysisOrderByWithRelationInput | market_analysisOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: market_analysisWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` market_analyses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` market_analyses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned market_analyses
     **/
    _count?: true | Market_analysisCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Market_analysisAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Market_analysisSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Market_analysisMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Market_analysisMaxAggregateInputType;
  };

  export type GetMarket_analysisAggregateType<T extends Market_analysisAggregateArgs> = {
    [P in keyof T & keyof AggregateMarket_analysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarket_analysis[P]>
      : GetScalarType<T[P], AggregateMarket_analysis[P]>;
  };

  export type market_analysisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: market_analysisWhereInput;
    orderBy?: market_analysisOrderByWithAggregationInput | market_analysisOrderByWithAggregationInput[];
    by: Market_analysisScalarFieldEnum[] | Market_analysisScalarFieldEnum;
    having?: market_analysisScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Market_analysisCountAggregateInputType | true;
    _avg?: Market_analysisAvgAggregateInputType;
    _sum?: Market_analysisSumAggregateInputType;
    _min?: Market_analysisMinAggregateInputType;
    _max?: Market_analysisMaxAggregateInputType;
  };

  export type Market_analysisGroupByOutputType = {
    id: string;
    analyst_id: string;
    gold_type: string | null;
    analysis_date: Date;
    predicted_price: number | null;
    actual_price: number | null;
    accuracy: number | null;
    created_at: Date;
    updated_at: Date;
    _count: Market_analysisCountAggregateOutputType | null;
    _avg: Market_analysisAvgAggregateOutputType | null;
    _sum: Market_analysisSumAggregateOutputType | null;
    _min: Market_analysisMinAggregateOutputType | null;
    _max: Market_analysisMaxAggregateOutputType | null;
  };

  type GetMarket_analysisGroupByPayload<T extends market_analysisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Market_analysisGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Market_analysisGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Market_analysisGroupByOutputType[P]>
          : GetScalarType<T[P], Market_analysisGroupByOutputType[P]>;
      }
    >
  >;

  export type market_analysisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        analyst_id?: boolean;
        gold_type?: boolean;
        analysis_date?: boolean;
        predicted_price?: boolean;
        actual_price?: boolean;
        accuracy?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['market_analysis']
    >;

  export type market_analysisSelectScalar = {
    id?: boolean;
    analyst_id?: boolean;
    gold_type?: boolean;
    analysis_date?: boolean;
    predicted_price?: boolean;
    actual_price?: boolean;
    accuracy?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type market_analysisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $market_analysisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'market_analysis';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        analyst_id: string;
        gold_type: string | null;
        analysis_date: Date;
        predicted_price: number | null;
        actual_price: number | null;
        accuracy: number | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['market_analysis']
    >;
    composites: {};
  };

  type market_analysisGetPayload<S extends boolean | null | undefined | market_analysisDefaultArgs> = $Result.GetResult<
    Prisma.$market_analysisPayload,
    S
  >;

  type market_analysisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    market_analysisFindManyArgs,
    'select' | 'include'
  > & {
    select?: Market_analysisCountAggregateInputType | true;
  };

  export interface market_analysisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['market_analysis']; meta: { name: 'market_analysis' } };
    /**
     * Find zero or one Market_analysis that matches the filter.
     * @param {market_analysisFindUniqueArgs} args - Arguments to find a Market_analysis
     * @example
     * // Get one Market_analysis
     * const market_analysis = await prisma.market_analysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends market_analysisFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, market_analysisFindUniqueArgs<ExtArgs>>,
    ): Prisma__market_analysisClient<
      $Result.GetResult<Prisma.$market_analysisPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Market_analysis that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {market_analysisFindUniqueOrThrowArgs} args - Arguments to find a Market_analysis
     * @example
     * // Get one Market_analysis
     * const market_analysis = await prisma.market_analysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends market_analysisFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, market_analysisFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__market_analysisClient<
      $Result.GetResult<Prisma.$market_analysisPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Market_analysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {market_analysisFindFirstArgs} args - Arguments to find a Market_analysis
     * @example
     * // Get one Market_analysis
     * const market_analysis = await prisma.market_analysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends market_analysisFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, market_analysisFindFirstArgs<ExtArgs>>,
    ): Prisma__market_analysisClient<
      $Result.GetResult<Prisma.$market_analysisPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Market_analysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {market_analysisFindFirstOrThrowArgs} args - Arguments to find a Market_analysis
     * @example
     * // Get one Market_analysis
     * const market_analysis = await prisma.market_analysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends market_analysisFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, market_analysisFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__market_analysisClient<
      $Result.GetResult<Prisma.$market_analysisPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Market_analyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {market_analysisFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Market_analyses
     * const market_analyses = await prisma.market_analysis.findMany()
     *
     * // Get first 10 Market_analyses
     * const market_analyses = await prisma.market_analysis.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const market_analysisWithIdOnly = await prisma.market_analysis.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends market_analysisFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, market_analysisFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$market_analysisPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Market_analysis.
     * @param {market_analysisCreateArgs} args - Arguments to create a Market_analysis.
     * @example
     * // Create one Market_analysis
     * const Market_analysis = await prisma.market_analysis.create({
     *   data: {
     *     // ... data to create a Market_analysis
     *   }
     * })
     *
     **/
    create<T extends market_analysisCreateArgs<ExtArgs>>(
      args: SelectSubset<T, market_analysisCreateArgs<ExtArgs>>,
    ): Prisma__market_analysisClient<
      $Result.GetResult<Prisma.$market_analysisPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Market_analyses.
     *     @param {market_analysisCreateManyArgs} args - Arguments to create many Market_analyses.
     *     @example
     *     // Create many Market_analyses
     *     const market_analysis = await prisma.market_analysis.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends market_analysisCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, market_analysisCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Market_analysis.
     * @param {market_analysisDeleteArgs} args - Arguments to delete one Market_analysis.
     * @example
     * // Delete one Market_analysis
     * const Market_analysis = await prisma.market_analysis.delete({
     *   where: {
     *     // ... filter to delete one Market_analysis
     *   }
     * })
     *
     **/
    delete<T extends market_analysisDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, market_analysisDeleteArgs<ExtArgs>>,
    ): Prisma__market_analysisClient<
      $Result.GetResult<Prisma.$market_analysisPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Market_analysis.
     * @param {market_analysisUpdateArgs} args - Arguments to update one Market_analysis.
     * @example
     * // Update one Market_analysis
     * const market_analysis = await prisma.market_analysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends market_analysisUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, market_analysisUpdateArgs<ExtArgs>>,
    ): Prisma__market_analysisClient<
      $Result.GetResult<Prisma.$market_analysisPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Market_analyses.
     * @param {market_analysisDeleteManyArgs} args - Arguments to filter Market_analyses to delete.
     * @example
     * // Delete a few Market_analyses
     * const { count } = await prisma.market_analysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends market_analysisDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, market_analysisDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Market_analyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {market_analysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Market_analyses
     * const market_analysis = await prisma.market_analysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends market_analysisUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, market_analysisUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Market_analysis.
     * @param {market_analysisUpsertArgs} args - Arguments to update or create a Market_analysis.
     * @example
     * // Update or create a Market_analysis
     * const market_analysis = await prisma.market_analysis.upsert({
     *   create: {
     *     // ... data to create a Market_analysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Market_analysis we want to update
     *   }
     * })
     **/
    upsert<T extends market_analysisUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, market_analysisUpsertArgs<ExtArgs>>,
    ): Prisma__market_analysisClient<
      $Result.GetResult<Prisma.$market_analysisPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Market_analyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {market_analysisCountArgs} args - Arguments to filter Market_analyses to count.
     * @example
     * // Count the number of Market_analyses
     * const count = await prisma.market_analysis.count({
     *   where: {
     *     // ... the filter for the Market_analyses we want to count
     *   }
     * })
     **/
    count<T extends market_analysisCountArgs>(
      args?: Subset<T, market_analysisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Market_analysisCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Market_analysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Market_analysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Market_analysisAggregateArgs>(
      args: Subset<T, Market_analysisAggregateArgs>,
    ): Prisma.PrismaPromise<GetMarket_analysisAggregateType<T>>;

    /**
     * Group by Market_analysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {market_analysisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends market_analysisGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: market_analysisGroupByArgs['orderBy'] }
        : { orderBy?: market_analysisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, market_analysisGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetMarket_analysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the market_analysis model
     */
    readonly fields: market_analysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for market_analysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__market_analysisClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the market_analysis model
   */
  interface market_analysisFieldRefs {
    readonly id: FieldRef<'market_analysis', 'String'>;
    readonly analyst_id: FieldRef<'market_analysis', 'String'>;
    readonly gold_type: FieldRef<'market_analysis', 'String'>;
    readonly analysis_date: FieldRef<'market_analysis', 'DateTime'>;
    readonly predicted_price: FieldRef<'market_analysis', 'Int'>;
    readonly actual_price: FieldRef<'market_analysis', 'Int'>;
    readonly accuracy: FieldRef<'market_analysis', 'Int'>;
    readonly created_at: FieldRef<'market_analysis', 'DateTime'>;
    readonly updated_at: FieldRef<'market_analysis', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * market_analysis findUnique
   */
  export type market_analysisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the market_analysis
     */
    select?: market_analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: market_analysisInclude<ExtArgs> | null;
    /**
     * Filter, which market_analysis to fetch.
     */
    where: market_analysisWhereUniqueInput;
  };

  /**
   * market_analysis findUniqueOrThrow
   */
  export type market_analysisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the market_analysis
       */
      select?: market_analysisSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: market_analysisInclude<ExtArgs> | null;
      /**
       * Filter, which market_analysis to fetch.
       */
      where: market_analysisWhereUniqueInput;
    };

  /**
   * market_analysis findFirst
   */
  export type market_analysisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the market_analysis
     */
    select?: market_analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: market_analysisInclude<ExtArgs> | null;
    /**
     * Filter, which market_analysis to fetch.
     */
    where?: market_analysisWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of market_analyses to fetch.
     */
    orderBy?: market_analysisOrderByWithRelationInput | market_analysisOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for market_analyses.
     */
    cursor?: market_analysisWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` market_analyses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` market_analyses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of market_analyses.
     */
    distinct?: Market_analysisScalarFieldEnum | Market_analysisScalarFieldEnum[];
  };

  /**
   * market_analysis findFirstOrThrow
   */
  export type market_analysisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the market_analysis
       */
      select?: market_analysisSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: market_analysisInclude<ExtArgs> | null;
      /**
       * Filter, which market_analysis to fetch.
       */
      where?: market_analysisWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of market_analyses to fetch.
       */
      orderBy?: market_analysisOrderByWithRelationInput | market_analysisOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for market_analyses.
       */
      cursor?: market_analysisWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` market_analyses from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` market_analyses.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of market_analyses.
       */
      distinct?: Market_analysisScalarFieldEnum | Market_analysisScalarFieldEnum[];
    };

  /**
   * market_analysis findMany
   */
  export type market_analysisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the market_analysis
     */
    select?: market_analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: market_analysisInclude<ExtArgs> | null;
    /**
     * Filter, which market_analyses to fetch.
     */
    where?: market_analysisWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of market_analyses to fetch.
     */
    orderBy?: market_analysisOrderByWithRelationInput | market_analysisOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing market_analyses.
     */
    cursor?: market_analysisWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` market_analyses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` market_analyses.
     */
    skip?: number;
    distinct?: Market_analysisScalarFieldEnum | Market_analysisScalarFieldEnum[];
  };

  /**
   * market_analysis create
   */
  export type market_analysisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the market_analysis
     */
    select?: market_analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: market_analysisInclude<ExtArgs> | null;
    /**
     * The data needed to create a market_analysis.
     */
    data: XOR<market_analysisCreateInput, market_analysisUncheckedCreateInput>;
  };

  /**
   * market_analysis createMany
   */
  export type market_analysisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many market_analyses.
     */
    data: market_analysisCreateManyInput | market_analysisCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * market_analysis update
   */
  export type market_analysisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the market_analysis
     */
    select?: market_analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: market_analysisInclude<ExtArgs> | null;
    /**
     * The data needed to update a market_analysis.
     */
    data: XOR<market_analysisUpdateInput, market_analysisUncheckedUpdateInput>;
    /**
     * Choose, which market_analysis to update.
     */
    where: market_analysisWhereUniqueInput;
  };

  /**
   * market_analysis updateMany
   */
  export type market_analysisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update market_analyses.
     */
    data: XOR<market_analysisUpdateManyMutationInput, market_analysisUncheckedUpdateManyInput>;
    /**
     * Filter which market_analyses to update
     */
    where?: market_analysisWhereInput;
  };

  /**
   * market_analysis upsert
   */
  export type market_analysisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the market_analysis
     */
    select?: market_analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: market_analysisInclude<ExtArgs> | null;
    /**
     * The filter to search for the market_analysis to update in case it exists.
     */
    where: market_analysisWhereUniqueInput;
    /**
     * In case the market_analysis found by the `where` argument doesn't exist, create a new market_analysis with this data.
     */
    create: XOR<market_analysisCreateInput, market_analysisUncheckedCreateInput>;
    /**
     * In case the market_analysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<market_analysisUpdateInput, market_analysisUncheckedUpdateInput>;
  };

  /**
   * market_analysis delete
   */
  export type market_analysisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the market_analysis
     */
    select?: market_analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: market_analysisInclude<ExtArgs> | null;
    /**
     * Filter which market_analysis to delete.
     */
    where: market_analysisWhereUniqueInput;
  };

  /**
   * market_analysis deleteMany
   */
  export type market_analysisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which market_analyses to delete
     */
    where?: market_analysisWhereInput;
  };

  /**
   * market_analysis without action
   */
  export type market_analysisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the market_analysis
     */
    select?: market_analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: market_analysisInclude<ExtArgs> | null;
  };

  /**
   * Model owner
   */

  export type AggregateOwner = {
    _count: OwnerCountAggregateOutputType | null;
    _avg: OwnerAvgAggregateOutputType | null;
    _sum: OwnerSumAggregateOutputType | null;
    _min: OwnerMinAggregateOutputType | null;
    _max: OwnerMaxAggregateOutputType | null;
  };

  export type OwnerAvgAggregateOutputType = {
    ownership_percentage: number | null;
  };

  export type OwnerSumAggregateOutputType = {
    ownership_percentage: number | null;
  };

  export type OwnerMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    company_id: string | null;
    ownership_percentage: number | null;
    start_date: Date | null;
    end_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OwnerMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    company_id: string | null;
    ownership_percentage: number | null;
    start_date: Date | null;
    end_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OwnerCountAggregateOutputType = {
    id: number;
    user_id: number;
    company_id: number;
    ownership_percentage: number;
    start_date: number;
    end_date: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type OwnerAvgAggregateInputType = {
    ownership_percentage?: true;
  };

  export type OwnerSumAggregateInputType = {
    ownership_percentage?: true;
  };

  export type OwnerMinAggregateInputType = {
    id?: true;
    user_id?: true;
    company_id?: true;
    ownership_percentage?: true;
    start_date?: true;
    end_date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OwnerMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    company_id?: true;
    ownership_percentage?: true;
    start_date?: true;
    end_date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OwnerCountAggregateInputType = {
    id?: true;
    user_id?: true;
    company_id?: true;
    ownership_percentage?: true;
    start_date?: true;
    end_date?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type OwnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which owner to aggregate.
     */
    where?: ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of owners to fetch.
     */
    orderBy?: ownerOrderByWithRelationInput | ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned owners
     **/
    _count?: true | OwnerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: OwnerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: OwnerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OwnerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OwnerMaxAggregateInputType;
  };

  export type GetOwnerAggregateType<T extends OwnerAggregateArgs> = {
    [P in keyof T & keyof AggregateOwner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwner[P]>
      : GetScalarType<T[P], AggregateOwner[P]>;
  };

  export type ownerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ownerWhereInput;
    orderBy?: ownerOrderByWithAggregationInput | ownerOrderByWithAggregationInput[];
    by: OwnerScalarFieldEnum[] | OwnerScalarFieldEnum;
    having?: ownerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OwnerCountAggregateInputType | true;
    _avg?: OwnerAvgAggregateInputType;
    _sum?: OwnerSumAggregateInputType;
    _min?: OwnerMinAggregateInputType;
    _max?: OwnerMaxAggregateInputType;
  };

  export type OwnerGroupByOutputType = {
    id: string;
    user_id: string;
    company_id: string;
    ownership_percentage: number | null;
    start_date: Date;
    end_date: Date | null;
    created_at: Date;
    updated_at: Date;
    _count: OwnerCountAggregateOutputType | null;
    _avg: OwnerAvgAggregateOutputType | null;
    _sum: OwnerSumAggregateOutputType | null;
    _min: OwnerMinAggregateOutputType | null;
    _max: OwnerMaxAggregateOutputType | null;
  };

  type GetOwnerGroupByPayload<T extends ownerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OwnerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OwnerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OwnerGroupByOutputType[P]>
          : GetScalarType<T[P], OwnerGroupByOutputType[P]>;
      }
    >
  >;

  export type ownerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      company_id?: boolean;
      ownership_percentage?: boolean;
      start_date?: boolean;
      end_date?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      company?: boolean | companyDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['owner']
  >;

  export type ownerSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    company_id?: boolean;
    ownership_percentage?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type ownerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $ownerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'owner';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        company_id: string;
        ownership_percentage: number | null;
        start_date: Date;
        end_date: Date | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['owner']
    >;
    composites: {};
  };

  type ownerGetPayload<S extends boolean | null | undefined | ownerDefaultArgs> = $Result.GetResult<
    Prisma.$ownerPayload,
    S
  >;

  type ownerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    ownerFindManyArgs,
    'select' | 'include'
  > & {
    select?: OwnerCountAggregateInputType | true;
  };

  export interface ownerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['owner']; meta: { name: 'owner' } };
    /**
     * Find zero or one Owner that matches the filter.
     * @param {ownerFindUniqueArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends ownerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ownerFindUniqueArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Owner that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {ownerFindUniqueOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends ownerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ownerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Owner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownerFindFirstArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends ownerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ownerFindFirstArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Owner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownerFindFirstOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends ownerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ownerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Owners
     * const owners = await prisma.owner.findMany()
     *
     * // Get first 10 Owners
     * const owners = await prisma.owner.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const ownerWithIdOnly = await prisma.owner.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends ownerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ownerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Owner.
     * @param {ownerCreateArgs} args - Arguments to create a Owner.
     * @example
     * // Create one Owner
     * const Owner = await prisma.owner.create({
     *   data: {
     *     // ... data to create a Owner
     *   }
     * })
     *
     **/
    create<T extends ownerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ownerCreateArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Owners.
     *     @param {ownerCreateManyArgs} args - Arguments to create many Owners.
     *     @example
     *     // Create many Owners
     *     const owner = await prisma.owner.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends ownerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ownerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Owner.
     * @param {ownerDeleteArgs} args - Arguments to delete one Owner.
     * @example
     * // Delete one Owner
     * const Owner = await prisma.owner.delete({
     *   where: {
     *     // ... filter to delete one Owner
     *   }
     * })
     *
     **/
    delete<T extends ownerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ownerDeleteArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Owner.
     * @param {ownerUpdateArgs} args - Arguments to update one Owner.
     * @example
     * // Update one Owner
     * const owner = await prisma.owner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends ownerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ownerUpdateArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Owners.
     * @param {ownerDeleteManyArgs} args - Arguments to filter Owners to delete.
     * @example
     * // Delete a few Owners
     * const { count } = await prisma.owner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends ownerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ownerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends ownerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ownerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Owner.
     * @param {ownerUpsertArgs} args - Arguments to update or create a Owner.
     * @example
     * // Update or create a Owner
     * const owner = await prisma.owner.upsert({
     *   create: {
     *     // ... data to create a Owner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Owner we want to update
     *   }
     * })
     **/
    upsert<T extends ownerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ownerUpsertArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownerCountArgs} args - Arguments to filter Owners to count.
     * @example
     * // Count the number of Owners
     * const count = await prisma.owner.count({
     *   where: {
     *     // ... the filter for the Owners we want to count
     *   }
     * })
     **/
    count<T extends ownerCountArgs>(
      args?: Subset<T, ownerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OwnerAggregateArgs>(
      args: Subset<T, OwnerAggregateArgs>,
    ): Prisma.PrismaPromise<GetOwnerAggregateType<T>>;

    /**
     * Group by Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ownerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ownerGroupByArgs['orderBy'] }
        : { orderBy?: ownerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, ownerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOwnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the owner model
     */
    readonly fields: ownerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for owner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ownerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the owner model
   */
  interface ownerFieldRefs {
    readonly id: FieldRef<'owner', 'String'>;
    readonly user_id: FieldRef<'owner', 'String'>;
    readonly company_id: FieldRef<'owner', 'String'>;
    readonly ownership_percentage: FieldRef<'owner', 'Int'>;
    readonly start_date: FieldRef<'owner', 'DateTime'>;
    readonly end_date: FieldRef<'owner', 'DateTime'>;
    readonly created_at: FieldRef<'owner', 'DateTime'>;
    readonly updated_at: FieldRef<'owner', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * owner findUnique
   */
  export type ownerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * Filter, which owner to fetch.
     */
    where: ownerWhereUniqueInput;
  };

  /**
   * owner findUniqueOrThrow
   */
  export type ownerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * Filter, which owner to fetch.
     */
    where: ownerWhereUniqueInput;
  };

  /**
   * owner findFirst
   */
  export type ownerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * Filter, which owner to fetch.
     */
    where?: ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of owners to fetch.
     */
    orderBy?: ownerOrderByWithRelationInput | ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for owners.
     */
    cursor?: ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[];
  };

  /**
   * owner findFirstOrThrow
   */
  export type ownerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * Filter, which owner to fetch.
     */
    where?: ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of owners to fetch.
     */
    orderBy?: ownerOrderByWithRelationInput | ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for owners.
     */
    cursor?: ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[];
  };

  /**
   * owner findMany
   */
  export type ownerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * Filter, which owners to fetch.
     */
    where?: ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of owners to fetch.
     */
    orderBy?: ownerOrderByWithRelationInput | ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing owners.
     */
    cursor?: ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` owners.
     */
    skip?: number;
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[];
  };

  /**
   * owner create
   */
  export type ownerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * The data needed to create a owner.
     */
    data: XOR<ownerCreateInput, ownerUncheckedCreateInput>;
  };

  /**
   * owner createMany
   */
  export type ownerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many owners.
     */
    data: ownerCreateManyInput | ownerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * owner update
   */
  export type ownerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * The data needed to update a owner.
     */
    data: XOR<ownerUpdateInput, ownerUncheckedUpdateInput>;
    /**
     * Choose, which owner to update.
     */
    where: ownerWhereUniqueInput;
  };

  /**
   * owner updateMany
   */
  export type ownerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update owners.
     */
    data: XOR<ownerUpdateManyMutationInput, ownerUncheckedUpdateManyInput>;
    /**
     * Filter which owners to update
     */
    where?: ownerWhereInput;
  };

  /**
   * owner upsert
   */
  export type ownerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * The filter to search for the owner to update in case it exists.
     */
    where: ownerWhereUniqueInput;
    /**
     * In case the owner found by the `where` argument doesn't exist, create a new owner with this data.
     */
    create: XOR<ownerCreateInput, ownerUncheckedCreateInput>;
    /**
     * In case the owner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ownerUpdateInput, ownerUncheckedUpdateInput>;
  };

  /**
   * owner delete
   */
  export type ownerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * Filter which owner to delete.
     */
    where: ownerWhereUniqueInput;
  };

  /**
   * owner deleteMany
   */
  export type ownerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which owners to delete
     */
    where?: ownerWhereInput;
  };

  /**
   * owner without action
   */
  export type ownerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      company?: boolean | user$companyArgs<ExtArgs>;
      gold_trade?: boolean | user$gold_tradeArgs<ExtArgs>;
      market_analysis?: boolean | user$market_analysisArgs<ExtArgs>;
      owner?: boolean | user$ownerArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | user$companyArgs<ExtArgs>;
    gold_trade?: boolean | user$gold_tradeArgs<ExtArgs>;
    market_analysis?: boolean | user$market_analysisArgs<ExtArgs>;
    owner?: boolean | user$ownerArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>[];
      gold_trade: Prisma.$gold_tradePayload<ExtArgs>[];
      market_analysis: Prisma.$market_analysisPayload<ExtArgs>[];
      owner: Prisma.$ownerPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends user$companyArgs<ExtArgs> = {}>(
      args?: Subset<T, user$companyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'> | Null>;

    gold_trade<T extends user$gold_tradeArgs<ExtArgs> = {}>(
      args?: Subset<T, user$gold_tradeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gold_tradePayload<ExtArgs>, T, 'findMany'> | Null>;

    market_analysis<T extends user$market_analysisArgs<ExtArgs> = {}>(
      args?: Subset<T, user$market_analysisArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$market_analysisPayload<ExtArgs>, T, 'findMany'> | Null>;

    owner<T extends user$ownerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$ownerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.company
   */
  export type user$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    where?: companyWhereInput;
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    cursor?: companyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * user.gold_trade
   */
  export type user$gold_tradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gold_trade
     */
    select?: gold_tradeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gold_tradeInclude<ExtArgs> | null;
    where?: gold_tradeWhereInput;
    orderBy?: gold_tradeOrderByWithRelationInput | gold_tradeOrderByWithRelationInput[];
    cursor?: gold_tradeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Gold_tradeScalarFieldEnum | Gold_tradeScalarFieldEnum[];
  };

  /**
   * user.market_analysis
   */
  export type user$market_analysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the market_analysis
     */
    select?: market_analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: market_analysisInclude<ExtArgs> | null;
    where?: market_analysisWhereInput;
    orderBy?: market_analysisOrderByWithRelationInput | market_analysisOrderByWithRelationInput[];
    cursor?: market_analysisWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Market_analysisScalarFieldEnum | Market_analysisScalarFieldEnum[];
  };

  /**
   * user.owner
   */
  export type user$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    where?: ownerWhereInput;
    orderBy?: ownerOrderByWithRelationInput | ownerOrderByWithRelationInput[];
    cursor?: ownerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    established_at: 'established_at';
    country: 'country';
    city: 'city';
    address: 'address';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const Gold_inventoryScalarFieldEnum: {
    id: 'id';
    company_id: 'company_id';
    gold_type: 'gold_type';
    quantity: 'quantity';
    acquisition_date: 'acquisition_date';
    acquisition_price: 'acquisition_price';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Gold_inventoryScalarFieldEnum =
    (typeof Gold_inventoryScalarFieldEnum)[keyof typeof Gold_inventoryScalarFieldEnum];

  export const Gold_tradeScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    company_id: 'company_id';
    gold_type: 'gold_type';
    quantity: 'quantity';
    trade_date: 'trade_date';
    trade_price: 'trade_price';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Gold_tradeScalarFieldEnum = (typeof Gold_tradeScalarFieldEnum)[keyof typeof Gold_tradeScalarFieldEnum];

  export const Market_analysisScalarFieldEnum: {
    id: 'id';
    analyst_id: 'analyst_id';
    gold_type: 'gold_type';
    analysis_date: 'analysis_date';
    predicted_price: 'predicted_price';
    actual_price: 'actual_price';
    accuracy: 'accuracy';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Market_analysisScalarFieldEnum =
    (typeof Market_analysisScalarFieldEnum)[keyof typeof Market_analysisScalarFieldEnum];

  export const OwnerScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    company_id: 'company_id';
    ownership_percentage: 'ownership_percentage';
    start_date: 'start_date';
    end_date: 'end_date';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type OwnerScalarFieldEnum = (typeof OwnerScalarFieldEnum)[keyof typeof OwnerScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    established_at?: DateTimeNullableFilter<'company'> | Date | string | null;
    country?: StringNullableFilter<'company'> | string | null;
    city?: StringNullableFilter<'company'> | string | null;
    address?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    gold_inventory?: Gold_inventoryListRelationFilter;
    gold_trade?: Gold_tradeListRelationFilter;
    owner?: OwnerListRelationFilter;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    established_at?: SortOrderInput | SortOrder;
    country?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
    gold_inventory?: gold_inventoryOrderByRelationAggregateInput;
    gold_trade?: gold_tradeOrderByRelationAggregateInput;
    owner?: ownerOrderByRelationAggregateInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      established_at?: DateTimeNullableFilter<'company'> | Date | string | null;
      country?: StringNullableFilter<'company'> | string | null;
      city?: StringNullableFilter<'company'> | string | null;
      address?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      user_id?: UuidFilter<'company'> | string;
      tenant_id?: StringFilter<'company'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      gold_inventory?: Gold_inventoryListRelationFilter;
      gold_trade?: Gold_tradeListRelationFilter;
      owner?: OwnerListRelationFilter;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    established_at?: SortOrderInput | SortOrder;
    country?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    established_at?: DateTimeNullableWithAggregatesFilter<'company'> | Date | string | null;
    country?: StringNullableWithAggregatesFilter<'company'> | string | null;
    city?: StringNullableWithAggregatesFilter<'company'> | string | null;
    address?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'company'> | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type gold_inventoryWhereInput = {
    AND?: gold_inventoryWhereInput | gold_inventoryWhereInput[];
    OR?: gold_inventoryWhereInput[];
    NOT?: gold_inventoryWhereInput | gold_inventoryWhereInput[];
    id?: UuidFilter<'gold_inventory'> | string;
    company_id?: UuidFilter<'gold_inventory'> | string;
    gold_type?: StringNullableFilter<'gold_inventory'> | string | null;
    quantity?: IntNullableFilter<'gold_inventory'> | number | null;
    acquisition_date?: DateTimeFilter<'gold_inventory'> | Date | string;
    acquisition_price?: IntNullableFilter<'gold_inventory'> | number | null;
    created_at?: DateTimeFilter<'gold_inventory'> | Date | string;
    updated_at?: DateTimeFilter<'gold_inventory'> | Date | string;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
  };

  export type gold_inventoryOrderByWithRelationInput = {
    id?: SortOrder;
    company_id?: SortOrder;
    gold_type?: SortOrderInput | SortOrder;
    quantity?: SortOrderInput | SortOrder;
    acquisition_date?: SortOrder;
    acquisition_price?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByWithRelationInput;
  };

  export type gold_inventoryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: gold_inventoryWhereInput | gold_inventoryWhereInput[];
      OR?: gold_inventoryWhereInput[];
      NOT?: gold_inventoryWhereInput | gold_inventoryWhereInput[];
      company_id?: UuidFilter<'gold_inventory'> | string;
      gold_type?: StringNullableFilter<'gold_inventory'> | string | null;
      quantity?: IntNullableFilter<'gold_inventory'> | number | null;
      acquisition_date?: DateTimeFilter<'gold_inventory'> | Date | string;
      acquisition_price?: IntNullableFilter<'gold_inventory'> | number | null;
      created_at?: DateTimeFilter<'gold_inventory'> | Date | string;
      updated_at?: DateTimeFilter<'gold_inventory'> | Date | string;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
    },
    'id'
  >;

  export type gold_inventoryOrderByWithAggregationInput = {
    id?: SortOrder;
    company_id?: SortOrder;
    gold_type?: SortOrderInput | SortOrder;
    quantity?: SortOrderInput | SortOrder;
    acquisition_date?: SortOrder;
    acquisition_price?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: gold_inventoryCountOrderByAggregateInput;
    _avg?: gold_inventoryAvgOrderByAggregateInput;
    _max?: gold_inventoryMaxOrderByAggregateInput;
    _min?: gold_inventoryMinOrderByAggregateInput;
    _sum?: gold_inventorySumOrderByAggregateInput;
  };

  export type gold_inventoryScalarWhereWithAggregatesInput = {
    AND?: gold_inventoryScalarWhereWithAggregatesInput | gold_inventoryScalarWhereWithAggregatesInput[];
    OR?: gold_inventoryScalarWhereWithAggregatesInput[];
    NOT?: gold_inventoryScalarWhereWithAggregatesInput | gold_inventoryScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'gold_inventory'> | string;
    company_id?: UuidWithAggregatesFilter<'gold_inventory'> | string;
    gold_type?: StringNullableWithAggregatesFilter<'gold_inventory'> | string | null;
    quantity?: IntNullableWithAggregatesFilter<'gold_inventory'> | number | null;
    acquisition_date?: DateTimeWithAggregatesFilter<'gold_inventory'> | Date | string;
    acquisition_price?: IntNullableWithAggregatesFilter<'gold_inventory'> | number | null;
    created_at?: DateTimeWithAggregatesFilter<'gold_inventory'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'gold_inventory'> | Date | string;
  };

  export type gold_tradeWhereInput = {
    AND?: gold_tradeWhereInput | gold_tradeWhereInput[];
    OR?: gold_tradeWhereInput[];
    NOT?: gold_tradeWhereInput | gold_tradeWhereInput[];
    id?: UuidFilter<'gold_trade'> | string;
    user_id?: UuidFilter<'gold_trade'> | string;
    company_id?: UuidFilter<'gold_trade'> | string;
    gold_type?: StringNullableFilter<'gold_trade'> | string | null;
    quantity?: IntNullableFilter<'gold_trade'> | number | null;
    trade_date?: DateTimeFilter<'gold_trade'> | Date | string;
    trade_price?: IntNullableFilter<'gold_trade'> | number | null;
    created_at?: DateTimeFilter<'gold_trade'> | Date | string;
    updated_at?: DateTimeFilter<'gold_trade'> | Date | string;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type gold_tradeOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    gold_type?: SortOrderInput | SortOrder;
    quantity?: SortOrderInput | SortOrder;
    trade_date?: SortOrder;
    trade_price?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type gold_tradeWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: gold_tradeWhereInput | gold_tradeWhereInput[];
      OR?: gold_tradeWhereInput[];
      NOT?: gold_tradeWhereInput | gold_tradeWhereInput[];
      user_id?: UuidFilter<'gold_trade'> | string;
      company_id?: UuidFilter<'gold_trade'> | string;
      gold_type?: StringNullableFilter<'gold_trade'> | string | null;
      quantity?: IntNullableFilter<'gold_trade'> | number | null;
      trade_date?: DateTimeFilter<'gold_trade'> | Date | string;
      trade_price?: IntNullableFilter<'gold_trade'> | number | null;
      created_at?: DateTimeFilter<'gold_trade'> | Date | string;
      updated_at?: DateTimeFilter<'gold_trade'> | Date | string;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type gold_tradeOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    gold_type?: SortOrderInput | SortOrder;
    quantity?: SortOrderInput | SortOrder;
    trade_date?: SortOrder;
    trade_price?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: gold_tradeCountOrderByAggregateInput;
    _avg?: gold_tradeAvgOrderByAggregateInput;
    _max?: gold_tradeMaxOrderByAggregateInput;
    _min?: gold_tradeMinOrderByAggregateInput;
    _sum?: gold_tradeSumOrderByAggregateInput;
  };

  export type gold_tradeScalarWhereWithAggregatesInput = {
    AND?: gold_tradeScalarWhereWithAggregatesInput | gold_tradeScalarWhereWithAggregatesInput[];
    OR?: gold_tradeScalarWhereWithAggregatesInput[];
    NOT?: gold_tradeScalarWhereWithAggregatesInput | gold_tradeScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'gold_trade'> | string;
    user_id?: UuidWithAggregatesFilter<'gold_trade'> | string;
    company_id?: UuidWithAggregatesFilter<'gold_trade'> | string;
    gold_type?: StringNullableWithAggregatesFilter<'gold_trade'> | string | null;
    quantity?: IntNullableWithAggregatesFilter<'gold_trade'> | number | null;
    trade_date?: DateTimeWithAggregatesFilter<'gold_trade'> | Date | string;
    trade_price?: IntNullableWithAggregatesFilter<'gold_trade'> | number | null;
    created_at?: DateTimeWithAggregatesFilter<'gold_trade'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'gold_trade'> | Date | string;
  };

  export type market_analysisWhereInput = {
    AND?: market_analysisWhereInput | market_analysisWhereInput[];
    OR?: market_analysisWhereInput[];
    NOT?: market_analysisWhereInput | market_analysisWhereInput[];
    id?: UuidFilter<'market_analysis'> | string;
    analyst_id?: UuidFilter<'market_analysis'> | string;
    gold_type?: StringNullableFilter<'market_analysis'> | string | null;
    analysis_date?: DateTimeFilter<'market_analysis'> | Date | string;
    predicted_price?: IntNullableFilter<'market_analysis'> | number | null;
    actual_price?: IntNullableFilter<'market_analysis'> | number | null;
    accuracy?: IntNullableFilter<'market_analysis'> | number | null;
    created_at?: DateTimeFilter<'market_analysis'> | Date | string;
    updated_at?: DateTimeFilter<'market_analysis'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type market_analysisOrderByWithRelationInput = {
    id?: SortOrder;
    analyst_id?: SortOrder;
    gold_type?: SortOrderInput | SortOrder;
    analysis_date?: SortOrder;
    predicted_price?: SortOrderInput | SortOrder;
    actual_price?: SortOrderInput | SortOrder;
    accuracy?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type market_analysisWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: market_analysisWhereInput | market_analysisWhereInput[];
      OR?: market_analysisWhereInput[];
      NOT?: market_analysisWhereInput | market_analysisWhereInput[];
      analyst_id?: UuidFilter<'market_analysis'> | string;
      gold_type?: StringNullableFilter<'market_analysis'> | string | null;
      analysis_date?: DateTimeFilter<'market_analysis'> | Date | string;
      predicted_price?: IntNullableFilter<'market_analysis'> | number | null;
      actual_price?: IntNullableFilter<'market_analysis'> | number | null;
      accuracy?: IntNullableFilter<'market_analysis'> | number | null;
      created_at?: DateTimeFilter<'market_analysis'> | Date | string;
      updated_at?: DateTimeFilter<'market_analysis'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type market_analysisOrderByWithAggregationInput = {
    id?: SortOrder;
    analyst_id?: SortOrder;
    gold_type?: SortOrderInput | SortOrder;
    analysis_date?: SortOrder;
    predicted_price?: SortOrderInput | SortOrder;
    actual_price?: SortOrderInput | SortOrder;
    accuracy?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: market_analysisCountOrderByAggregateInput;
    _avg?: market_analysisAvgOrderByAggregateInput;
    _max?: market_analysisMaxOrderByAggregateInput;
    _min?: market_analysisMinOrderByAggregateInput;
    _sum?: market_analysisSumOrderByAggregateInput;
  };

  export type market_analysisScalarWhereWithAggregatesInput = {
    AND?: market_analysisScalarWhereWithAggregatesInput | market_analysisScalarWhereWithAggregatesInput[];
    OR?: market_analysisScalarWhereWithAggregatesInput[];
    NOT?: market_analysisScalarWhereWithAggregatesInput | market_analysisScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'market_analysis'> | string;
    analyst_id?: UuidWithAggregatesFilter<'market_analysis'> | string;
    gold_type?: StringNullableWithAggregatesFilter<'market_analysis'> | string | null;
    analysis_date?: DateTimeWithAggregatesFilter<'market_analysis'> | Date | string;
    predicted_price?: IntNullableWithAggregatesFilter<'market_analysis'> | number | null;
    actual_price?: IntNullableWithAggregatesFilter<'market_analysis'> | number | null;
    accuracy?: IntNullableWithAggregatesFilter<'market_analysis'> | number | null;
    created_at?: DateTimeWithAggregatesFilter<'market_analysis'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'market_analysis'> | Date | string;
  };

  export type ownerWhereInput = {
    AND?: ownerWhereInput | ownerWhereInput[];
    OR?: ownerWhereInput[];
    NOT?: ownerWhereInput | ownerWhereInput[];
    id?: UuidFilter<'owner'> | string;
    user_id?: UuidFilter<'owner'> | string;
    company_id?: UuidFilter<'owner'> | string;
    ownership_percentage?: IntNullableFilter<'owner'> | number | null;
    start_date?: DateTimeFilter<'owner'> | Date | string;
    end_date?: DateTimeNullableFilter<'owner'> | Date | string | null;
    created_at?: DateTimeFilter<'owner'> | Date | string;
    updated_at?: DateTimeFilter<'owner'> | Date | string;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type ownerOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    ownership_percentage?: SortOrderInput | SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type ownerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ownerWhereInput | ownerWhereInput[];
      OR?: ownerWhereInput[];
      NOT?: ownerWhereInput | ownerWhereInput[];
      user_id?: UuidFilter<'owner'> | string;
      company_id?: UuidFilter<'owner'> | string;
      ownership_percentage?: IntNullableFilter<'owner'> | number | null;
      start_date?: DateTimeFilter<'owner'> | Date | string;
      end_date?: DateTimeNullableFilter<'owner'> | Date | string | null;
      created_at?: DateTimeFilter<'owner'> | Date | string;
      updated_at?: DateTimeFilter<'owner'> | Date | string;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type ownerOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    ownership_percentage?: SortOrderInput | SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: ownerCountOrderByAggregateInput;
    _avg?: ownerAvgOrderByAggregateInput;
    _max?: ownerMaxOrderByAggregateInput;
    _min?: ownerMinOrderByAggregateInput;
    _sum?: ownerSumOrderByAggregateInput;
  };

  export type ownerScalarWhereWithAggregatesInput = {
    AND?: ownerScalarWhereWithAggregatesInput | ownerScalarWhereWithAggregatesInput[];
    OR?: ownerScalarWhereWithAggregatesInput[];
    NOT?: ownerScalarWhereWithAggregatesInput | ownerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'owner'> | string;
    user_id?: UuidWithAggregatesFilter<'owner'> | string;
    company_id?: UuidWithAggregatesFilter<'owner'> | string;
    ownership_percentage?: IntNullableWithAggregatesFilter<'owner'> | number | null;
    start_date?: DateTimeWithAggregatesFilter<'owner'> | Date | string;
    end_date?: DateTimeNullableWithAggregatesFilter<'owner'> | Date | string | null;
    created_at?: DateTimeWithAggregatesFilter<'owner'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'owner'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    company?: CompanyListRelationFilter;
    gold_trade?: Gold_tradeListRelationFilter;
    market_analysis?: Market_analysisListRelationFilter;
    owner?: OwnerListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByRelationAggregateInput;
    gold_trade?: gold_tradeOrderByRelationAggregateInput;
    market_analysis?: market_analysisOrderByRelationAggregateInput;
    owner?: ownerOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      company?: CompanyListRelationFilter;
      gold_trade?: Gold_tradeListRelationFilter;
      market_analysis?: Market_analysisListRelationFilter;
      owner?: OwnerListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    established_at?: Date | string | null;
    country?: string | null;
    city?: string | null;
    address?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
    gold_inventory?: gold_inventoryCreateNestedManyWithoutCompanyInput;
    gold_trade?: gold_tradeCreateNestedManyWithoutCompanyInput;
    owner?: ownerCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    established_at?: Date | string | null;
    country?: string | null;
    city?: string | null;
    address?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    gold_inventory?: gold_inventoryUncheckedCreateNestedManyWithoutCompanyInput;
    gold_trade?: gold_tradeUncheckedCreateNestedManyWithoutCompanyInput;
    owner?: ownerUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    established_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
    gold_inventory?: gold_inventoryUpdateManyWithoutCompanyNestedInput;
    gold_trade?: gold_tradeUpdateManyWithoutCompanyNestedInput;
    owner?: ownerUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    established_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    gold_inventory?: gold_inventoryUncheckedUpdateManyWithoutCompanyNestedInput;
    gold_trade?: gold_tradeUncheckedUpdateManyWithoutCompanyNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    established_at?: Date | string | null;
    country?: string | null;
    city?: string | null;
    address?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    established_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    established_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type gold_inventoryCreateInput = {
    id?: string;
    gold_type?: string | null;
    quantity?: number | null;
    acquisition_date?: Date | string;
    acquisition_price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutGold_inventoryInput;
  };

  export type gold_inventoryUncheckedCreateInput = {
    id?: string;
    company_id: string;
    gold_type?: string | null;
    quantity?: number | null;
    acquisition_date?: Date | string;
    acquisition_price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type gold_inventoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    gold_type?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    acquisition_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    acquisition_price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutGold_inventoryNestedInput;
  };

  export type gold_inventoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    gold_type?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    acquisition_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    acquisition_price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type gold_inventoryCreateManyInput = {
    id?: string;
    company_id: string;
    gold_type?: string | null;
    quantity?: number | null;
    acquisition_date?: Date | string;
    acquisition_price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type gold_inventoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    gold_type?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    acquisition_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    acquisition_price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type gold_inventoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    gold_type?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    acquisition_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    acquisition_price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type gold_tradeCreateInput = {
    id?: string;
    gold_type?: string | null;
    quantity?: number | null;
    trade_date?: Date | string;
    trade_price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutGold_tradeInput;
    user: userCreateNestedOneWithoutGold_tradeInput;
  };

  export type gold_tradeUncheckedCreateInput = {
    id?: string;
    user_id: string;
    company_id: string;
    gold_type?: string | null;
    quantity?: number | null;
    trade_date?: Date | string;
    trade_price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type gold_tradeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    gold_type?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    trade_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    trade_price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutGold_tradeNestedInput;
    user?: userUpdateOneRequiredWithoutGold_tradeNestedInput;
  };

  export type gold_tradeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    gold_type?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    trade_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    trade_price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type gold_tradeCreateManyInput = {
    id?: string;
    user_id: string;
    company_id: string;
    gold_type?: string | null;
    quantity?: number | null;
    trade_date?: Date | string;
    trade_price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type gold_tradeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    gold_type?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    trade_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    trade_price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type gold_tradeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    gold_type?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    trade_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    trade_price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type market_analysisCreateInput = {
    id?: string;
    gold_type?: string | null;
    analysis_date?: Date | string;
    predicted_price?: number | null;
    actual_price?: number | null;
    accuracy?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutMarket_analysisInput;
  };

  export type market_analysisUncheckedCreateInput = {
    id?: string;
    analyst_id: string;
    gold_type?: string | null;
    analysis_date?: Date | string;
    predicted_price?: number | null;
    actual_price?: number | null;
    accuracy?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type market_analysisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    gold_type?: NullableStringFieldUpdateOperationsInput | string | null;
    analysis_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    predicted_price?: NullableIntFieldUpdateOperationsInput | number | null;
    actual_price?: NullableIntFieldUpdateOperationsInput | number | null;
    accuracy?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutMarket_analysisNestedInput;
  };

  export type market_analysisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    analyst_id?: StringFieldUpdateOperationsInput | string;
    gold_type?: NullableStringFieldUpdateOperationsInput | string | null;
    analysis_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    predicted_price?: NullableIntFieldUpdateOperationsInput | number | null;
    actual_price?: NullableIntFieldUpdateOperationsInput | number | null;
    accuracy?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type market_analysisCreateManyInput = {
    id?: string;
    analyst_id: string;
    gold_type?: string | null;
    analysis_date?: Date | string;
    predicted_price?: number | null;
    actual_price?: number | null;
    accuracy?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type market_analysisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    gold_type?: NullableStringFieldUpdateOperationsInput | string | null;
    analysis_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    predicted_price?: NullableIntFieldUpdateOperationsInput | number | null;
    actual_price?: NullableIntFieldUpdateOperationsInput | number | null;
    accuracy?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type market_analysisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    analyst_id?: StringFieldUpdateOperationsInput | string;
    gold_type?: NullableStringFieldUpdateOperationsInput | string | null;
    analysis_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    predicted_price?: NullableIntFieldUpdateOperationsInput | number | null;
    actual_price?: NullableIntFieldUpdateOperationsInput | number | null;
    accuracy?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerCreateInput = {
    id?: string;
    ownership_percentage?: number | null;
    start_date?: Date | string;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutOwnerInput;
    user: userCreateNestedOneWithoutOwnerInput;
  };

  export type ownerUncheckedCreateInput = {
    id?: string;
    user_id: string;
    company_id: string;
    ownership_percentage?: number | null;
    start_date?: Date | string;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ownerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    ownership_percentage?: NullableIntFieldUpdateOperationsInput | number | null;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutOwnerNestedInput;
    user?: userUpdateOneRequiredWithoutOwnerNestedInput;
  };

  export type ownerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    ownership_percentage?: NullableIntFieldUpdateOperationsInput | number | null;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerCreateManyInput = {
    id?: string;
    user_id: string;
    company_id: string;
    ownership_percentage?: number | null;
    start_date?: Date | string;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ownerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    ownership_percentage?: NullableIntFieldUpdateOperationsInput | number | null;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    ownership_percentage?: NullableIntFieldUpdateOperationsInput | number | null;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    gold_trade?: gold_tradeCreateNestedManyWithoutUserInput;
    market_analysis?: market_analysisCreateNestedManyWithoutUserInput;
    owner?: ownerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    gold_trade?: gold_tradeUncheckedCreateNestedManyWithoutUserInput;
    market_analysis?: market_analysisUncheckedCreateNestedManyWithoutUserInput;
    owner?: ownerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    gold_trade?: gold_tradeUpdateManyWithoutUserNestedInput;
    market_analysis?: market_analysisUpdateManyWithoutUserNestedInput;
    owner?: ownerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    gold_trade?: gold_tradeUncheckedUpdateManyWithoutUserNestedInput;
    market_analysis?: market_analysisUncheckedUpdateManyWithoutUserNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type Gold_inventoryListRelationFilter = {
    every?: gold_inventoryWhereInput;
    some?: gold_inventoryWhereInput;
    none?: gold_inventoryWhereInput;
  };

  export type Gold_tradeListRelationFilter = {
    every?: gold_tradeWhereInput;
    some?: gold_tradeWhereInput;
    none?: gold_tradeWhereInput;
  };

  export type OwnerListRelationFilter = {
    every?: ownerWhereInput;
    some?: ownerWhereInput;
    none?: ownerWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type gold_inventoryOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type gold_tradeOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ownerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    established_at?: SortOrder;
    country?: SortOrder;
    city?: SortOrder;
    address?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    established_at?: SortOrder;
    country?: SortOrder;
    city?: SortOrder;
    address?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    established_at?: SortOrder;
    country?: SortOrder;
    city?: SortOrder;
    address?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type CompanyRelationFilter = {
    is?: companyWhereInput;
    isNot?: companyWhereInput;
  };

  export type gold_inventoryCountOrderByAggregateInput = {
    id?: SortOrder;
    company_id?: SortOrder;
    gold_type?: SortOrder;
    quantity?: SortOrder;
    acquisition_date?: SortOrder;
    acquisition_price?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type gold_inventoryAvgOrderByAggregateInput = {
    quantity?: SortOrder;
    acquisition_price?: SortOrder;
  };

  export type gold_inventoryMaxOrderByAggregateInput = {
    id?: SortOrder;
    company_id?: SortOrder;
    gold_type?: SortOrder;
    quantity?: SortOrder;
    acquisition_date?: SortOrder;
    acquisition_price?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type gold_inventoryMinOrderByAggregateInput = {
    id?: SortOrder;
    company_id?: SortOrder;
    gold_type?: SortOrder;
    quantity?: SortOrder;
    acquisition_date?: SortOrder;
    acquisition_price?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type gold_inventorySumOrderByAggregateInput = {
    quantity?: SortOrder;
    acquisition_price?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type gold_tradeCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    gold_type?: SortOrder;
    quantity?: SortOrder;
    trade_date?: SortOrder;
    trade_price?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type gold_tradeAvgOrderByAggregateInput = {
    quantity?: SortOrder;
    trade_price?: SortOrder;
  };

  export type gold_tradeMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    gold_type?: SortOrder;
    quantity?: SortOrder;
    trade_date?: SortOrder;
    trade_price?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type gold_tradeMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    gold_type?: SortOrder;
    quantity?: SortOrder;
    trade_date?: SortOrder;
    trade_price?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type gold_tradeSumOrderByAggregateInput = {
    quantity?: SortOrder;
    trade_price?: SortOrder;
  };

  export type market_analysisCountOrderByAggregateInput = {
    id?: SortOrder;
    analyst_id?: SortOrder;
    gold_type?: SortOrder;
    analysis_date?: SortOrder;
    predicted_price?: SortOrder;
    actual_price?: SortOrder;
    accuracy?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type market_analysisAvgOrderByAggregateInput = {
    predicted_price?: SortOrder;
    actual_price?: SortOrder;
    accuracy?: SortOrder;
  };

  export type market_analysisMaxOrderByAggregateInput = {
    id?: SortOrder;
    analyst_id?: SortOrder;
    gold_type?: SortOrder;
    analysis_date?: SortOrder;
    predicted_price?: SortOrder;
    actual_price?: SortOrder;
    accuracy?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type market_analysisMinOrderByAggregateInput = {
    id?: SortOrder;
    analyst_id?: SortOrder;
    gold_type?: SortOrder;
    analysis_date?: SortOrder;
    predicted_price?: SortOrder;
    actual_price?: SortOrder;
    accuracy?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type market_analysisSumOrderByAggregateInput = {
    predicted_price?: SortOrder;
    actual_price?: SortOrder;
    accuracy?: SortOrder;
  };

  export type ownerCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    ownership_percentage?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ownerAvgOrderByAggregateInput = {
    ownership_percentage?: SortOrder;
  };

  export type ownerMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    ownership_percentage?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ownerMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    ownership_percentage?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ownerSumOrderByAggregateInput = {
    ownership_percentage?: SortOrder;
  };

  export type CompanyListRelationFilter = {
    every?: companyWhereInput;
    some?: companyWhereInput;
    none?: companyWhereInput;
  };

  export type Market_analysisListRelationFilter = {
    every?: market_analysisWhereInput;
    some?: market_analysisWhereInput;
    none?: market_analysisWhereInput;
  };

  export type companyOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type market_analysisOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCreateNestedOneWithoutCompanyInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    connect?: userWhereUniqueInput;
  };

  export type gold_inventoryCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<gold_inventoryCreateWithoutCompanyInput, gold_inventoryUncheckedCreateWithoutCompanyInput>
      | gold_inventoryCreateWithoutCompanyInput[]
      | gold_inventoryUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | gold_inventoryCreateOrConnectWithoutCompanyInput
      | gold_inventoryCreateOrConnectWithoutCompanyInput[];
    createMany?: gold_inventoryCreateManyCompanyInputEnvelope;
    connect?: gold_inventoryWhereUniqueInput | gold_inventoryWhereUniqueInput[];
  };

  export type gold_tradeCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<gold_tradeCreateWithoutCompanyInput, gold_tradeUncheckedCreateWithoutCompanyInput>
      | gold_tradeCreateWithoutCompanyInput[]
      | gold_tradeUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: gold_tradeCreateOrConnectWithoutCompanyInput | gold_tradeCreateOrConnectWithoutCompanyInput[];
    createMany?: gold_tradeCreateManyCompanyInputEnvelope;
    connect?: gold_tradeWhereUniqueInput | gold_tradeWhereUniqueInput[];
  };

  export type ownerCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<ownerCreateWithoutCompanyInput, ownerUncheckedCreateWithoutCompanyInput>
      | ownerCreateWithoutCompanyInput[]
      | ownerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutCompanyInput | ownerCreateOrConnectWithoutCompanyInput[];
    createMany?: ownerCreateManyCompanyInputEnvelope;
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
  };

  export type gold_inventoryUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<gold_inventoryCreateWithoutCompanyInput, gold_inventoryUncheckedCreateWithoutCompanyInput>
      | gold_inventoryCreateWithoutCompanyInput[]
      | gold_inventoryUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | gold_inventoryCreateOrConnectWithoutCompanyInput
      | gold_inventoryCreateOrConnectWithoutCompanyInput[];
    createMany?: gold_inventoryCreateManyCompanyInputEnvelope;
    connect?: gold_inventoryWhereUniqueInput | gold_inventoryWhereUniqueInput[];
  };

  export type gold_tradeUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<gold_tradeCreateWithoutCompanyInput, gold_tradeUncheckedCreateWithoutCompanyInput>
      | gold_tradeCreateWithoutCompanyInput[]
      | gold_tradeUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: gold_tradeCreateOrConnectWithoutCompanyInput | gold_tradeCreateOrConnectWithoutCompanyInput[];
    createMany?: gold_tradeCreateManyCompanyInputEnvelope;
    connect?: gold_tradeWhereUniqueInput | gold_tradeWhereUniqueInput[];
  };

  export type ownerUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<ownerCreateWithoutCompanyInput, ownerUncheckedCreateWithoutCompanyInput>
      | ownerCreateWithoutCompanyInput[]
      | ownerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutCompanyInput | ownerCreateOrConnectWithoutCompanyInput[];
    createMany?: ownerCreateManyCompanyInputEnvelope;
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    upsert?: userUpsertWithoutCompanyInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCompanyInput, userUpdateWithoutCompanyInput>,
      userUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type gold_inventoryUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<gold_inventoryCreateWithoutCompanyInput, gold_inventoryUncheckedCreateWithoutCompanyInput>
      | gold_inventoryCreateWithoutCompanyInput[]
      | gold_inventoryUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | gold_inventoryCreateOrConnectWithoutCompanyInput
      | gold_inventoryCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | gold_inventoryUpsertWithWhereUniqueWithoutCompanyInput
      | gold_inventoryUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: gold_inventoryCreateManyCompanyInputEnvelope;
    set?: gold_inventoryWhereUniqueInput | gold_inventoryWhereUniqueInput[];
    disconnect?: gold_inventoryWhereUniqueInput | gold_inventoryWhereUniqueInput[];
    delete?: gold_inventoryWhereUniqueInput | gold_inventoryWhereUniqueInput[];
    connect?: gold_inventoryWhereUniqueInput | gold_inventoryWhereUniqueInput[];
    update?:
      | gold_inventoryUpdateWithWhereUniqueWithoutCompanyInput
      | gold_inventoryUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | gold_inventoryUpdateManyWithWhereWithoutCompanyInput
      | gold_inventoryUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: gold_inventoryScalarWhereInput | gold_inventoryScalarWhereInput[];
  };

  export type gold_tradeUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<gold_tradeCreateWithoutCompanyInput, gold_tradeUncheckedCreateWithoutCompanyInput>
      | gold_tradeCreateWithoutCompanyInput[]
      | gold_tradeUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: gold_tradeCreateOrConnectWithoutCompanyInput | gold_tradeCreateOrConnectWithoutCompanyInput[];
    upsert?: gold_tradeUpsertWithWhereUniqueWithoutCompanyInput | gold_tradeUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: gold_tradeCreateManyCompanyInputEnvelope;
    set?: gold_tradeWhereUniqueInput | gold_tradeWhereUniqueInput[];
    disconnect?: gold_tradeWhereUniqueInput | gold_tradeWhereUniqueInput[];
    delete?: gold_tradeWhereUniqueInput | gold_tradeWhereUniqueInput[];
    connect?: gold_tradeWhereUniqueInput | gold_tradeWhereUniqueInput[];
    update?: gold_tradeUpdateWithWhereUniqueWithoutCompanyInput | gold_tradeUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: gold_tradeUpdateManyWithWhereWithoutCompanyInput | gold_tradeUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: gold_tradeScalarWhereInput | gold_tradeScalarWhereInput[];
  };

  export type ownerUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<ownerCreateWithoutCompanyInput, ownerUncheckedCreateWithoutCompanyInput>
      | ownerCreateWithoutCompanyInput[]
      | ownerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutCompanyInput | ownerCreateOrConnectWithoutCompanyInput[];
    upsert?: ownerUpsertWithWhereUniqueWithoutCompanyInput | ownerUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: ownerCreateManyCompanyInputEnvelope;
    set?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    disconnect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    delete?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    update?: ownerUpdateWithWhereUniqueWithoutCompanyInput | ownerUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: ownerUpdateManyWithWhereWithoutCompanyInput | ownerUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: ownerScalarWhereInput | ownerScalarWhereInput[];
  };

  export type gold_inventoryUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<gold_inventoryCreateWithoutCompanyInput, gold_inventoryUncheckedCreateWithoutCompanyInput>
      | gold_inventoryCreateWithoutCompanyInput[]
      | gold_inventoryUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | gold_inventoryCreateOrConnectWithoutCompanyInput
      | gold_inventoryCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | gold_inventoryUpsertWithWhereUniqueWithoutCompanyInput
      | gold_inventoryUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: gold_inventoryCreateManyCompanyInputEnvelope;
    set?: gold_inventoryWhereUniqueInput | gold_inventoryWhereUniqueInput[];
    disconnect?: gold_inventoryWhereUniqueInput | gold_inventoryWhereUniqueInput[];
    delete?: gold_inventoryWhereUniqueInput | gold_inventoryWhereUniqueInput[];
    connect?: gold_inventoryWhereUniqueInput | gold_inventoryWhereUniqueInput[];
    update?:
      | gold_inventoryUpdateWithWhereUniqueWithoutCompanyInput
      | gold_inventoryUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | gold_inventoryUpdateManyWithWhereWithoutCompanyInput
      | gold_inventoryUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: gold_inventoryScalarWhereInput | gold_inventoryScalarWhereInput[];
  };

  export type gold_tradeUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<gold_tradeCreateWithoutCompanyInput, gold_tradeUncheckedCreateWithoutCompanyInput>
      | gold_tradeCreateWithoutCompanyInput[]
      | gold_tradeUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: gold_tradeCreateOrConnectWithoutCompanyInput | gold_tradeCreateOrConnectWithoutCompanyInput[];
    upsert?: gold_tradeUpsertWithWhereUniqueWithoutCompanyInput | gold_tradeUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: gold_tradeCreateManyCompanyInputEnvelope;
    set?: gold_tradeWhereUniqueInput | gold_tradeWhereUniqueInput[];
    disconnect?: gold_tradeWhereUniqueInput | gold_tradeWhereUniqueInput[];
    delete?: gold_tradeWhereUniqueInput | gold_tradeWhereUniqueInput[];
    connect?: gold_tradeWhereUniqueInput | gold_tradeWhereUniqueInput[];
    update?: gold_tradeUpdateWithWhereUniqueWithoutCompanyInput | gold_tradeUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: gold_tradeUpdateManyWithWhereWithoutCompanyInput | gold_tradeUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: gold_tradeScalarWhereInput | gold_tradeScalarWhereInput[];
  };

  export type ownerUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<ownerCreateWithoutCompanyInput, ownerUncheckedCreateWithoutCompanyInput>
      | ownerCreateWithoutCompanyInput[]
      | ownerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutCompanyInput | ownerCreateOrConnectWithoutCompanyInput[];
    upsert?: ownerUpsertWithWhereUniqueWithoutCompanyInput | ownerUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: ownerCreateManyCompanyInputEnvelope;
    set?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    disconnect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    delete?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    update?: ownerUpdateWithWhereUniqueWithoutCompanyInput | ownerUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: ownerUpdateManyWithWhereWithoutCompanyInput | ownerUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: ownerScalarWhereInput | ownerScalarWhereInput[];
  };

  export type companyCreateNestedOneWithoutGold_inventoryInput = {
    create?: XOR<companyCreateWithoutGold_inventoryInput, companyUncheckedCreateWithoutGold_inventoryInput>;
    connectOrCreate?: companyCreateOrConnectWithoutGold_inventoryInput;
    connect?: companyWhereUniqueInput;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type companyUpdateOneRequiredWithoutGold_inventoryNestedInput = {
    create?: XOR<companyCreateWithoutGold_inventoryInput, companyUncheckedCreateWithoutGold_inventoryInput>;
    connectOrCreate?: companyCreateOrConnectWithoutGold_inventoryInput;
    upsert?: companyUpsertWithoutGold_inventoryInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutGold_inventoryInput, companyUpdateWithoutGold_inventoryInput>,
      companyUncheckedUpdateWithoutGold_inventoryInput
    >;
  };

  export type companyCreateNestedOneWithoutGold_tradeInput = {
    create?: XOR<companyCreateWithoutGold_tradeInput, companyUncheckedCreateWithoutGold_tradeInput>;
    connectOrCreate?: companyCreateOrConnectWithoutGold_tradeInput;
    connect?: companyWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutGold_tradeInput = {
    create?: XOR<userCreateWithoutGold_tradeInput, userUncheckedCreateWithoutGold_tradeInput>;
    connectOrCreate?: userCreateOrConnectWithoutGold_tradeInput;
    connect?: userWhereUniqueInput;
  };

  export type companyUpdateOneRequiredWithoutGold_tradeNestedInput = {
    create?: XOR<companyCreateWithoutGold_tradeInput, companyUncheckedCreateWithoutGold_tradeInput>;
    connectOrCreate?: companyCreateOrConnectWithoutGold_tradeInput;
    upsert?: companyUpsertWithoutGold_tradeInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutGold_tradeInput, companyUpdateWithoutGold_tradeInput>,
      companyUncheckedUpdateWithoutGold_tradeInput
    >;
  };

  export type userUpdateOneRequiredWithoutGold_tradeNestedInput = {
    create?: XOR<userCreateWithoutGold_tradeInput, userUncheckedCreateWithoutGold_tradeInput>;
    connectOrCreate?: userCreateOrConnectWithoutGold_tradeInput;
    upsert?: userUpsertWithoutGold_tradeInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutGold_tradeInput, userUpdateWithoutGold_tradeInput>,
      userUncheckedUpdateWithoutGold_tradeInput
    >;
  };

  export type userCreateNestedOneWithoutMarket_analysisInput = {
    create?: XOR<userCreateWithoutMarket_analysisInput, userUncheckedCreateWithoutMarket_analysisInput>;
    connectOrCreate?: userCreateOrConnectWithoutMarket_analysisInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutMarket_analysisNestedInput = {
    create?: XOR<userCreateWithoutMarket_analysisInput, userUncheckedCreateWithoutMarket_analysisInput>;
    connectOrCreate?: userCreateOrConnectWithoutMarket_analysisInput;
    upsert?: userUpsertWithoutMarket_analysisInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutMarket_analysisInput, userUpdateWithoutMarket_analysisInput>,
      userUncheckedUpdateWithoutMarket_analysisInput
    >;
  };

  export type companyCreateNestedOneWithoutOwnerInput = {
    create?: XOR<companyCreateWithoutOwnerInput, companyUncheckedCreateWithoutOwnerInput>;
    connectOrCreate?: companyCreateOrConnectWithoutOwnerInput;
    connect?: companyWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutOwnerInput = {
    create?: XOR<userCreateWithoutOwnerInput, userUncheckedCreateWithoutOwnerInput>;
    connectOrCreate?: userCreateOrConnectWithoutOwnerInput;
    connect?: userWhereUniqueInput;
  };

  export type companyUpdateOneRequiredWithoutOwnerNestedInput = {
    create?: XOR<companyCreateWithoutOwnerInput, companyUncheckedCreateWithoutOwnerInput>;
    connectOrCreate?: companyCreateOrConnectWithoutOwnerInput;
    upsert?: companyUpsertWithoutOwnerInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutOwnerInput, companyUpdateWithoutOwnerInput>,
      companyUncheckedUpdateWithoutOwnerInput
    >;
  };

  export type userUpdateOneRequiredWithoutOwnerNestedInput = {
    create?: XOR<userCreateWithoutOwnerInput, userUncheckedCreateWithoutOwnerInput>;
    connectOrCreate?: userCreateOrConnectWithoutOwnerInput;
    upsert?: userUpsertWithoutOwnerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutOwnerInput, userUpdateWithoutOwnerInput>,
      userUncheckedUpdateWithoutOwnerInput
    >;
  };

  export type companyCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type gold_tradeCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<gold_tradeCreateWithoutUserInput, gold_tradeUncheckedCreateWithoutUserInput>
      | gold_tradeCreateWithoutUserInput[]
      | gold_tradeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: gold_tradeCreateOrConnectWithoutUserInput | gold_tradeCreateOrConnectWithoutUserInput[];
    createMany?: gold_tradeCreateManyUserInputEnvelope;
    connect?: gold_tradeWhereUniqueInput | gold_tradeWhereUniqueInput[];
  };

  export type market_analysisCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<market_analysisCreateWithoutUserInput, market_analysisUncheckedCreateWithoutUserInput>
      | market_analysisCreateWithoutUserInput[]
      | market_analysisUncheckedCreateWithoutUserInput[];
    connectOrCreate?: market_analysisCreateOrConnectWithoutUserInput | market_analysisCreateOrConnectWithoutUserInput[];
    createMany?: market_analysisCreateManyUserInputEnvelope;
    connect?: market_analysisWhereUniqueInput | market_analysisWhereUniqueInput[];
  };

  export type ownerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ownerCreateWithoutUserInput, ownerUncheckedCreateWithoutUserInput>
      | ownerCreateWithoutUserInput[]
      | ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutUserInput | ownerCreateOrConnectWithoutUserInput[];
    createMany?: ownerCreateManyUserInputEnvelope;
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
  };

  export type companyUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type gold_tradeUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<gold_tradeCreateWithoutUserInput, gold_tradeUncheckedCreateWithoutUserInput>
      | gold_tradeCreateWithoutUserInput[]
      | gold_tradeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: gold_tradeCreateOrConnectWithoutUserInput | gold_tradeCreateOrConnectWithoutUserInput[];
    createMany?: gold_tradeCreateManyUserInputEnvelope;
    connect?: gold_tradeWhereUniqueInput | gold_tradeWhereUniqueInput[];
  };

  export type market_analysisUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<market_analysisCreateWithoutUserInput, market_analysisUncheckedCreateWithoutUserInput>
      | market_analysisCreateWithoutUserInput[]
      | market_analysisUncheckedCreateWithoutUserInput[];
    connectOrCreate?: market_analysisCreateOrConnectWithoutUserInput | market_analysisCreateOrConnectWithoutUserInput[];
    createMany?: market_analysisCreateManyUserInputEnvelope;
    connect?: market_analysisWhereUniqueInput | market_analysisWhereUniqueInput[];
  };

  export type ownerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ownerCreateWithoutUserInput, ownerUncheckedCreateWithoutUserInput>
      | ownerCreateWithoutUserInput[]
      | ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutUserInput | ownerCreateOrConnectWithoutUserInput[];
    createMany?: ownerCreateManyUserInputEnvelope;
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
  };

  export type companyUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type gold_tradeUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<gold_tradeCreateWithoutUserInput, gold_tradeUncheckedCreateWithoutUserInput>
      | gold_tradeCreateWithoutUserInput[]
      | gold_tradeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: gold_tradeCreateOrConnectWithoutUserInput | gold_tradeCreateOrConnectWithoutUserInput[];
    upsert?: gold_tradeUpsertWithWhereUniqueWithoutUserInput | gold_tradeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: gold_tradeCreateManyUserInputEnvelope;
    set?: gold_tradeWhereUniqueInput | gold_tradeWhereUniqueInput[];
    disconnect?: gold_tradeWhereUniqueInput | gold_tradeWhereUniqueInput[];
    delete?: gold_tradeWhereUniqueInput | gold_tradeWhereUniqueInput[];
    connect?: gold_tradeWhereUniqueInput | gold_tradeWhereUniqueInput[];
    update?: gold_tradeUpdateWithWhereUniqueWithoutUserInput | gold_tradeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: gold_tradeUpdateManyWithWhereWithoutUserInput | gold_tradeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: gold_tradeScalarWhereInput | gold_tradeScalarWhereInput[];
  };

  export type market_analysisUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<market_analysisCreateWithoutUserInput, market_analysisUncheckedCreateWithoutUserInput>
      | market_analysisCreateWithoutUserInput[]
      | market_analysisUncheckedCreateWithoutUserInput[];
    connectOrCreate?: market_analysisCreateOrConnectWithoutUserInput | market_analysisCreateOrConnectWithoutUserInput[];
    upsert?:
      | market_analysisUpsertWithWhereUniqueWithoutUserInput
      | market_analysisUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: market_analysisCreateManyUserInputEnvelope;
    set?: market_analysisWhereUniqueInput | market_analysisWhereUniqueInput[];
    disconnect?: market_analysisWhereUniqueInput | market_analysisWhereUniqueInput[];
    delete?: market_analysisWhereUniqueInput | market_analysisWhereUniqueInput[];
    connect?: market_analysisWhereUniqueInput | market_analysisWhereUniqueInput[];
    update?:
      | market_analysisUpdateWithWhereUniqueWithoutUserInput
      | market_analysisUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | market_analysisUpdateManyWithWhereWithoutUserInput
      | market_analysisUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: market_analysisScalarWhereInput | market_analysisScalarWhereInput[];
  };

  export type ownerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ownerCreateWithoutUserInput, ownerUncheckedCreateWithoutUserInput>
      | ownerCreateWithoutUserInput[]
      | ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutUserInput | ownerCreateOrConnectWithoutUserInput[];
    upsert?: ownerUpsertWithWhereUniqueWithoutUserInput | ownerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ownerCreateManyUserInputEnvelope;
    set?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    disconnect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    delete?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    update?: ownerUpdateWithWhereUniqueWithoutUserInput | ownerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: ownerUpdateManyWithWhereWithoutUserInput | ownerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ownerScalarWhereInput | ownerScalarWhereInput[];
  };

  export type companyUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type gold_tradeUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<gold_tradeCreateWithoutUserInput, gold_tradeUncheckedCreateWithoutUserInput>
      | gold_tradeCreateWithoutUserInput[]
      | gold_tradeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: gold_tradeCreateOrConnectWithoutUserInput | gold_tradeCreateOrConnectWithoutUserInput[];
    upsert?: gold_tradeUpsertWithWhereUniqueWithoutUserInput | gold_tradeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: gold_tradeCreateManyUserInputEnvelope;
    set?: gold_tradeWhereUniqueInput | gold_tradeWhereUniqueInput[];
    disconnect?: gold_tradeWhereUniqueInput | gold_tradeWhereUniqueInput[];
    delete?: gold_tradeWhereUniqueInput | gold_tradeWhereUniqueInput[];
    connect?: gold_tradeWhereUniqueInput | gold_tradeWhereUniqueInput[];
    update?: gold_tradeUpdateWithWhereUniqueWithoutUserInput | gold_tradeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: gold_tradeUpdateManyWithWhereWithoutUserInput | gold_tradeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: gold_tradeScalarWhereInput | gold_tradeScalarWhereInput[];
  };

  export type market_analysisUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<market_analysisCreateWithoutUserInput, market_analysisUncheckedCreateWithoutUserInput>
      | market_analysisCreateWithoutUserInput[]
      | market_analysisUncheckedCreateWithoutUserInput[];
    connectOrCreate?: market_analysisCreateOrConnectWithoutUserInput | market_analysisCreateOrConnectWithoutUserInput[];
    upsert?:
      | market_analysisUpsertWithWhereUniqueWithoutUserInput
      | market_analysisUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: market_analysisCreateManyUserInputEnvelope;
    set?: market_analysisWhereUniqueInput | market_analysisWhereUniqueInput[];
    disconnect?: market_analysisWhereUniqueInput | market_analysisWhereUniqueInput[];
    delete?: market_analysisWhereUniqueInput | market_analysisWhereUniqueInput[];
    connect?: market_analysisWhereUniqueInput | market_analysisWhereUniqueInput[];
    update?:
      | market_analysisUpdateWithWhereUniqueWithoutUserInput
      | market_analysisUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | market_analysisUpdateManyWithWhereWithoutUserInput
      | market_analysisUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: market_analysisScalarWhereInput | market_analysisScalarWhereInput[];
  };

  export type ownerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ownerCreateWithoutUserInput, ownerUncheckedCreateWithoutUserInput>
      | ownerCreateWithoutUserInput[]
      | ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutUserInput | ownerCreateOrConnectWithoutUserInput[];
    upsert?: ownerUpsertWithWhereUniqueWithoutUserInput | ownerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ownerCreateManyUserInputEnvelope;
    set?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    disconnect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    delete?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    update?: ownerUpdateWithWhereUniqueWithoutUserInput | ownerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: ownerUpdateManyWithWhereWithoutUserInput | ownerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ownerScalarWhereInput | ownerScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type userCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    gold_trade?: gold_tradeCreateNestedManyWithoutUserInput;
    market_analysis?: market_analysisCreateNestedManyWithoutUserInput;
    owner?: ownerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    gold_trade?: gold_tradeUncheckedCreateNestedManyWithoutUserInput;
    market_analysis?: market_analysisUncheckedCreateNestedManyWithoutUserInput;
    owner?: ownerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCompanyInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type gold_inventoryCreateWithoutCompanyInput = {
    id?: string;
    gold_type?: string | null;
    quantity?: number | null;
    acquisition_date?: Date | string;
    acquisition_price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type gold_inventoryUncheckedCreateWithoutCompanyInput = {
    id?: string;
    gold_type?: string | null;
    quantity?: number | null;
    acquisition_date?: Date | string;
    acquisition_price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type gold_inventoryCreateOrConnectWithoutCompanyInput = {
    where: gold_inventoryWhereUniqueInput;
    create: XOR<gold_inventoryCreateWithoutCompanyInput, gold_inventoryUncheckedCreateWithoutCompanyInput>;
  };

  export type gold_inventoryCreateManyCompanyInputEnvelope = {
    data: gold_inventoryCreateManyCompanyInput | gold_inventoryCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type gold_tradeCreateWithoutCompanyInput = {
    id?: string;
    gold_type?: string | null;
    quantity?: number | null;
    trade_date?: Date | string;
    trade_price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutGold_tradeInput;
  };

  export type gold_tradeUncheckedCreateWithoutCompanyInput = {
    id?: string;
    user_id: string;
    gold_type?: string | null;
    quantity?: number | null;
    trade_date?: Date | string;
    trade_price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type gold_tradeCreateOrConnectWithoutCompanyInput = {
    where: gold_tradeWhereUniqueInput;
    create: XOR<gold_tradeCreateWithoutCompanyInput, gold_tradeUncheckedCreateWithoutCompanyInput>;
  };

  export type gold_tradeCreateManyCompanyInputEnvelope = {
    data: gold_tradeCreateManyCompanyInput | gold_tradeCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type ownerCreateWithoutCompanyInput = {
    id?: string;
    ownership_percentage?: number | null;
    start_date?: Date | string;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutOwnerInput;
  };

  export type ownerUncheckedCreateWithoutCompanyInput = {
    id?: string;
    user_id: string;
    ownership_percentage?: number | null;
    start_date?: Date | string;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ownerCreateOrConnectWithoutCompanyInput = {
    where: ownerWhereUniqueInput;
    create: XOR<ownerCreateWithoutCompanyInput, ownerUncheckedCreateWithoutCompanyInput>;
  };

  export type ownerCreateManyCompanyInputEnvelope = {
    data: ownerCreateManyCompanyInput | ownerCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutCompanyInput = {
    update: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCompanyInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
  };

  export type userUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    gold_trade?: gold_tradeUpdateManyWithoutUserNestedInput;
    market_analysis?: market_analysisUpdateManyWithoutUserNestedInput;
    owner?: ownerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    gold_trade?: gold_tradeUncheckedUpdateManyWithoutUserNestedInput;
    market_analysis?: market_analysisUncheckedUpdateManyWithoutUserNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type gold_inventoryUpsertWithWhereUniqueWithoutCompanyInput = {
    where: gold_inventoryWhereUniqueInput;
    update: XOR<gold_inventoryUpdateWithoutCompanyInput, gold_inventoryUncheckedUpdateWithoutCompanyInput>;
    create: XOR<gold_inventoryCreateWithoutCompanyInput, gold_inventoryUncheckedCreateWithoutCompanyInput>;
  };

  export type gold_inventoryUpdateWithWhereUniqueWithoutCompanyInput = {
    where: gold_inventoryWhereUniqueInput;
    data: XOR<gold_inventoryUpdateWithoutCompanyInput, gold_inventoryUncheckedUpdateWithoutCompanyInput>;
  };

  export type gold_inventoryUpdateManyWithWhereWithoutCompanyInput = {
    where: gold_inventoryScalarWhereInput;
    data: XOR<gold_inventoryUpdateManyMutationInput, gold_inventoryUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type gold_inventoryScalarWhereInput = {
    AND?: gold_inventoryScalarWhereInput | gold_inventoryScalarWhereInput[];
    OR?: gold_inventoryScalarWhereInput[];
    NOT?: gold_inventoryScalarWhereInput | gold_inventoryScalarWhereInput[];
    id?: UuidFilter<'gold_inventory'> | string;
    company_id?: UuidFilter<'gold_inventory'> | string;
    gold_type?: StringNullableFilter<'gold_inventory'> | string | null;
    quantity?: IntNullableFilter<'gold_inventory'> | number | null;
    acquisition_date?: DateTimeFilter<'gold_inventory'> | Date | string;
    acquisition_price?: IntNullableFilter<'gold_inventory'> | number | null;
    created_at?: DateTimeFilter<'gold_inventory'> | Date | string;
    updated_at?: DateTimeFilter<'gold_inventory'> | Date | string;
  };

  export type gold_tradeUpsertWithWhereUniqueWithoutCompanyInput = {
    where: gold_tradeWhereUniqueInput;
    update: XOR<gold_tradeUpdateWithoutCompanyInput, gold_tradeUncheckedUpdateWithoutCompanyInput>;
    create: XOR<gold_tradeCreateWithoutCompanyInput, gold_tradeUncheckedCreateWithoutCompanyInput>;
  };

  export type gold_tradeUpdateWithWhereUniqueWithoutCompanyInput = {
    where: gold_tradeWhereUniqueInput;
    data: XOR<gold_tradeUpdateWithoutCompanyInput, gold_tradeUncheckedUpdateWithoutCompanyInput>;
  };

  export type gold_tradeUpdateManyWithWhereWithoutCompanyInput = {
    where: gold_tradeScalarWhereInput;
    data: XOR<gold_tradeUpdateManyMutationInput, gold_tradeUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type gold_tradeScalarWhereInput = {
    AND?: gold_tradeScalarWhereInput | gold_tradeScalarWhereInput[];
    OR?: gold_tradeScalarWhereInput[];
    NOT?: gold_tradeScalarWhereInput | gold_tradeScalarWhereInput[];
    id?: UuidFilter<'gold_trade'> | string;
    user_id?: UuidFilter<'gold_trade'> | string;
    company_id?: UuidFilter<'gold_trade'> | string;
    gold_type?: StringNullableFilter<'gold_trade'> | string | null;
    quantity?: IntNullableFilter<'gold_trade'> | number | null;
    trade_date?: DateTimeFilter<'gold_trade'> | Date | string;
    trade_price?: IntNullableFilter<'gold_trade'> | number | null;
    created_at?: DateTimeFilter<'gold_trade'> | Date | string;
    updated_at?: DateTimeFilter<'gold_trade'> | Date | string;
  };

  export type ownerUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ownerWhereUniqueInput;
    update: XOR<ownerUpdateWithoutCompanyInput, ownerUncheckedUpdateWithoutCompanyInput>;
    create: XOR<ownerCreateWithoutCompanyInput, ownerUncheckedCreateWithoutCompanyInput>;
  };

  export type ownerUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ownerWhereUniqueInput;
    data: XOR<ownerUpdateWithoutCompanyInput, ownerUncheckedUpdateWithoutCompanyInput>;
  };

  export type ownerUpdateManyWithWhereWithoutCompanyInput = {
    where: ownerScalarWhereInput;
    data: XOR<ownerUpdateManyMutationInput, ownerUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type ownerScalarWhereInput = {
    AND?: ownerScalarWhereInput | ownerScalarWhereInput[];
    OR?: ownerScalarWhereInput[];
    NOT?: ownerScalarWhereInput | ownerScalarWhereInput[];
    id?: UuidFilter<'owner'> | string;
    user_id?: UuidFilter<'owner'> | string;
    company_id?: UuidFilter<'owner'> | string;
    ownership_percentage?: IntNullableFilter<'owner'> | number | null;
    start_date?: DateTimeFilter<'owner'> | Date | string;
    end_date?: DateTimeNullableFilter<'owner'> | Date | string | null;
    created_at?: DateTimeFilter<'owner'> | Date | string;
    updated_at?: DateTimeFilter<'owner'> | Date | string;
  };

  export type companyCreateWithoutGold_inventoryInput = {
    id?: string;
    description?: string | null;
    established_at?: Date | string | null;
    country?: string | null;
    city?: string | null;
    address?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
    gold_trade?: gold_tradeCreateNestedManyWithoutCompanyInput;
    owner?: ownerCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutGold_inventoryInput = {
    id?: string;
    description?: string | null;
    established_at?: Date | string | null;
    country?: string | null;
    city?: string | null;
    address?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    gold_trade?: gold_tradeUncheckedCreateNestedManyWithoutCompanyInput;
    owner?: ownerUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutGold_inventoryInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutGold_inventoryInput, companyUncheckedCreateWithoutGold_inventoryInput>;
  };

  export type companyUpsertWithoutGold_inventoryInput = {
    update: XOR<companyUpdateWithoutGold_inventoryInput, companyUncheckedUpdateWithoutGold_inventoryInput>;
    create: XOR<companyCreateWithoutGold_inventoryInput, companyUncheckedCreateWithoutGold_inventoryInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutGold_inventoryInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutGold_inventoryInput, companyUncheckedUpdateWithoutGold_inventoryInput>;
  };

  export type companyUpdateWithoutGold_inventoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    established_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
    gold_trade?: gold_tradeUpdateManyWithoutCompanyNestedInput;
    owner?: ownerUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutGold_inventoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    established_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    gold_trade?: gold_tradeUncheckedUpdateManyWithoutCompanyNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateWithoutGold_tradeInput = {
    id?: string;
    description?: string | null;
    established_at?: Date | string | null;
    country?: string | null;
    city?: string | null;
    address?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
    gold_inventory?: gold_inventoryCreateNestedManyWithoutCompanyInput;
    owner?: ownerCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutGold_tradeInput = {
    id?: string;
    description?: string | null;
    established_at?: Date | string | null;
    country?: string | null;
    city?: string | null;
    address?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    gold_inventory?: gold_inventoryUncheckedCreateNestedManyWithoutCompanyInput;
    owner?: ownerUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutGold_tradeInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutGold_tradeInput, companyUncheckedCreateWithoutGold_tradeInput>;
  };

  export type userCreateWithoutGold_tradeInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    market_analysis?: market_analysisCreateNestedManyWithoutUserInput;
    owner?: ownerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutGold_tradeInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    market_analysis?: market_analysisUncheckedCreateNestedManyWithoutUserInput;
    owner?: ownerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutGold_tradeInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutGold_tradeInput, userUncheckedCreateWithoutGold_tradeInput>;
  };

  export type companyUpsertWithoutGold_tradeInput = {
    update: XOR<companyUpdateWithoutGold_tradeInput, companyUncheckedUpdateWithoutGold_tradeInput>;
    create: XOR<companyCreateWithoutGold_tradeInput, companyUncheckedCreateWithoutGold_tradeInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutGold_tradeInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutGold_tradeInput, companyUncheckedUpdateWithoutGold_tradeInput>;
  };

  export type companyUpdateWithoutGold_tradeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    established_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
    gold_inventory?: gold_inventoryUpdateManyWithoutCompanyNestedInput;
    owner?: ownerUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutGold_tradeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    established_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    gold_inventory?: gold_inventoryUncheckedUpdateManyWithoutCompanyNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type userUpsertWithoutGold_tradeInput = {
    update: XOR<userUpdateWithoutGold_tradeInput, userUncheckedUpdateWithoutGold_tradeInput>;
    create: XOR<userCreateWithoutGold_tradeInput, userUncheckedCreateWithoutGold_tradeInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutGold_tradeInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutGold_tradeInput, userUncheckedUpdateWithoutGold_tradeInput>;
  };

  export type userUpdateWithoutGold_tradeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    market_analysis?: market_analysisUpdateManyWithoutUserNestedInput;
    owner?: ownerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutGold_tradeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    market_analysis?: market_analysisUncheckedUpdateManyWithoutUserNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutMarket_analysisInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    gold_trade?: gold_tradeCreateNestedManyWithoutUserInput;
    owner?: ownerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutMarket_analysisInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    gold_trade?: gold_tradeUncheckedCreateNestedManyWithoutUserInput;
    owner?: ownerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutMarket_analysisInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutMarket_analysisInput, userUncheckedCreateWithoutMarket_analysisInput>;
  };

  export type userUpsertWithoutMarket_analysisInput = {
    update: XOR<userUpdateWithoutMarket_analysisInput, userUncheckedUpdateWithoutMarket_analysisInput>;
    create: XOR<userCreateWithoutMarket_analysisInput, userUncheckedCreateWithoutMarket_analysisInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutMarket_analysisInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutMarket_analysisInput, userUncheckedUpdateWithoutMarket_analysisInput>;
  };

  export type userUpdateWithoutMarket_analysisInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    gold_trade?: gold_tradeUpdateManyWithoutUserNestedInput;
    owner?: ownerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutMarket_analysisInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    gold_trade?: gold_tradeUncheckedUpdateManyWithoutUserNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type companyCreateWithoutOwnerInput = {
    id?: string;
    description?: string | null;
    established_at?: Date | string | null;
    country?: string | null;
    city?: string | null;
    address?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
    gold_inventory?: gold_inventoryCreateNestedManyWithoutCompanyInput;
    gold_trade?: gold_tradeCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutOwnerInput = {
    id?: string;
    description?: string | null;
    established_at?: Date | string | null;
    country?: string | null;
    city?: string | null;
    address?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    gold_inventory?: gold_inventoryUncheckedCreateNestedManyWithoutCompanyInput;
    gold_trade?: gold_tradeUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutOwnerInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutOwnerInput, companyUncheckedCreateWithoutOwnerInput>;
  };

  export type userCreateWithoutOwnerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    gold_trade?: gold_tradeCreateNestedManyWithoutUserInput;
    market_analysis?: market_analysisCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutOwnerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    gold_trade?: gold_tradeUncheckedCreateNestedManyWithoutUserInput;
    market_analysis?: market_analysisUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutOwnerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutOwnerInput, userUncheckedCreateWithoutOwnerInput>;
  };

  export type companyUpsertWithoutOwnerInput = {
    update: XOR<companyUpdateWithoutOwnerInput, companyUncheckedUpdateWithoutOwnerInput>;
    create: XOR<companyCreateWithoutOwnerInput, companyUncheckedCreateWithoutOwnerInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutOwnerInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutOwnerInput, companyUncheckedUpdateWithoutOwnerInput>;
  };

  export type companyUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    established_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
    gold_inventory?: gold_inventoryUpdateManyWithoutCompanyNestedInput;
    gold_trade?: gold_tradeUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    established_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    gold_inventory?: gold_inventoryUncheckedUpdateManyWithoutCompanyNestedInput;
    gold_trade?: gold_tradeUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type userUpsertWithoutOwnerInput = {
    update: XOR<userUpdateWithoutOwnerInput, userUncheckedUpdateWithoutOwnerInput>;
    create: XOR<userCreateWithoutOwnerInput, userUncheckedCreateWithoutOwnerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutOwnerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutOwnerInput, userUncheckedUpdateWithoutOwnerInput>;
  };

  export type userUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    gold_trade?: gold_tradeUpdateManyWithoutUserNestedInput;
    market_analysis?: market_analysisUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    gold_trade?: gold_tradeUncheckedUpdateManyWithoutUserNestedInput;
    market_analysis?: market_analysisUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type companyCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    established_at?: Date | string | null;
    country?: string | null;
    city?: string | null;
    address?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    gold_inventory?: gold_inventoryCreateNestedManyWithoutCompanyInput;
    gold_trade?: gold_tradeCreateNestedManyWithoutCompanyInput;
    owner?: ownerCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    established_at?: Date | string | null;
    country?: string | null;
    city?: string | null;
    address?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    gold_inventory?: gold_inventoryUncheckedCreateNestedManyWithoutCompanyInput;
    gold_trade?: gold_tradeUncheckedCreateNestedManyWithoutCompanyInput;
    owner?: ownerUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutUserInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyCreateManyUserInputEnvelope = {
    data: companyCreateManyUserInput | companyCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type gold_tradeCreateWithoutUserInput = {
    id?: string;
    gold_type?: string | null;
    quantity?: number | null;
    trade_date?: Date | string;
    trade_price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutGold_tradeInput;
  };

  export type gold_tradeUncheckedCreateWithoutUserInput = {
    id?: string;
    company_id: string;
    gold_type?: string | null;
    quantity?: number | null;
    trade_date?: Date | string;
    trade_price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type gold_tradeCreateOrConnectWithoutUserInput = {
    where: gold_tradeWhereUniqueInput;
    create: XOR<gold_tradeCreateWithoutUserInput, gold_tradeUncheckedCreateWithoutUserInput>;
  };

  export type gold_tradeCreateManyUserInputEnvelope = {
    data: gold_tradeCreateManyUserInput | gold_tradeCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type market_analysisCreateWithoutUserInput = {
    id?: string;
    gold_type?: string | null;
    analysis_date?: Date | string;
    predicted_price?: number | null;
    actual_price?: number | null;
    accuracy?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type market_analysisUncheckedCreateWithoutUserInput = {
    id?: string;
    gold_type?: string | null;
    analysis_date?: Date | string;
    predicted_price?: number | null;
    actual_price?: number | null;
    accuracy?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type market_analysisCreateOrConnectWithoutUserInput = {
    where: market_analysisWhereUniqueInput;
    create: XOR<market_analysisCreateWithoutUserInput, market_analysisUncheckedCreateWithoutUserInput>;
  };

  export type market_analysisCreateManyUserInputEnvelope = {
    data: market_analysisCreateManyUserInput | market_analysisCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type ownerCreateWithoutUserInput = {
    id?: string;
    ownership_percentage?: number | null;
    start_date?: Date | string;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutOwnerInput;
  };

  export type ownerUncheckedCreateWithoutUserInput = {
    id?: string;
    company_id: string;
    ownership_percentage?: number | null;
    start_date?: Date | string;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ownerCreateOrConnectWithoutUserInput = {
    where: ownerWhereUniqueInput;
    create: XOR<ownerCreateWithoutUserInput, ownerUncheckedCreateWithoutUserInput>;
  };

  export type ownerCreateManyUserInputEnvelope = {
    data: ownerCreateManyUserInput | ownerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type companyUpsertWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    update: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyUpdateWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    data: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
  };

  export type companyUpdateManyWithWhereWithoutUserInput = {
    where: companyScalarWhereInput;
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyScalarWhereInput = {
    AND?: companyScalarWhereInput | companyScalarWhereInput[];
    OR?: companyScalarWhereInput[];
    NOT?: companyScalarWhereInput | companyScalarWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    established_at?: DateTimeNullableFilter<'company'> | Date | string | null;
    country?: StringNullableFilter<'company'> | string | null;
    city?: StringNullableFilter<'company'> | string | null;
    address?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
  };

  export type gold_tradeUpsertWithWhereUniqueWithoutUserInput = {
    where: gold_tradeWhereUniqueInput;
    update: XOR<gold_tradeUpdateWithoutUserInput, gold_tradeUncheckedUpdateWithoutUserInput>;
    create: XOR<gold_tradeCreateWithoutUserInput, gold_tradeUncheckedCreateWithoutUserInput>;
  };

  export type gold_tradeUpdateWithWhereUniqueWithoutUserInput = {
    where: gold_tradeWhereUniqueInput;
    data: XOR<gold_tradeUpdateWithoutUserInput, gold_tradeUncheckedUpdateWithoutUserInput>;
  };

  export type gold_tradeUpdateManyWithWhereWithoutUserInput = {
    where: gold_tradeScalarWhereInput;
    data: XOR<gold_tradeUpdateManyMutationInput, gold_tradeUncheckedUpdateManyWithoutUserInput>;
  };

  export type market_analysisUpsertWithWhereUniqueWithoutUserInput = {
    where: market_analysisWhereUniqueInput;
    update: XOR<market_analysisUpdateWithoutUserInput, market_analysisUncheckedUpdateWithoutUserInput>;
    create: XOR<market_analysisCreateWithoutUserInput, market_analysisUncheckedCreateWithoutUserInput>;
  };

  export type market_analysisUpdateWithWhereUniqueWithoutUserInput = {
    where: market_analysisWhereUniqueInput;
    data: XOR<market_analysisUpdateWithoutUserInput, market_analysisUncheckedUpdateWithoutUserInput>;
  };

  export type market_analysisUpdateManyWithWhereWithoutUserInput = {
    where: market_analysisScalarWhereInput;
    data: XOR<market_analysisUpdateManyMutationInput, market_analysisUncheckedUpdateManyWithoutUserInput>;
  };

  export type market_analysisScalarWhereInput = {
    AND?: market_analysisScalarWhereInput | market_analysisScalarWhereInput[];
    OR?: market_analysisScalarWhereInput[];
    NOT?: market_analysisScalarWhereInput | market_analysisScalarWhereInput[];
    id?: UuidFilter<'market_analysis'> | string;
    analyst_id?: UuidFilter<'market_analysis'> | string;
    gold_type?: StringNullableFilter<'market_analysis'> | string | null;
    analysis_date?: DateTimeFilter<'market_analysis'> | Date | string;
    predicted_price?: IntNullableFilter<'market_analysis'> | number | null;
    actual_price?: IntNullableFilter<'market_analysis'> | number | null;
    accuracy?: IntNullableFilter<'market_analysis'> | number | null;
    created_at?: DateTimeFilter<'market_analysis'> | Date | string;
    updated_at?: DateTimeFilter<'market_analysis'> | Date | string;
  };

  export type ownerUpsertWithWhereUniqueWithoutUserInput = {
    where: ownerWhereUniqueInput;
    update: XOR<ownerUpdateWithoutUserInput, ownerUncheckedUpdateWithoutUserInput>;
    create: XOR<ownerCreateWithoutUserInput, ownerUncheckedCreateWithoutUserInput>;
  };

  export type ownerUpdateWithWhereUniqueWithoutUserInput = {
    where: ownerWhereUniqueInput;
    data: XOR<ownerUpdateWithoutUserInput, ownerUncheckedUpdateWithoutUserInput>;
  };

  export type ownerUpdateManyWithWhereWithoutUserInput = {
    where: ownerScalarWhereInput;
    data: XOR<ownerUpdateManyMutationInput, ownerUncheckedUpdateManyWithoutUserInput>;
  };

  export type gold_inventoryCreateManyCompanyInput = {
    id?: string;
    gold_type?: string | null;
    quantity?: number | null;
    acquisition_date?: Date | string;
    acquisition_price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type gold_tradeCreateManyCompanyInput = {
    id?: string;
    user_id: string;
    gold_type?: string | null;
    quantity?: number | null;
    trade_date?: Date | string;
    trade_price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ownerCreateManyCompanyInput = {
    id?: string;
    user_id: string;
    ownership_percentage?: number | null;
    start_date?: Date | string;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type gold_inventoryUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    gold_type?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    acquisition_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    acquisition_price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type gold_inventoryUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    gold_type?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    acquisition_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    acquisition_price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type gold_inventoryUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    gold_type?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    acquisition_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    acquisition_price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type gold_tradeUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    gold_type?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    trade_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    trade_price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutGold_tradeNestedInput;
  };

  export type gold_tradeUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    gold_type?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    trade_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    trade_price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type gold_tradeUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    gold_type?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    trade_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    trade_price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    ownership_percentage?: NullableIntFieldUpdateOperationsInput | number | null;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutOwnerNestedInput;
  };

  export type ownerUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    ownership_percentage?: NullableIntFieldUpdateOperationsInput | number | null;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    ownership_percentage?: NullableIntFieldUpdateOperationsInput | number | null;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateManyUserInput = {
    id?: string;
    description?: string | null;
    established_at?: Date | string | null;
    country?: string | null;
    city?: string | null;
    address?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type gold_tradeCreateManyUserInput = {
    id?: string;
    company_id: string;
    gold_type?: string | null;
    quantity?: number | null;
    trade_date?: Date | string;
    trade_price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type market_analysisCreateManyUserInput = {
    id?: string;
    gold_type?: string | null;
    analysis_date?: Date | string;
    predicted_price?: number | null;
    actual_price?: number | null;
    accuracy?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ownerCreateManyUserInput = {
    id?: string;
    company_id: string;
    ownership_percentage?: number | null;
    start_date?: Date | string;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    established_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    gold_inventory?: gold_inventoryUpdateManyWithoutCompanyNestedInput;
    gold_trade?: gold_tradeUpdateManyWithoutCompanyNestedInput;
    owner?: ownerUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    established_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    gold_inventory?: gold_inventoryUncheckedUpdateManyWithoutCompanyNestedInput;
    gold_trade?: gold_tradeUncheckedUpdateManyWithoutCompanyNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    established_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type gold_tradeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    gold_type?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    trade_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    trade_price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutGold_tradeNestedInput;
  };

  export type gold_tradeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    gold_type?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    trade_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    trade_price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type gold_tradeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    gold_type?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    trade_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    trade_price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type market_analysisUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    gold_type?: NullableStringFieldUpdateOperationsInput | string | null;
    analysis_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    predicted_price?: NullableIntFieldUpdateOperationsInput | number | null;
    actual_price?: NullableIntFieldUpdateOperationsInput | number | null;
    accuracy?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type market_analysisUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    gold_type?: NullableStringFieldUpdateOperationsInput | string | null;
    analysis_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    predicted_price?: NullableIntFieldUpdateOperationsInput | number | null;
    actual_price?: NullableIntFieldUpdateOperationsInput | number | null;
    accuracy?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type market_analysisUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    gold_type?: NullableStringFieldUpdateOperationsInput | string | null;
    analysis_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    predicted_price?: NullableIntFieldUpdateOperationsInput | number | null;
    actual_price?: NullableIntFieldUpdateOperationsInput | number | null;
    accuracy?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    ownership_percentage?: NullableIntFieldUpdateOperationsInput | number | null;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutOwnerNestedInput;
  };

  export type ownerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    ownership_percentage?: NullableIntFieldUpdateOperationsInput | number | null;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    ownership_percentage?: NullableIntFieldUpdateOperationsInput | number | null;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
   */
  export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use gold_inventoryDefaultArgs instead
   */
  export type gold_inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    gold_inventoryDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use gold_tradeDefaultArgs instead
   */
  export type gold_tradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    gold_tradeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use market_analysisDefaultArgs instead
   */
  export type market_analysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    market_analysisDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ownerDefaultArgs instead
   */
  export type ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ownerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
