CREATE TABLE public."InsiderTrading"
(
    "Symbol"                character varying(10) COLLATE pg_catalog."default" NOT NULL,
    "LastUpdated"           timestamp with time zone NOT NULL,
    "FullName"              character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "ReportedTitle"         character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "FilingDate"            character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "TransactionCode"       character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "Is10b51"               boolean NOT NULL,
    "TransactionShares"     character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "PostShares"            character varying(50) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "insiderTrading_pkey" PRIMARY KEY ("Symbol")
)

CREATE TABLE public."StockDividend"
(
    "Symbol"        character varying(10) COLLATE pg_catalog."default" NOT NULL,
    "LastUpdated"   timestamp with time zone NOT NULL,
    "Amount"        character varying COLLATE pg_catalog."default" NOT NULL,
    "RecordDate"    character varying COLLATE pg_catalog."default" NOT NULL,
    "Flag"          character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "stockDividend_pkey" PRIMARY KEY ("Symbol")
)

CREATE TABLE public."StockList"
(
    "Symbol"            character varying(10) COLLATE pg_catalog."default" NOT NULL,
    "LastUpdated"       timestamp with time zone NOT NULL,
    "LatestPrice"       character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "Change"            character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "ChangePercent"     character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "LatestVolume"      character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "AvgTotalVolume"    character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "PaymentDate"       character varying(50) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "stockData_pkey" PRIMARY KEY ("Symbol")
)

CREATE TABLE public."UserListRel"
(
    "UserUUID"  uuid NOT NULL,
    "ListUUID"  uuid NOT NULL,
    "Rank"      integer NOT NULL,
    "ListName"  character varying(50) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "UserListRel_pkey" PRIMARY KEY ("UserUUID")
)

CREATE TABLE public."UserListRel"
(
    "UserUUID"  uuid NOT NULL,
    "ListUUID"  uuid NOT NULL,
    "Rank"      integer NOT NULL,
    CONSTRAINT "UserListRel_pkey" PRIMARY KEY ("UserUUID")
)

CREATE TABLE public."Users"
(
    "Name"      character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "UserUUID"  uuid NOT NULL,
    CONSTRAINT "Users_pkey" PRIMARY KEY ("UserUUID")
)