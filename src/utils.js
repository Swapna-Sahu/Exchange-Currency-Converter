let fiat_fiat = ["AUD","BGN","BRL","CAD","CHF","CNY","CZK","DKK","EUR","GBP","HKD","HRK","HUF","IDR","ILS","INR","ISK","JPY","KRW","MXN","MYR","NOK","NZD","PHP","PLN","RON","RUB","SEK","SGD","THB","TRY","USD","ZAR"];
let fiat_crypto = ["USD", "AUD", "BRL", "CUP", "EUR", "GHST", "INK", "IDR", "PAB", "GBP", "RON", "RUB", "ZAR", "KRW", "VES", "THB", "TRY", "UAH"];
let crypto = ["ETH", "LTC", "BTC","BNB", "NEO", "BCC", "GAS", "USDT", "HSR", "MCO", "WTC", "LRC", "QTUM", "YOYO", "OMG", "ZRX", "STRAT", "SNGLS", "BQX", "KNC", "FUN", "SNM", "IOTA", "LINK", "XVG", "SALT", "MDA", "MTL", "SUB", "EOS", "SNT", "ETC", "MTH", "ENG", "DNT", "ZEC", "BNT", "AST", "DASH", "OAX", "ICN", "BTG", "EVX", "REQ", "VIB", "TRX", "POWR", "ARK", "XRP", "MOD", "ENJ", "STORJ", "VEN", "KMD", "RCN", "NULS", "RDN", "XMR", "DLT", "AMB", "BAT", "BCPT", "ARN", "GVT", "CDT", "GXS", "POE", "QSP", "BTS", "XZC", "LSK", "TNT", "FUEL", "MANA", "BCD", "DGD", "ADX", "ADA", "PPT", "CMT", "XLM", "CND", "LEND", "WABI", "TNB", "WAVES", "GTO", "ICX", "OST", "ELF", "AION", "NEBL", "BRD", "EDO", "WINGS", "NAV", "LUN", "TRIG", "APPC", "VIBE", "RLC", "INS", "PIVX", "IOST", "CHAT", "STEEM", "NANO", "VIA", "BLZ", "AE", "RPX", "NCASH", "POA", "ZIL", "ONT", "STORM", "XEM", "WAN", "WPR", "QLC", "SYS", "GRS", "CLOAK", "GNT", "LOOM", "BCN", "REP", "TUSD", "TUSD", "ZEN", "SKY", "CVC", "THETA", "IOTX", "QKC", "AGI", "NXS", "DATA", "SC", "NPXS", "KEY", "NAS", "MFT", "DENT", "ARDR", "HOT", "VET", "DOCK", "POLY", "PHX", "HC", "GO", "PAX", "RVN", "DCR", "MITH", "BCHABC", "BCHSV", "PAX", "REN", "USDC", "BTT", "USDS", "ONG", "FET", "CELR", "MATIC", "ATOM", "PHB", "TFUEL", "ONE", "FTM", "BBTC", "ALGO", "ERD", "DOGE", "DUSK", "ANKR", "WIN", "COS", "COCOS", "TOMO", "PERL", "CHZ", "BAND", "BUSD", "BEAM", "XTZ", "HBAR", "NKN", "STX", "KAVA", "NGN", "ARPA", "CTXC", "BCH", "TROY", "VITE", "FTT", "OGN", "DREP", "TCT", "WRX", "LTO", "MBL", "COTI", "STPT", "BKRW", "SOL", "IDRT", "CTSI", "HIVE", "CHR", "UPUSDT", "DOWNUSDT", "MDT", "STMX", "PNT", "GBP", "DGB", "UAH", "COMP", "BIDR", "SXP", "SNX", "IRIS", "MKR", "DAI", "RUNE", "FIO", "AVA", "BAL", "YFI", "DAI", "JST", "SRM", "ANT", "CRV", "SAND", "OCEAN", "NMR", "DOT", "LUNA", "IDEX", "RSR", "PAXG", "WNXM", "TRB", "BZRX", "WBTC", "WETH", "SUSHI", "YFII", "KSM", "EGLD", "DIA", "UMA", "BEL", "WING", "UNI", "NBS", "OXT", "SUN", "AVAX", "HNT", "FLM", "SCRT", "ORN", "UTK", "XVS", "ALPHA", "VIDT", "AAVE", "NEAR", "FIL", "INJ", "AERGO", "AUDIO", "CTK", "BOT", "AKRO", "AXS", "HARD", "RENBTC", "RENETH", "STRAX", "FOR", "UNFI", "ROSE", "SKL", "SUSD", "GLM", "GRT", "JUV", "PSG"];

export default {

    methods: {
        getFiatCurrencies: function () {
            return fiat_fiat;
        },
        getFiatForCryptoCurrencies: function () {
            return fiat_crypto;
        },
        getCryptoCurrencies: function () {
            return crypto;
        },
    },
};    