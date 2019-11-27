#rabatt 1 - Jättedaggkåpa, stäppsalvia, Bergskörsbär, mulm
"""
x, y, width, height
1285, 579, 475, 220
"""
#rabatt 2 Prakthäggmispel & kirgislok
"""
x, y, width, height
871, 577, 391, 219,
"""
#rabatt 3 Klätterhortensia
"""
x, y, width, height
325, 629, 185, 155,
"""
#x y
rabattView=[325, 629]

vaxt="""

	490.04,665.79 499.10,669.42 497.76,679.00
	             496.36,689.07 485.31,691.39 477.00,692.57
	             473.05,693.13 467.64,693.22 464.51,690.30
	             461.41,687.43 461.33,682.86 461.73,679.00
	             463.08,666.09 467.08,662.93 476.00,654.00
	             476.00,654.00 484.00,661.37 484.00,661.37
                 """

minX=100000
minY=100000
maxX=0
maxY=0

out=""
koordLista= vaxt.split()

for index, s in enumerate(koordLista):
    a,b = s.split(",")
    print(a)
    aFix = float(a) - float(rabattView[0])
    bFix = float(b) - float(rabattView[1])
    minX=min(minX, float(aFix))
    minY=min(minY, float(bFix))
    maxX=max(maxX, float(aFix))
    maxY=max(maxY, float(bFix))

    print(b)
    # input()
    out+=" "+str(round(aFix,2))+","+str(round(bFix,2))

print(out)





xC= (float(maxX) - float(minX)) / 2
yC = (float(maxY) - float(minY)) / 2

print(str(minX))
print(str(xC))
print(str(minY))
print(str(yC))

input()
koordLista= out.split()
final=""
for index, s in enumerate(koordLista):
    a,b = s.split(",")
    aFix = float(a) - float(minX) - xC
    bFix = float(b) - float(minY) - yC

    final+=" "+str(round(aFix,2))+","+str(round(bFix,2))

print(final)
