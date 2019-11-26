use intnetdb; # Byt till din egen

drop table attraherar;
drop table insekter;
drop table mulm;
drop table vaxter;
drop table rabatter;
drop table foreningar;
drop table vaxt_db;




create table foreningar (
	id int NOT NULL AUTO_INCREMENT,
	namn varchar(64),
	bildnamn varchar(64),
	PRIMARY KEY (id)
);



create table rabatter (
	id int NOT NULL AUTO_INCREMENT,
	forening_id int,
	x int,
	y int,
	width int,
	height int,
	polygon LONGTEXT,
	jorddjup int,
	ytskikt varchar(64),
	PRIMARY KEY (id),
	FOREIGN KEY (forening_id) REFERENCES foreningar(id) ON DELETE CASCADE

);

create table vaxt_db (
	id int NOT NULL AUTO_INCREMENT,
	namn varchar(64),
	bildnamn varchar(64),
	polygon LONGTEXT,
	intro LONGTEXT,
	vatten varchar(64),
	lage varchar(64),
	hojd varchar(64),
	blommar varchar(64),
	naring varchar(64),
	jordman varchar(64),
	typ varchar(64),
	PRIMARY KEY (id)
);

create table vaxter (
	id int NOT NULL AUTO_INCREMENT,
	rabatt_id int,
	namn varchar(64),
	bildnamn varchar(64),
	polygon LONGTEXT,
	intro LONGTEXT,
	vatten varchar(64),
	lage varchar(64),
	hojd varchar(64),
	blommar varchar(64),
	naring varchar(64),
	jordman varchar(64),
	typ varchar(64),
	PRIMARY KEY (id),
	FOREIGN KEY (rabatt_id) REFERENCES rabatter(id) ON DELETE CASCADE
);


create table mulm (
	id int NOT NULL AUTO_INCREMENT,
	rabatt_id int,
	bildnamn varchar(64),
	polygon LONGTEXT,
	intro LONGTEXT,
	skotsel varchar(64),
	PRIMARY KEY (id),
	FOREIGN KEY (rabatt_id) REFERENCES rabatter(id) ON DELETE CASCADE
);

create table insekter (
	id int NOT NULL AUTO_INCREMENT,
	namn varchar(64),
	bildnamn varchar(64),
	kennetecken LONGTEXT,
	utbredning LONGTEXT,
	status LONGTEXT,
	levnadssatt  LONGTEXT,
	hotad varchar(64),
	PRIMARY KEY (id)

);


create table attraherar (
	id int NOT NULL AUTO_INCREMENT,
	insekts_id int,
	vaxt_id int,
	mulm_id int,
	PRIMARY KEY (id),
	FOREIGN KEY (insekts_id) REFERENCES insekter(id)


);


INSERT INTO foreningar values (null, "Högviltsgatan", "hogviltsgatan.png");


INSERT INTO rabatter values (null, 1, 1285, 579, 475, 220, "
                1362.00,602.14 1337.00,591.09 1337.00,591.09
                             1327.23,587.61 1300.46,583.09 1290.00,583.00
                             1290.00,583.00 1290.00,602.00 1290.00,602.00
                             1290.00,602.00 1291.00,618.00 1291.00,618.00
                             1291.00,618.00 1291.00,675.00 1291.00,675.00
                             1291.00,675.00 1292.00,690.00 1292.00,690.00
                             1292.00,690.00 1292.00,722.00 1292.00,722.00
                             1292.04,724.68 1292.23,730.33 1293.98,732.41
                             1295.90,734.67 1303.15,735.07 1306.00,734.91
                             1306.00,734.91 1323.00,734.00 1323.00,734.00
                             1323.00,734.00 1323.00,749.00 1323.00,749.00
                             1323.00,749.00 1324.00,765.00 1324.00,765.00
                             1324.00,765.00 1324.00,792.00 1324.00,792.00
                             1324.00,792.00 1369.00,792.00 1369.00,792.00
                             1369.00,792.00 1386.00,791.00 1386.00,791.00
                             1386.00,791.00 1514.00,791.00 1514.00,791.00
                             1514.00,791.00 1529.00,790.00 1529.00,790.00
                             1529.00,790.00 1657.00,790.00 1657.00,790.00
                             1657.00,790.00 1672.00,789.00 1672.00,789.00
                             1672.00,789.00 1753.00,789.00 1753.00,789.00
                             1753.00,789.00 1754.00,769.00 1754.00,769.00
                             1754.00,769.00 1757.00,701.00 1757.00,701.00
                             1757.00,701.00 1759.00,666.00 1759.00,666.00
                             1759.00,666.00 1739.00,667.00 1739.00,667.00
                             1739.00,667.00 1726.00,667.84 1726.00,667.84
                             1717.57,666.74 1713.43,653.61 1710.00,647.00
                             1705.16,649.50 1703.66,652.63 1700.66,657.00
                             1698.03,660.82 1692.43,667.81 1691.42,672.00
                             1689.93,678.12 1695.21,696.83 1694.68,704.00
                             1693.54,719.16 1693.78,722.10 1689.42,737.00
                             1688.24,741.05 1687.20,745.24 1685.18,748.99
                             1681.41,755.96 1671.99,759.39 1665.00,762.42
                             1665.00,762.42 1646.00,770.47 1646.00,770.47
                             1646.00,770.47 1609.00,775.00 1609.00,775.00
                             1609.00,775.00 1612.96,744.00 1612.96,744.00
                             1613.08,740.22 1612.50,738.47 1612.08,735.00
                             1612.08,735.00 1612.08,725.00 1612.08,725.00
                             1611.94,720.34 1609.88,708.78 1605.73,706.17
                             1603.49,704.78 1599.59,705.00 1597.00,705.00
                             1584.70,704.98 1571.61,704.47 1561.01,697.15
                             1558.06,695.12 1556.18,692.68 1553.87,690.00
                             1547.99,683.16 1543.57,677.44 1544.04,668.00
                             1544.29,663.07 1546.59,658.52 1548.40,654.00
                             1553.60,641.01 1562.15,628.07 1574.00,620.34
                             1581.55,615.43 1589.53,611.16 1598.00,608.05
                             1603.43,606.06 1612.45,603.79 1617.00,601.00
                             1608.76,597.39 1598.82,595.66 1590.00,593.79
                             1590.00,593.79 1557.00,588.09 1557.00,588.09
                             1557.00,588.09 1542.00,589.00 1542.00,589.00
                             1525.83,589.03 1513.61,591.41 1498.00,595.12
                             1470.54,601.64 1461.30,603.87 1436.00,617.22
                             1424.00,623.55 1416.52,628.10 1406.00,637.00
                             1397.08,619.68 1379.08,609.69 1362.00,602.14
                             "
, 700, "Inget");


INSERT INTO rabatter values (null, 1, 871, 577, 391, 219, "
906.87,595.70 944.27,586.36 963.00,585.09
             963.00,585.09 981.00,586.00 981.00,586.00
             992.19,586.02 1006.97,587.43 1018.00,589.42
             1018.00,589.42 1044.00,594.44 1044.00,594.44
             1048.65,594.81 1059.19,589.67 1064.00,587.81
             1072.27,584.61 1091.38,579.60 1100.00,580.09
             1100.00,580.09 1107.00,581.04 1107.00,581.04
             1107.00,581.04 1116.00,581.04 1116.00,581.04
             1116.00,581.04 1148.00,586.78 1148.00,586.78
             1148.00,586.78 1163.00,592.45 1163.00,592.45
             1172.30,596.30 1176.80,603.77 1181.00,604.88
             1184.83,605.89 1192.40,598.31 1196.00,596.20
             1202.77,592.23 1215.35,587.88 1223.00,585.33
             1229.63,583.12 1233.87,581.09 1241.00,581.00
             1250.61,580.89 1251.98,581.10 1252.00,591.00
             1252.00,591.00 1252.00,610.00 1252.00,610.00
             1252.00,610.00 1253.00,625.00 1253.00,625.00
             1253.00,625.00 1254.00,712.00 1254.00,712.00
             1254.00,712.00 1255.00,729.00 1255.00,729.00
             1255.00,729.00 1255.00,766.00 1255.00,766.00
             1255.00,766.00 1256.00,781.00 1256.00,781.00
             1256.00,781.00 1256.00,793.00 1256.00,793.00
             1256.00,793.00 927.00,793.00 927.00,793.00
             927.00,793.00 919.72,792.01 919.72,792.01
             919.72,792.01 915.87,781.00 915.87,781.00
             915.87,781.00 908.29,752.00 908.29,752.00
             908.29,752.00 880.88,648.00 880.88,648.00
             880.88,648.00 872.00,614.00 872.00,614.00
             872.00,614.00 890.00,603.63 890.00,603.63
 ", 600, "Inget");



INSERT INTO rabatter values (null, 1, 325, 629, 185, 155, "
365.49,674.00 377.52,656.00 377.52,656.00
             377.52,656.00 391.00,642.02 391.00,642.02
             392.45,640.64 394.77,638.20 396.91,638.20
             399.93,638.20 405.66,646.58 407.60,649.00
             407.60,649.00 425.00,671.00 425.00,671.00
             428.56,675.49 432.63,679.75 435.00,685.00
             435.00,685.00 458.00,666.59 458.00,666.59
             460.12,664.83 466.86,658.85 468.99,658.15
             471.86,657.21 473.41,659.06 475.11,661.06
             475.11,661.06 485.87,675.00 485.87,675.00
             487.98,677.78 495.91,687.19 496.13,689.99
             496.34,692.75 493.82,694.62 491.98,696.27
             487.82,700.00 483.02,704.64 478.00,707.00
             478.00,707.00 507.00,741.00 507.00,741.00
             499.55,751.20 491.18,772.05 480.00,777.20
             475.61,779.22 470.76,779.70 466.00,780.02
             466.00,780.02 458.00,780.73 458.00,780.73
             449.42,780.29 434.92,772.21 427.00,768.25
             427.00,768.25 360.00,735.25 360.00,735.25
             360.00,735.25 335.00,723.00 335.00,723.00
             347.41,699.51 351.41,695.12 365.49,674.00
", 800, "Inget");




INSERT INTO vaxter values (null, 1, "Jättedaggkåpa", "jattedaggkapa.jpg" , "
	1361.52,630.95 1369.87,630.19 1375.00,631.85
             1375.00,631.85 1394.00,639.76 1394.00,639.76
             1409.45,643.53 1407.73,641.00 1420.00,641.00
             1420.00,641.00 1432.00,641.96 1432.00,641.96
             1446.76,642.53 1471.53,627.53 1485.00,620.75
             1493.68,616.38 1495.93,613.05 1506.00,613.00
             1506.00,613.00 1513.00,613.00 1513.00,613.00
             1521.17,613.16 1521.36,617.82 1523.00,625.00
             1523.00,625.00 1486.00,636.00 1486.00,636.00
             1486.00,636.00 1486.00,647.00 1486.00,647.00
             1485.99,654.49 1486.10,655.33 1479.00,658.42
             1477.09,659.25 1473.94,660.71 1472.00,661.13
             1468.23,661.93 1446.44,658.80 1441.00,658.15
             1438.12,657.81 1432.56,656.83 1430.00,657.52
             1426.77,658.40 1421.82,662.52 1419.00,664.63
             1419.00,664.63 1400.00,678.00 1400.00,678.00
             1400.00,678.00 1382.00,663.60 1382.00,663.60
             1379.20,661.36 1374.13,656.93 1371.00,655.73
             1371.00,655.73 1338.00,650.07 1338.00,650.07
             1333.81,648.91 1326.81,644.72 1323.06,642.27
             1314.71,636.80 1321.38,626.44 1326.17,624.61
             1329.10,623.50 1333.95,625.31 1337.00,626.00
             1337.00,626.00 1345.00,614.00 1345.00,614.00
             1350.98,619.08 1351.79,624.86 1357.04,628.15
", "En rikligt blommande perenn. Lättodlad. Bra marktäckare som lever länge. Svagt doftande blomning. Bör klippas ner efter blomning så att den kan blomma igen. Kommer ursprunligen från karpaterna.
", "Medel", "Omväxlande sol/moln", "30-40 cm.", "Juni", "Trädgårdsgödsel", "Näringsrik jord", "Perenn");

INSERT INTO vaxter values (null, 1, "Stäppsalvia" ,"stappsalvia.jpg" , "
	1713.00,687.00 1719.00,687.00 1719.00,687.00
	             1725.09,687.03 1733.21,689.68 1737.18,694.61
	             1738.80,696.62 1739.29,700.46 1739.80,703.00
	             1740.75,707.73 1743.02,716.56 1742.52,721.00
	             1742.52,721.00 1738.68,742.00 1738.68,742.00
	             1738.87,745.46 1743.14,755.28 1744.60,759.00
	             1745.78,762.00 1747.31,764.79 1745.36,767.83
	             1741.61,773.69 1736.16,774.55 1730.00,775.17
	             1730.00,775.17 1699.00,776.00 1699.00,776.00
	             1699.00,776.00 1703.00,749.00 1703.00,749.00
	             1703.00,749.00 1702.00,732.00 1702.00,732.00
	             1701.90,722.57 1702.90,721.68 1706.19,713.00
	             1707.05,710.75 1709.95,703.63 1709.63,701.58
	             1709.63,701.58 1702.00,688.00 1702.00,688.00
	             1702.00,688.00 1713.00,687.00 1713.00,687.00
",
"En doftrik perenn. Trivs bäst i solen i väldränerad jord. Passar bra i blandade rabatter. Lockar till sig bin och fjärilar. Bör klippas ner efter blomning så att den kan blomma igen.
", "Medel", "Soligt", "40-60 cm", "Juni-Augusti", "Trädgårdsgödsel", "Väldränerad jord", "Perenn");



INSERT INTO vaxter values (null, 1, "Bergskörsbär", "bergskorsbar2.jpg" , "
	1457.37,721.13 1462.38,735.57 1453.47,745.82
	             1449.06,750.88 1441.60,753.31 1435.00,752.91
	             1416.18,751.75 1409.31,732.38 1420.33,721.33
	             1423.70,717.94 1427.48,716.54 1432.00,715.47
	             1436.72,714.81 1440.46,714.88 1445.00,716.56
",
"Ett nätt träd med bred, rundad krona. Blommar med enkla, rosa blommor. Frukterna är mörkröda och kommer på hösten. Trivs bra i ett varmt läge med näringsrik jord. Behöver inte beskäras."
, "Medel", "Soligt & skyddat", "9-12 m", "Maj", "Trädgårdsgödsel", "Näringsrik jord", "Perenn");


INSERT INTO vaxter values (null, 2, "Prakthäggmispel", "prakthaggmispel.jpg" , "
887.95,626.87 885.91,622.60 886.68,620.39
             887.37,618.37 890.23,617.16 892.00,616.25
             892.00,616.25 907.00,608.75 907.00,608.75
             919.27,602.64 917.79,604.75 930.00,603.91
             930.00,603.91 943.00,602.91 943.00,602.91
             943.00,602.91 986.00,597.93 986.00,597.93
             986.00,597.93 995.00,597.93 995.00,597.93
             998.11,598.11 1002.89,600.70 1006.00,601.99
             1006.00,601.99 1031.00,612.58 1031.00,612.58
             1033.35,613.56 1045.05,618.81 1046.58,618.67
             1051.20,618.24 1060.57,603.89 1066.00,602.97
             1068.20,602.61 1071.91,604.36 1074.00,605.20
             1077.34,606.53 1092.54,612.83 1095.00,612.62
             1100.44,612.14 1109.73,599.45 1115.00,599.08
             1119.15,598.79 1129.14,607.66 1134.00,607.72
             1140.16,607.80 1146.50,599.10 1154.00,599.99
             1154.00,599.99 1223.00,618.00 1223.00,618.00
             1223.00,618.00 1210.00,657.00 1210.00,657.00
             1210.00,657.00 1174.00,633.00 1174.00,633.00
             1171.86,637.05 1170.59,638.44 1167.88,642.00
             1166.17,644.25 1162.55,649.83 1159.91,650.56
             1157.41,651.26 1154.08,648.84 1152.00,647.60
             1152.00,647.60 1134.00,636.80 1134.00,636.80
             1131.76,635.46 1127.83,632.60 1125.17,633.41
             1121.09,634.66 1110.37,651.11 1105.83,652.19
             1102.95,652.88 1095.80,648.64 1093.00,647.25
             1093.00,647.25 1072.00,637.25 1072.00,637.25
             1069.25,635.87 1062.85,632.46 1060.00,632.33
             1055.23,632.11 1042.33,643.18 1038.00,646.37
             1035.75,648.02 1032.96,650.43 1030.00,650.23
             1030.00,650.23 999.58,634.39 999.58,634.39
             997.08,634.12 991.48,636.95 989.00,638.00
             989.00,638.00 967.00,647.42 967.00,647.42
             964.75,648.37 959.16,651.06 957.00,651.08
             954.10,651.10 952.09,649.00 950.00,647.26
             946.68,644.50 935.27,633.67 932.00,633.13
             928.85,632.61 923.72,636.04 921.00,637.58
             921.00,637.58 897.00,650.00 897.00,650.00
             897.00,650.00 888.80,629.00 888.80,629.00
",
"Lämplig som friväxande häck. Fullkomligt översållas med skira vita blommor tidig vår. Nya bladskott är röda och står i stark kontrast till buskens vita blommor. Snabbväxt och lättodlad."
, "Medel", "Sol till halvskugga", "4-5 m", "April-Maj", "Trädgårdsgödsel & naturgödsel", "Näringsrik & mullrik jord", "Perenn");

INSERT INTO vaxter values (null, 2, "Kirgislök", "kirgislok.jpg" , "

	1025.36,684.16 1031.92,690.97 1031.92,700.00
	             1031.92,708.60 1025.94,715.23 1019.00,719.53
	             1006.57,727.25 991.33,729.16 977.00,729.00
	             964.92,728.85 947.36,724.49 938.00,716.67
	             926.63,707.16 925.86,694.25 937.02,684.18
	             940.06,681.44 943.33,679.54 947.00,677.78
	             954.89,674.02 962.48,672.71 971.00,671.42
	             985.70,669.63 1005.13,672.38 1018.00,679.88
",
"En växt som är lika vacker som den är hög. Blommar med stora boll-liknande blommor. Trivs tillsammans med perenner."
, "Lite", "Sol till halvskugga", "80-100 cm", "Maj", "Benmjöl", "Näringsrik", "Annuell");


INSERT INTO vaxter values (null, 3, "Klätterhortensia", "klatterhortensia.jpg" , "
485.78,669.61 486.66,675.52 489.30,676.65
             491.29,677.51 496.67,675.53 499.00,675.00
             499.00,675.00 497.00,689.00 497.00,689.00
             497.00,689.00 482.00,687.00 482.00,687.00
             482.00,687.00 482.89,699.44 482.89,699.44
             482.89,699.44 471.00,704.00 471.00,704.00
             471.00,704.00 474.00,686.00 474.00,686.00
             474.00,686.00 464.00,689.00 464.00,689.00
             464.00,689.00 465.00,678.00 465.00,678.00
             465.00,678.00 458.00,679.00 458.00,679.00
             458.00,679.00 459.00,672.00 459.00,672.00
             459.00,672.00 452.00,673.00 452.00,673.00
             460.98,657.55 465.18,660.55 476.00,650.00
             482.92,655.41 483.13,659.03 485.13,667.00
",
"Klätterväxt som är vackert förgrenad. Har grova grenar och frodig grönska. Blommar fint i skuggan och har stora vita blad. Fäster bra direkt på murar, väggar och plank. God boplats för fåglar."
, "Medel", "Skuggigt", "4-7 m", "Juni och Juli", "Rododendrongödsel", "Näringsrik & mullrik jord", "Perenn");

INSERT INTO insekter values (null, "Stortapetserarbi", "bi.jpg",
"Stortapetserarbiet är ett stort bi med en kroppslängd på 14 till 17 millimeter. Honan har en kraftig, svart kropp med brungul till mörkbrun behåring, samt på tergiternas (ovansidans bakkroppssegment) bakkanter täta, blekgula hårremmar, som ger bakkroppen ett randigt utseende. Som alla buksamlarbin har hon en tät pollenborste på buken, framtill orangeröd och mot bakkroppsspetsen svart. Hanens kropp ger ett kortare och kompaktare intryck än honans, men det finns också andra utseendemässiga skillnader mellan hanen och honan, varav de mest märkbara är att hanen har en längre, gul- till gråbrun päls än honan, och gulvita, påtagligt breda framfötter (artnamnet lagopoda betyder harfot – auktorn Linné tyckte fötterna såg ut som harfötter). De stora fötterna används för att hålla honan stilla under parningen.
",
"Detta bi finns i Europa (med undantag av Brittiska öarna) österut till Kaukasus och genom delar av Centralasien bort till Japan, samt i Nordafrika. I Sverige förekom arten tidigare från Skåne över Bohuslän till Gästrikland samt på Öland och Gotland. Den har emellertid gått tillbaka sedan 1950-talet och finns numera endast i Stockholm, östra Skåne (där den beräknas snart dö ut) samt på Öland och Gotland och betraktas därför som sårbar. Nedgången har varit mycket kraftig.",
"Den svenska population beräknas vara endast 5% av populationen på 1950-talet. Främsta hotet är det moderna, storskaliga jordbruket.
",
"Stortapetserarbiet är ett värmeälskande bi som gärna vill ha habitat med någon form av markstörning, som militära övningsfält, vägkanter och ruderatområden (skräpmark). Det samlar pollen främst från tistlar med stora blommor och växter i klintsläktet, i synnerhet väddklint. Trivs även bra i trafikerad miljö.
",

"Nära hotad."
);

INSERT INTO insekter values (null, "Bredbandad ekbarkbock", "ekbarkbock.jpg",
"Den bredbandade ekbarkbocken har en kroppslängd på
cirka 18 millimeter. Benen och antennerna är långa och
kraftiga och rödbruna till färgen. Grundfärgen på kroppen
är svart, med gula band på huvud, halssköld och täckvingar.
",
"Detta bi finns i Europa (med undantag av Brittiska öarna) österut till Kaukasus och genom delar av Centralasien bort till Japan, samt i Nordafrika. I Sverige förekom arten tidigare från Skåne över Bohuslän till Gästrikland samt på Öland och Gotland. Den har emellertid gått tillbaka sedan 1950-talet och finns numera endast i Stockholm, östra Skåne (där den beräknas snart dö ut) samt på Öland och Gotland och betraktas därför som sårbar. Nedgången har varit mycket kraftig.
",
"Den bredbandade ekbarkbocken är i Sverige klassad som akut hotad. Under 1900-talet har dess utbredning i landet gått starkt tillbaka, även om den troligen aldrig hört till de allmännare skalbaggarna i Sverige. Äldre fynd finns rapporterade från Skåne, Blekinge, Småland, Halland, Västergötland, Östergötland, Uppland, Öland och Gotland. De största hoten mot arten är exploatering av dess livsmiljö, eftersom dess utbredningsområde är så begränsat, och därpå följande effekter som habitatförlust, genom att de gamla ekar som den behöver för sin larvutveckling tas bort. Även inom sitt övriga utbredningsområde har denna art på många håll minskat kraftig under senare tid.
",
"I Sverige uppträder de fullbildade skalbaggarna från slutet av juni till mitten av juli. Efter parningen lägger honan äggen ett och ett i springor på barken på stammar och grova grenar i döda ekar. Efter cirka två veckor kläcks äggen och larven lever sedan under barken och gnager gångar i veden. Utvecklingstiden från ägg till imago är troligen värmeberoende. I Sverige tar den vanligen två år, medan den i sydligare delar av utbredningsområdet kan gå på ett år. Förpuppningen sker under barken, i Sverige vanligen i början av juni, och puppstadiet varar i omkring två veckor.
",

"Akut hotad"
);







INSERT INTO mulm values (null, 1, "mulm.png","
	1578.00,710.00 1578.00,764.00 1578.00,764.00
             1578.00,764.00 1542.00,764.00 1542.00,764.00
             1542.00,764.00 1542.00,710.00 1542.00,710.00
             1542.00,710.00 1578.00,710.00 1578.00,710.00
",
"Mulmen finns till för att simulera ekosystemet i en nydöd ek. Hit lockar eklevande insekter. Vissa av dessa är idag utrotningshotade i Sverige.

Mulm är det lösa material som ansamlas inuti ihåliga träd. Den består framför allt murken ved. Där finns också ofta exkrementer från insekter, fåglar, gamla fågelbon samt rester av döda djur. I mulmen lever en artrik och särpräglad fauna, bestående av bland annat skalbaggar och klokrypare. Välkända arter är läderbagge och mulmknäppare.
",
"Fyll på periodvis med kvistar, löv och döda fåglar."
);

INSERT INTO attraherar values (null, 1, 2, null);
INSERT INTO attraherar values (null, 2, null, 1);

INSERT INTO vaxt_db values (null, "Jättedaggkåpa", "jattedaggkapa.jpg" , "
	1361.52,630.95 1369.87,630.19 1375.00,631.85
             1375.00,631.85 1394.00,639.76 1394.00,639.76
             1409.45,643.53 1407.73,641.00 1420.00,641.00
             1420.00,641.00 1432.00,641.96 1432.00,641.96
             1446.76,642.53 1471.53,627.53 1485.00,620.75
             1493.68,616.38 1495.93,613.05 1506.00,613.00
             1506.00,613.00 1513.00,613.00 1513.00,613.00
             1521.17,613.16 1521.36,617.82 1523.00,625.00
             1523.00,625.00 1486.00,636.00 1486.00,636.00
             1486.00,636.00 1486.00,647.00 1486.00,647.00
             1485.99,654.49 1486.10,655.33 1479.00,658.42
             1477.09,659.25 1473.94,660.71 1472.00,661.13
             1468.23,661.93 1446.44,658.80 1441.00,658.15
             1438.12,657.81 1432.56,656.83 1430.00,657.52
             1426.77,658.40 1421.82,662.52 1419.00,664.63
             1419.00,664.63 1400.00,678.00 1400.00,678.00
             1400.00,678.00 1382.00,663.60 1382.00,663.60
             1379.20,661.36 1374.13,656.93 1371.00,655.73
             1371.00,655.73 1338.00,650.07 1338.00,650.07
             1333.81,648.91 1326.81,644.72 1323.06,642.27
             1314.71,636.80 1321.38,626.44 1326.17,624.61
             1329.10,623.50 1333.95,625.31 1337.00,626.00
             1337.00,626.00 1345.00,614.00 1345.00,614.00
             1350.98,619.08 1351.79,624.86 1357.04,628.15
", "En rikligt blommande perenn. Lättodlad. Bra marktäckare som lever länge. Svagt doftande blomning. Bör klippas ner efter blomning så att den kan blomma igen. Kommer ursprunligen från karpaterna.
", "Medel", "Omväxlande sol/moln", "30-40 cm.", "Juni", "Trädgårdsgödsel", "Näringsrik jord", "Perenn");

INSERT INTO vaxt_db values (null, "Stäppsalvia" ,"stappsalvia.jpg" , "
	1713.00,687.00 1719.00,687.00 1719.00,687.00
	             1725.09,687.03 1733.21,689.68 1737.18,694.61
	             1738.80,696.62 1739.29,700.46 1739.80,703.00
	             1740.75,707.73 1743.02,716.56 1742.52,721.00
	             1742.52,721.00 1738.68,742.00 1738.68,742.00
	             1738.87,745.46 1743.14,755.28 1744.60,759.00
	             1745.78,762.00 1747.31,764.79 1745.36,767.83
	             1741.61,773.69 1736.16,774.55 1730.00,775.17
	             1730.00,775.17 1699.00,776.00 1699.00,776.00
	             1699.00,776.00 1703.00,749.00 1703.00,749.00
	             1703.00,749.00 1702.00,732.00 1702.00,732.00
	             1701.90,722.57 1702.90,721.68 1706.19,713.00
	             1707.05,710.75 1709.95,703.63 1709.63,701.58
	             1709.63,701.58 1702.00,688.00 1702.00,688.00
	             1702.00,688.00 1713.00,687.00 1713.00,687.00
",
"En doftrik perenn. Trivs bäst i solen i väldränerad jord. Passar bra i blandade rabatter. Lockar till sig bin och fjärilar. Bör klippas ner efter blomning så att den kan blomma igen.
", "Medel", "Soligt", "40-60 cm", "Juni-Augusti", "Trädgårdsgödsel", "Väldränerad jord", "Perenn");



INSERT INTO vaxt_db values (null, "Bergskörsbär", "bergskorsbar2.jpg" , "
	1457.37,721.13 1462.38,735.57 1453.47,745.82
	             1449.06,750.88 1441.60,753.31 1435.00,752.91
	             1416.18,751.75 1409.31,732.38 1420.33,721.33
	             1423.70,717.94 1427.48,716.54 1432.00,715.47
	             1436.72,714.81 1440.46,714.88 1445.00,716.56
",
"Ett nätt träd med bred, rundad krona. Blommar med enkla, rosa blommor. Frukterna är mörkröda och kommer på hösten. Trivs bra i ett varmt läge med näringsrik jord. Behöver inte beskäras."
, "Medel", "Soligt & skyddat", "9-12 m", "Maj", "Trädgårdsgödsel", "Näringsrik jord", "Perenn");


INSERT INTO vaxt_db values (null, "Prakthäggmispel", "prakthaggmispel.jpg" , "
16.95,49.87 14.91,45.6 15.68,43.39 16.37,41.37 19.23,40.16 21.0,39.25 21.0,39.25 36.0,31.75 36.0,31.75 48.27,25.64 46.79,27.75 59.0,26.91 59.0,26.91 72.0,25.91 72.0,25.91 72.0,25.91 115.0,20.93 115.0,20.93 115.0,20.93 124.0,20.93 124.0,20.93 127.11,21.11 131.89,23.7 135.0,24.99 135.0,24.99 160.0,35.58 160.0,35.58 162.35,36.56 174.05,41.81 175.58,41.67 180.2,41.24 189.57,26.89 195.0,25.97 197.2,25.61 200.91,27.36 203.0,28.2 206.34,29.53 221.54,35.83 224.0,35.62 229.44,35.14 238.73,22.45 244.0,22.08 248.15,21.79 258.14,30.66 263.0,30.72 269.16,30.8 275.5,22.1 283.0,22.99 283.0,22.99 352.0,41.0 352.0,41.0 352.0,41.0 339.0,80.0 339.0,80.0 339.0,80.0 303.0,56.0 303.0,56.0 300.86,60.05 299.59,61.44 296.88,65.0 295.17,67.25 291.55,72.83 288.91,73.56 286.41,74.26 283.08,71.84 281.0,70.6 281.0,70.6 263.0,59.8 263.0,59.8 260.76,58.46 256.83,55.6 254.17,56.41 250.09,57.66 239.37,74.11 234.83,75.19 231.95,75.88 224.8,71.64 222.0,70.25 222.0,70.25 201.0,60.25 201.0,60.25 198.25,58.87 191.85,55.46 189.0,55.33 184.23,55.11 171.33,66.18 167.0,69.37 164.75,71.02 161.96,73.43 159.0,73.23 159.0,73.23 128.58,57.39 128.58,57.39 126.08,57.12 120.48,59.95 118.0,61.0 118.0,61.0 96.0,70.42 96.0,70.42 93.75,71.37 88.16,74.06 86.0,74.08 83.1,74.1 81.09,72.0 79.0,70.26 75.68,67.5 64.27,56.67 61.0,56.13 57.85,55.61 52.72,59.04 50.0,60.58 50.0,60.58 26.0,73.0 26.0,73.0 26.0,73.0 17.8,52.0 17.8,52.0
",
"Lämplig som friväxande häck. Fullkomligt översållas med skira vita blommor tidig vår. Nya bladskott är röda och står i stark kontrast till buskens vita blommor. Snabbväxt och lättodlad."
, "Medel", "Sol till halvskugga", "4-5 m", "April-Maj", "Trädgårdsgödsel & naturgödsel", "Näringsrik & mullrik jord", "Perenn");

INSERT INTO vaxt_db values (null, "Kirgislök", "kirgislok.jpg" , "
154.36,107.16 160.92,113.97 160.92,123.0 160.92,131.6 154.94,138.23 148.0,142.53 135.57,150.25 120.33,152.16 106.0,152.0 93.92,151.85 76.36,147.49 67.0,139.67 55.63,130.16 54.86,117.25 66.02,107.18 69.06,104.44 72.33,102.54 76.0,100.78 83.89,97.02 91.48,95.71 100.0,94.42 114.7,92.63 134.13,95.38 147.0,102.88
",
"En växt som är lika vacker som den är hög. Blommar med stora boll-liknande blommor. Trivs tillsammans med perenner."
, "Lite", "Sol till halvskugga", "80-100 cm", "Maj", "Benmjöl", "Näringsrik", "Annuell");


INSERT INTO vaxt_db values (null, "Klätterhortensia", "klatterhortensia.jpg" , "
485.78,669.61 486.66,675.52 489.30,676.65
             491.29,677.51 496.67,675.53 499.00,675.00
             499.00,675.00 497.00,689.00 497.00,689.00
             497.00,689.00 482.00,687.00 482.00,687.00
             482.00,687.00 482.89,699.44 482.89,699.44
             482.89,699.44 471.00,704.00 471.00,704.00
             471.00,704.00 474.00,686.00 474.00,686.00
             474.00,686.00 464.00,689.00 464.00,689.00
             464.00,689.00 465.00,678.00 465.00,678.00
             465.00,678.00 458.00,679.00 458.00,679.00
             458.00,679.00 459.00,672.00 459.00,672.00
             459.00,672.00 452.00,673.00 452.00,673.00
             460.98,657.55 465.18,660.55 476.00,650.00
             482.92,655.41 483.13,659.03 485.13,667.00
",
"Klätterväxt som är vackert förgrenad. Har grova grenar och frodig grönska. Blommar fint i skuggan och har stora vita blad. Fäster bra direkt på murar, väggar och plank. God boplats för fåglar."
, "Medel", "Skuggigt", "4-7 m", "Juni och Juli", "Rododendrongödsel", "Näringsrik & mullrik jord", "Perenn");
