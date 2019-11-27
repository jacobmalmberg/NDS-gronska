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
	polygonbild varchar(64),
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
	1334.00,638.18 1341.00,638.91 1341.00,638.91
	             1341.00,638.91 1362.00,640.17 1362.00,640.17
	             1362.00,640.17 1383.00,643.06 1383.00,643.06
	             1383.00,643.06 1392.00,643.06 1392.00,643.06
	             1409.99,645.50 1409.20,647.81 1429.00,644.73
	             1435.64,643.69 1447.45,639.65 1453.00,635.96
	             1462.75,629.48 1472.41,619.47 1485.00,620.04
	             1494.01,620.45 1495.39,625.14 1496.75,633.00
	             1497.24,635.81 1497.67,638.13 1497.49,641.00
	             1497.15,646.23 1496.36,651.42 1493.64,655.99
	             1489.57,662.83 1471.57,675.15 1464.00,678.42
	             1450.74,684.16 1447.72,683.64 1434.00,685.28
	             1434.00,685.28 1417.00,686.91 1417.00,686.91
	             1417.00,686.91 1381.00,684.00 1381.00,684.00
	             1381.00,684.00 1371.00,683.37 1371.00,683.37
	             1371.00,683.37 1354.00,685.00 1354.00,685.00
	             1345.78,685.04 1326.91,686.64 1320.10,682.15
	             1312.79,677.31 1316.44,669.90 1316.91,663.00
	             1317.46,655.06 1316.20,647.60 1314.00,640.00
	             1314.00,640.00 1334.00,638.18 1334.00,638.18
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

-- 
-- INSERT INTO vaxter values (null, 2, "Prakthäggmispel", "prakthaggmispel.jpg" , "
-- 	969.00,613.91 987.00,613.00 987.00,613.00
-- 	             987.00,613.00 1002.00,612.00 1002.00,612.00
-- 	             1002.00,612.00 1045.00,612.00 1045.00,612.00
-- 	             1045.00,612.00 1066.00,613.00 1066.00,613.00
-- 	             1066.00,613.00 1078.00,613.91 1078.00,613.91
-- 	             1094.14,615.02 1110.91,615.64 1126.00,622.00
-- 	             1126.00,622.00 1126.00,625.00 1126.00,625.00
-- 	             1110.91,631.36 1094.14,631.98 1078.00,633.09
-- 	             1078.00,633.09 1066.00,634.00 1066.00,634.00
-- 	             1066.00,634.00 1045.00,635.00 1045.00,635.00
-- 	             1045.00,635.00 1002.00,635.00 1002.00,635.00
-- 	             1002.00,635.00 990.00,634.04 990.00,634.04
-- 	             990.00,634.04 979.00,634.04 979.00,634.04
-- 	             979.00,634.04 969.00,633.09 969.00,633.09
-- 	             952.86,631.98 936.09,631.36 921.00,625.00
-- 	             921.00,625.00 921.00,622.00 921.00,622.00
-- 	             936.09,615.64 952.86,615.02 969.00,613.91
-- ",
-- "Lämplig som friväxande häck. Fullkomligt översållas med skira vita blommor tidig vår. Nya bladskott är röda och står i stark kontrast till buskens vita blommor. Snabbväxt och lättodlad."
-- , "Medel", "Sol till halvskugga", "4-5 m", "April-Maj", "Trädgårdsgödsel & naturgödsel", "Näringsrik & mullrik jord", "Perenn");
--
-- INSERT INTO vaxter values (null, 2, "Kirgislök", "kirgislok.jpg" , "
--
-- 	1025.36,684.16 1031.92,690.97 1031.92,700.00
-- 	             1031.92,708.60 1025.94,715.23 1019.00,719.53
-- 	             1006.57,727.25 991.33,729.16 977.00,729.00
-- 	             964.92,728.85 947.36,724.49 938.00,716.67
-- 	             926.63,707.16 925.86,694.25 937.02,684.18
-- 	             940.06,681.44 943.33,679.54 947.00,677.78
-- 	             954.89,674.02 962.48,672.71 971.00,671.42
-- 	             985.70,669.63 1005.13,672.38 1018.00,679.88
-- ",
-- "En växt som är lika vacker som den är hög. Blommar med stora boll-liknande blommor. Trivs tillsammans med perenner."
-- , "Lite", "Sol till halvskugga", "80-100 cm", "Maj", "Benmjöl", "Näringsrik", "Annuell");


INSERT INTO vaxter values (null, 3, "Klätterhortensia", "klatterhortensia.jpg" , "
	490.04,665.79 499.10,669.42 497.76,679.00
	             496.36,689.07 485.31,691.39 477.00,692.57
	             473.05,693.13 467.64,693.22 464.51,690.30
	             461.41,687.43 461.33,682.86 461.73,679.00
	             463.08,666.09 467.08,662.93 476.00,654.00
	             476.00,654.00 484.00,661.37 484.00,661.37
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

-71.23,-15.01 -64.23,-14.28 -64.23,-14.28 -64.23,-14.28 -43.23,-13.02 -43.23,-13.02 -43.23,-13.02 -22.23,-10.13 -22.23,-10.13 -22.23,-10.13 -13.23,-10.13 -13.23,-10.13 4.76,-7.69 3.97,-5.38 23.77,-8.46 30.41,-9.5 42.22,-13.54 47.77,-17.23 57.52,-23.71 67.18,-33.72 79.77,-33.15 88.78,-32.74 90.16,-28.05 91.52,-20.19 92.01,-17.38 92.44,-15.06 92.26,-12.19 91.92,-6.96 91.13,-1.77 88.41,2.8 84.34,9.64 66.34,21.96 58.77,25.23 45.51,30.97 42.49,30.45 28.77,32.09 28.77,32.09 11.77,33.72 11.77,33.72 11.77,33.72 -24.23,30.81 -24.23,30.81 -24.23,30.81 -34.23,30.18 -34.23,30.18 -34.23,30.18 -51.23,31.81 -51.23,31.81 -59.45,31.85 -78.32,33.45 -85.13,28.96 -92.44,24.12 -88.79,16.71 -88.32,9.81 -87.77,1.87 -89.03,-5.59 -91.23,-13.19 -91.23,-13.19 -71.23,-15.01 -71.23,-15.01

"	, "En rikligt blommande perenn. Lättodlad. Bra marktäckare som lever länge. Svagt doftande blomning. Bör klippas ner efter blomning så att den kan blomma igen. Kommer ursprunligen från karpaterna.
", "Medel", "Omväxlande sol/moln", "30-40 cm.", "Juni", "Trädgårdsgödsel", "Näringsrik jord", "Perenn",
"daggkapa_token.png");

INSERT INTO vaxt_db values (null, "Stäppsalvia" ,"stappsalvia.jpg" , "

	-10.15,-44.5 -4.15,-44.5 -4.15,-44.5 1.94,-44.47 10.06,-41.82 14.03,-36.89 15.65,-34.88 16.14,-31.04 16.65,-28.5 17.6,-23.77 19.87,-14.94 19.37,-10.5 19.37,-10.5 15.53,10.5 15.53,10.5 15.72,13.96 19.99,23.78 21.45,27.5 22.62,30.5 24.16,33.29 22.21,36.33 18.46,42.19 13.01,43.05 6.85,43.67 6.85,43.67 -24.15,44.5 -24.15,44.5 -24.15,44.5 -20.15,17.5 -20.15,17.5 -20.15,17.5 -21.15,0.5 -21.15,0.5 -21.25,-8.93 -20.25,-9.82 -16.96,-18.5 -16.1,-20.75 -13.2,-27.87 -13.52,-29.92 -13.52,-29.92 -21.15,-43.5 -21.15,-43.5 -21.15,-43.5 -10.15,-44.5 -10.15,-44.5


",
"En doftrik perenn. Trivs bäst i solen i väldränerad jord. Passar bra i blandade rabatter. Lockar till sig bin och fjärilar. Bör klippas ner efter blomning så att den kan blomma igen.
", "Medel", "Soligt", "40-60 cm", "Juni-Augusti", "Trädgårdsgödsel", "Väldränerad jord", "Perenn",
"stappsalvia_token.png");



INSERT INTO vaxt_db values (null, "Bergskörsbär", "bergskorsbar2.jpg" , "

21.52,-12.93 26.53,1.51 17.62,11.76 13.21,16.82 5.75,19.25 -0.85,18.85 -19.67,17.69 -26.54,-1.68 -15.52,-12.73 -12.15,-16.12 -8.37,-17.52 -3.85,-18.59 0.87,-19.25 4.61,-19.18 9.15,-17.5

",
"Ett nätt träd med bred, rundad krona. Blommar med enkla, rosa blommor. Frukterna är mörkröda och kommer på hösten. Trivs bra i ett varmt läge med näringsrik jord. Behöver inte beskäras."
, "Medel", "Soligt & skyddat", "9-12 m", "Maj", "Trädgårdsgödsel", "Näringsrik jord", "Perenn",
"bergskorsbar_token.png");


INSERT INTO vaxt_db values (null, "Prakthäggmispel", "prakthaggmispel.jpg" , "

-54.5,-9.59 -36.5,-10.5 -36.5,-10.5 -36.5,-10.5 -21.5,-11.5 -21.5,-11.5 -21.5,-11.5 21.5,-11.5 21.5,-11.5 21.5,-11.5 42.5,-10.5 42.5,-10.5 42.5,-10.5 54.5,-9.59 54.5,-9.59 70.64,-8.48 87.41,-7.86 102.5,-1.5 102.5,-1.5 102.5,1.5 102.5,1.5 87.41,7.86 70.64,8.48 54.5,9.59 54.5,9.59 42.5,10.5 42.5,10.5 42.5,10.5 21.5,11.5 21.5,11.5 21.5,11.5 -21.5,11.5 -21.5,11.5 -21.5,11.5 -33.5,10.54 -33.5,10.54 -33.5,10.54 -44.5,10.54 -44.5,10.54 -44.5,10.54 -54.5,9.59 -54.5,9.59 -70.64,8.48 -87.41,7.86 -102.5,1.5 -102.5,1.5 -102.5,-1.5 -102.5,-1.5 -87.41,-7.86 -70.64,-8.48 -54.5,-9.59

",
"Lämplig som friväxande häck. Fullkomligt översållas med skira vita blommor tidig vår. Nya bladskott är röda och står i stark kontrast till buskens vita blommor. Snabbväxt och lättodlad."
, "Medel", "Sol till halvskugga", "4-5 m", "April-Maj", "Trädgårdsgödsel & naturgödsel", "Näringsrik & mullrik jord", "Perenn",
"prakthaggmispel_token.png");

INSERT INTO vaxt_db values (null, "Kirgislök", "kirgislok.jpg" , "

46.47,-15.23 53.03,-8.42 53.03,0.61 53.03,9.21 47.05,15.84 40.11,20.14 27.68,27.86 12.44,29.77 -1.89,29.61 -13.97,29.46 -31.53,25.1 -40.89,17.28 -52.26,7.77 -53.03,-5.14 -41.87,-15.21 -38.83,-17.95 -35.56,-19.85 -31.89,-21.61 -24.0,-25.37 -16.41,-26.68 -7.89,-27.97 6.81,-29.76 26.24,-27.01 39.11,-19.51

",
"En växt som är lika vacker som den är hög. Blommar med stora boll-liknande blommor. Trivs tillsammans med perenner."
, "Lite", "Sol tll halvskugga", "80-100 cm", "Maj", "Benmjöl", "Näringsrik", "Annuell",
"kirgislok_token.png");


INSERT INTO vaxt_db values (null, "Klätterhortensia", "klatterhortensia.jpg" , "

9.82,-7.82 18.88,-4.19 17.54,5.39 16.15,15.46 5.09,17.78 -3.22,18.96 -7.16,19.52 -12.58,19.61 -15.71,16.69 -18.81,13.82 -18.88,9.25 -18.49,5.39 -17.13,-7.52 -13.13,-10.68 -4.22,-19.61 -4.22,-19.61 3.78,-12.24 3.78,-12.24

",
"Klätterväxt som är vackert förgrenad. Har grova grenar och frodig grönska. Blommar fint i skuggan och har stora vita blad. Fäster bra direkt på murar, väggar och plank. God boplats för fåglar."
, "Medel", "Skuggigt", "4-7 m", "Juni och Juli", "Rododendrongödsel", "Näringsrik & mullrik jord", "Perenn",
"klatterhortensia_token.png");
