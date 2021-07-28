

interface Table {
    tableName: string
    tableData: TableData[]
}

interface TableData {
    headers: any
    data: any
}

export const tables
    = [
        {
            tableName: "agip1",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes", "2,540,143 GHST"],
					["No", "601 GHST"]
				]
            }
        },
		
		{
            tableName: "agip2",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes", "3,726,567 GHST"],
					["No", "108,143 GHST"]
				]
            }
        },
		
		{
            tableName: "agip3",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes", "3,836,093 GHST"],
					["No", "33,683 GHST"]
				]
            }
        },
		
		{
            tableName: "agip4",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["25K portals, 100 GHST each, 5 per txn (w/ stricter ape tax)", "3,540,000 GHST (54.25%)"],
					["No new haunt, Revisit in a month", "2,510,000 GHST (38.46%)"],
					["10K Portals, 100 GHST each, 1 per txn", "377,550 GHST (5.78%)"],
					["Pre-sale option", "98,410 GHST (1.51%)"]
				]
            }
        },

		{
            tableName: "agip5",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Only Haunt 1 should get a special background", "3,670,000 GHST (63.09%)"],
					["Each Haunts should have it’s own unique background", "2,010,000 GHST (34.53%)"],
					["Neither, leave it as is", "138,240 GHST (2.37%)"]
				]
            }
        },
		
		{
            tableName: "agip6",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, increase fees from 3 to 3.5", "4,570,000 GHST (93.69%)"],
					["No, leave the fees as they are", "307,890 GHST (6.31%)"]
				]
            }
        },
		
		{
            tableName: "agip7",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, successful SigProps give XP", "4,190,000 GHST (97.81%)"],
					["No, SigProps should not give XP", "93,780 GHST (2.19%)"]
				]
            }
        },
		
		{
            tableName: "agip8",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, give Gotchis voting power", "4,020,000 GHST (96.09%)"],
					["No voting power for Gotchis", "146,760 GHST (3.51%)"]
				]
            }
        },
		
		{
            tableName: "agip9",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, give Wearables voting power", "3,230,000 GHST (79.83%)"],
					["No voting power for Wearables", "799,900 GHST (19.75%)"]
				]
            }
        },
		
		{
            tableName: "agip10",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, let's partner with DinoSwap", "3,360,000 GHST (98.08%)"],
					["No, don't partner with DinoSwap", "65,950 GHST (1.92%)"]
				]
            }
        },
		
		{
            tableName: "launchHaunt2",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, launch Haunt 2", "7,110,000 GHST (94%)"],
					["No, do not launch Haunt 2 now", "453,850 GHST (6%)"]
				]
            }
        },
		
		{
            tableName: "marketplaceName",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Aavegotchi Baazaar", "973,380 GHST"],
					["Aavegotchi Maarket", "683,420 GHST"],
					["Neither", "150,380 GHST"]
				]
            }
        },
		
		{
            tableName: "ghstUsdcLp",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes", "2,560,000 GHST"],
					["No", "354,030 GHST"]
				]
            }
        },
		
		{
            tableName: "portalsPurchased",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["25 per txn (w/ Ape Tax)", "1,500,000 GHST"],
					["5 per txn", "921,830 GHST"],
					["10 per txn", "201,760 GHST"],
					["1 per txn", "169,000 GHST"]
				]
            }
        },
		
    ]
