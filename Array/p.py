import os 
n = 1
for i in range (8,19):
    os.system("mv "+ str(i)+".js "+ str(n)+".js")
    n+=1