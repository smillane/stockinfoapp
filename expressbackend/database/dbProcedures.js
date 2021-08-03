CREATE PROCEDURE StockDividendUpdate (i_Symbol character varying, i_LastUpdated timestamp with time zone, i_Amount character varying, i_RecordDate character varying, i_Flag character varying)
LANGUAGE SQL

AS $$

  UPDATE stockdividend SET LastUpdated = i_LastUpdated, Amount = i_Amount, RecordDate = i_RecordDate, Flag = i_Flag WHERE Symbol = i_Symbol;

$$;


CREATE PROCEDURE InsiderTradingUpdate (i_Symbol character varying, i_LastUpdated timestamp with time zone, i_FullName character varying, i_ReportedTitle character varying, i_FilingDate character varying, i_TransactionCode character varying, i_is10b51 boolean, i_TransactionShares character varying, i_PostShares character varying)
LANGUAGE SQL

AS $$

  UPDATE InsiderTrading SET LastUpdated = i_LastUpdated, FullName = i_FullName, ReportedTitle = i_ReportedTitle, FilingDate = i_FilingDate, TransactionCode = i_TransactionCode, is10b51 = i_is10b51, TransactionShares = i_TransactionShares, PostShares = i_PostShares WHERE Symbol = i_Symbol;

$$;


CREATE PROCEDURE StockListUpdate (i_Symbol character varying, i_LastUpdated timestamp with time zone, i_LatestPrice character varying, i_Change character varying, i_ChangePercent character varying, i_LatestVolume character varying, i_AvgTotalVolume character varying, i_PaymentDate character varying)
LANGUAGE SQL

AS $$

  UPDATE StockList SET LastUpdated = i_LastUpdated, LatestPrice = i_LatestPrice, Change = i_Change, ChangePercent = i_ChangePercent, LatestVolume = i_LatestVolume, AvgTotalVolume = i_AvgTotalVolume, PaymentDate = i_PaymentDate WHERE Symbol = i_Symbol;

$$;


CREATE PROCEDURE UserListRelUpdate (i_UserUUID uuid, i_ListUUID uuid, i_Rank integer, i_ListName character varying(50))
LANGUAGE SQL

AS $$

  UPDATE UserListRel SET Rank = i_Rank, ListName = i_ListName WHERE UserUUID = i_UserUUID AND ListUUID = i_ListUUID;

$$;





CREATE PROCEDURE CreateUser (i_UserUUID uuid, i_Name character varying(50))
LANGUAGE SQL

AS $$

  INSERT INTO Users(Name, UserUUID)  values(i_Name, i_UserUUID);

$$;


CREATE PROCEDURE CreateUserListRel (i_UserUUID uuid, i_ListUUID uuid, i_Rank integer, i_ListName character varying(50))
LANGUAGE SQL

AS $$

  INSERT INTO UserListRel(Rank, ListName, UserUUID, ListUUID) values(i_Rank, i_ListName, i_UserUUID, i_ListUUID);

$$;


CREATE PROCEDURE CreateStockList (i_Symbol character varying, i_LastUpdated timestamp with time zone, i_LatestPrice character varying, i_Change character varying, i_ChangePercent character varying, i_LatestVolume character varying, i_AvgTotalVolume character varying, i_PaymentDate character varying)
LANGUAGE SQL

AS $$

  INSERT INTO StockList(Symbol, LastUpdated, LatestPrice, Change, ChangePercent, LatestVolume, AvgTotalVolume, PaymentDate) values(i_Symbol, i_LastUpdated, i_LatestPrice, i_Change, i_ChangePercent, i_LatestVolume, i_AvgTotalVolume, i_PaymentDate);

$$;


CREATE PROCEDURE CreateInsiderTrading (i_Symbol character varying, i_LastUpdated timestamp with time zone, i_FullName character varying, i_ReportedTitle character varying, i_FilingDate character varying, i_TransactionCode character varying, i_is10b51 boolean, i_TransactionShares character varying, i_PostShares character varying)
LANGUAGE SQL

AS $$

  INSERT INTO InsiderTrading(Symbol, LastUpdated, FullName, ReportedTitle, FilingDate, TransactionCode, is10b51, TransactionShares, PostShares) values(i_Symbol, i_LastUpdated, i_FullName, i_ReportedTitle, i_FilingDate, i_TransactionCode, i_is10b51, i_TransactionShares, i_PostShares);

$$;


CREATE PROCEDURE CreateStockDividend (i_Symbol character varying, i_LastUpdated timestamp with time zone, i_Amount character varying, i_RecordDate character varying, i_Flag character varying);
LANGUAGE SQL

AS $$

  INSERT INTO StockDividend(Symbol, LastUpdated, Amount, RecordDate, Flag) values(i_Symbol, i_LastUpdated, i_Amount, i_RecordDate, i_Flag);

$$;





CREATE PROCEDURE QueryStockList (i_Symbol character varying)
LANGUAGE SQL

AS $$

  SELECT * FROM StockList WHERE Symbol = i_Symbol;

$$;


CREATE PROCEDURE QueryInsiderTrading (i_Symbol character varying)
LANGUAGE SQL

AS $$

  SELECT * FROM InsiderTrading WHERE Symbol = i_Symbol ORDER BY FilingDate DESC;

$$;


CREATE PROCEDURE QueryStockDividend (i_Symbol character varying)
LANGUAGE SQL

AS $$

  SELECT * FROM StockDividend WHERE Symbol = i_Symbol;

$$;


CREATE PROCEDURE QueryUserListRel (i_UserUUID uuid)
LANGUAGE SQL

AS $$

  SELECT * FROM UserListRel WHERE UserUUID = i_UserUUID ORDER BY Rank ASC;

$$;


CREATE PROCEDURE QueryUserStockRel (i_UserUUID uuid, i_ListUUID uuid)
LANGUAGE SQL

AS $$

  SELECT * FROM UserStockRel 
  FULL OUTER JOIN StockList ON UserStockRel.Symbol = StockList.Symbol
  WHERE UserUUID = i_UserUUID AND ListUUID = i_ListUUID ORDER BY Rank ASC;

$$;