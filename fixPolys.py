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

"""
x, y, width, height
325, 629, 185, 155,
"""
#x y


# rabatt 5
"""
x, y, width, height
1186, 330, 218, 159
"""
#x y



rabattView=[325, 629]

vaxt="""

777.66,689.04 789.00,708.66 777.36,725.00
             770.16,735.11 759.06,739.26 747.00,738.99
             725.54,738.49 707.74,718.74 717.83,699.00
             719.61,695.52 722.10,692.76 725.00,690.18
             730.38,685.42 735.17,683.98 742.00,682.46
             748.56,681.56 753.64,681.80 760.00,683.72
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
