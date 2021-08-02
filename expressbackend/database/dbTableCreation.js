CREATE TABLE InsiderTrading
(
    Symbol                character varying(10)NOT NULL,
    LastUpdated           timestamp with time zone NOT NULL,
    FullName              character varying(50)NOT NULL,
    ReportedTitle         character varying(50)NOT NULL,
    FilingDate            character varying(50)NOT NULL,
    TransactionCode       character varying(50)NOT NULL,
    Is10b51               boolean NOT NULL,
    TransactionShares     character varying(50)NOT NULL,
    PostShares            character varying(50)NOT NULL,
    PRIMARY KEY (Symbol)
);

CREATE TABLE StockDividend
(
    Symbol          character varying(10),
    LastUpdated		timestamp with time zone,
    Amount        	character varying,
    RecordDate    	character varying,
    Flag          	character varying,
    PRIMARY KEY (Symbol)
);

CREATE TABLE StockList
(
    Symbol            character varying(10)NOT NULL,
    LastUpdated       timestamp with time zone NOT NULL,
    LatestPrice       character varying(50)NOT NULL,
    Change            character varying(50)NOT NULL,
    ChangePercent     character varying(50)NOT NULL,
    LatestVolume      character varying(50)NOT NULL,
    AvgTotalVolume    character varying(50)NOT NULL,
    PaymentDate       character varying(50)NOT NULL,
    PRIMARY KEY (Symbol)
);

CREATE TABLE UserListRel
(
    UserUUID  uuid NOT NULL,
    ListUUID  uuid NOT NULL,
    Rank      integer NOT NULL,
    ListName  character varying(50) NOT NULL,
    PRIMARY KEY (UserUUID)
);

CREATE TABLE Users
(
    Name      character varying(50) NOT NULL,
    UserUUID  uuid NOT NULL,
    PRIMARY KEY (UserUUID)
);